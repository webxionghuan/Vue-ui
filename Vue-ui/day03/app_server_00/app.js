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
  var pagSize = req.query.pageSize;
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

