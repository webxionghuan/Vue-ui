//app_server_00/app.js
//0:下载mysql express模块
//1:引入二个模块 mysql express
const mysql = require("mysql");
const express = require("express");
//1.1 引入模块 cors
const cors = require("cors");



//2:创建连接池 很大提高效率方法
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"xz"
});
//3:创建express对象
var server = express();
//3.1 配置允许访问列 脚手架8080
server.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//3.2 配置静态资源目录 public
server.use(express.static("public"));
//3.3：配置第三方中间件
const bodyParser = require("body-parser");
//3.4: 配置json是否是自动转换 
server.use(bodyParser.urlencoded({extended:false}))

//#练习:NewsInfo.vue 
//0:为发表评论绑定点击事件  17:55
//1:获取评论内容
//2:获取新闻编号
//3:发送ajax  post 请求
//4:获取返回结果
//5:如果评论成功 清空原有发表内容

//4:为express对象绑定监听端口 3000
server.listen(3000);
//功能一:用户登录
//1:用户get 请求路径/login
server.get("/login",(req,res)=>{
  //2:获取二个参数 uname upwd
  var u = req.query.uname;
  var p = req.query.upwd;
  //3:创建sql
  var sql = "SELECT id FROM xz_login";
  sql+=" WHERE uname = ? AND upwd = md5(?)";
  //4:执行sql
  pool.query(sql,[u,p],(err,result)=>{
      if(err)throw err;
      //5:获取数据库返回结果
      //6:返回客户数据
      if(result.length==0){
        res.send({code:-1,msg:"用户名或密码有误"});
      }else{
        res.send({code:1,msg:"登录成功"});
      }
  })
});

//功能二:商品分页显示
//用户get 请求路径 /getProducts
server.get("/getProducts",(req,res)=>{
 //1:获取用户参数 pno pageSize
 var pno = req.query.pno;
 var pageSize = req.query.pageSize;
 //2:为参数设置默认值  pno:1 pageSize:4
 if(!pno){pno=1}
 if(!pageSize){pageSize=4}
 //3:创建sql语句
 var sql = "";
 sql+=" SELECT l.lid,l.lname,l.price,p.md";
 sql+=" from xz_laptop l,xz_laptop_pic p";
 sql+=" WHERE l.lid = p.laptop_id";
 sql+=" GROUP BY l.lid";
 sql+=" LIMIT ?,?";
 //3.1:计算开始记录数,几条记录  
 var offset = (pno-1)*pageSize;
 pageSize = parseInt(pageSize);
 //4:执行sql语句
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
 //5:获取数据库返回结果并且发送脚手架
 })
});
//功能三:首页轮播图
server.get("/imglist",(req,res)=>{
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/index/banner1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/index/banner2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/index/banner3.png"},
    {id:4,img_url:"http://127.0.0.1:3000/img/index/banner4.png"},
  ];
  res.send({code:1,data:rows});
});
//功能四:首页九宫格
server.get("/grid",(req,res)=>{
  var rows = [
    {id:1,title:"新闻",img_url:"http://127.0.0.1:3000/img/grid/menu1.png"},
    {id:2,title:"商品",img_url:"http://127.0.0.1:3000/img/grid/menu2.png"},
    {id:3,title:"点餐",img_url:"http://127.0.0.1:3000/img/grid/menu3.png"},
    {id:4,title:"位置",img_url:"http://127.0.0.1:3000/img/grid/menu4.png"},
    {id:5,title:"搜索",img_url:"http://127.0.0.1:3000/img/grid/menu5.png"},
    {id:6,title:"电话",img_url:"http://127.0.0.1:3000/img/grid/menu6.png"},            
  ];
  res.send(rows);
});

//功能五:新闻分页显示
server.get("/news",(req,res)=>{
  //*参数    pno 页码 pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //*默认值  1   7
  if(!pno){pno=1}
  if(!pageSize){pageSize=7}
  var sql = " SELECT id,title,ctime,";
      sql +=" point,img_url";
      sql +=" FROM xz_news";
      sql +=" LIMIT ?,?";
  var offset = (pno-1)*pageSize;
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
       if(err)throw err;
       res.send({code:1,data:result});
  });    
  //*json   {code:1,data:[]}
});

//功能六:新闻详细信息
server.get("/newsInfo",(req,res)=>{
  //1:获取客户参数 nid
  var nid = req.query.nid;
  //2:拦载用户非法参数
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(nid)){
     res.send({code:-1,msg:"参数格式不正确"});
     return;
  }
  var sql = "SELECT id,content,ctime";
  sql +=" ,img_url";
  sql +=" FROM xz_news WHERE id = ?";
  nid = parseInt(nid);
  pool.query(sql,[nid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result});
  })
  //3:{code:1,data:[]}
})

//功能七:发送评论
server.post("/addcomment",(req,res)=>{
  //1:获取参数 nid 新闻编号 content评论内容
  var nid = req.body.nid;
  var content = req.body.content;
  //2:sql
  var sql = "INSERT INTO xz_comment VALUES(null,?,?,now())";
  pool.query(sql,[nid,content],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"添加成功"})    
  })
  //3:json
});

//功能八:评论列表
server.get("/getComment",(req,res)=>{
  //1:参数 
  var nid = req.query.nid;
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 5;
  }
  //2:sql
  var sql = " SELECT id,nid,content,ctime";
  sql+=" FROM xz_comment";
  sql+=" WHERE nid = ?";
  sql+=" LIMIT ?,?";
  var offset = (pno-1)*pageSize;
  pageSize = parseInt(pageSize);
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result});
  })
  //3:result
});

//功能九:查询购物车列表
server.get("/getShopCart",(req,res)=>{
   //1:参数 uid 用户登录成功保存服务器
   //node.js 程序不是保存脚手架
   //服务器对象 session
   var uid = 1; //后面替换
   //2:sql
   var sql = "SELECT id,pid,price,uid,pname";
   sql+=" FROM xz_cart";
   sql+=" WHERE uid = ?";
   pool.query(sql,[uid],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result});
   })
   //3:json
});

//功能十:删除购物车中某个商品
server.post("/removeItem",(req,res)=>{
  var id = req.body.id;
  var sql = " DELETE FROM xz_cart";
  sql+=" WHERE id = ?";
  id = parseInt(id);
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    //执行sql语句影响行数
    //INSERT UPDATE DELETE 判断条件
    if(result.affectedRows > 0){
       res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
  })
});

//功能十一:删除用户选中(多个)商品
server.get("/removeMItem",(req,res)=>{
   //1:参数 5,10
   var ids = req.query.ids;
   //2:sql
   var sql = "DELETE FROM xz_cart";
   sql+=" WHERE id IN ("+ids+")";
   //3:json
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.affectedRows>0){
       res.send({code:1,msg:"成功删除多个商品"})
     }else{
       res.send({code:-1,msg:"删除失败"});
     }
   })
}); 

//功能十二:用户点击添加购物车按钮
server.get("/addcart",(req,res)=>{
//0:向数据表 xz_cart 添加一列count INT
//ALTER TABLE xz_cart ADD count INT;
//UPDATE xz_cart SET count = 1;
//1:获取参数 uid pid pname price
var uid = 1;
var pid =    req.query.pid;
var pname =  req.query.pname;
var price =  req.query.price;
//2:判断用户是否登录
//3:如果当前用户未登录 程序停止
//  返回出错信息  请登录
//4:创建sql语句查询当前用户是否添加过此商品
var sql = "SELECT id FROM xz_cart";
sql+=" WHERE uid = ? AND pid = ?";
pool.query(sql,[uid,pid],(err,result)=>{
   if(err)throw err;
   //回调函数:什么时候执行函数
   //sql语句执行完毕并且返回结果
   if(result.length==0){
     var sql = `INSERT INTO xz_cart`;
     sql+=` VALUES(null,${uid},${pid},${price},'${pname}',1)`;
   }else{//10:34
     var sql = `UPDATE xz_cart SET`;
     sql+=` count=count+1`;
     sql+=` WHERE uid = ${uid} AND pid=${pid}`;
   }
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     res.send({code:1,msg:"添加成功"})
   }); 
})
});

//http://127.0.0.1:3000/addcart
//?pid=1&pname=aa&price=9