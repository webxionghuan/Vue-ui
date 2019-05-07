//app_server_00/app.js
//0:下载mysql express模块
//1:引入二个模块 mysql express
const mysql = require("mysql");
const express = require("express");
//2:创建连接池 很大提高效率方法
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"xz"
});
//3:创建express对象
var server = express();
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
//启动 app.js
//测试 


