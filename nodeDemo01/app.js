const express = require("express");
const mysql = require("mysql2");
const http = require("http");
const url = require("url");
const fs = require("fs");
const mysqlPool = require("./dbTools");

const app = express();

app.listen(3001);

app.all("./",function (req,res,next) {
  res.send("test");
  next();
})

app.use("/",require("./router/home/"))

app.use("/user",require("./router/user/"))

app.use("/home",require("./router/home/"))

/*数据库 插入查询 数据库连接池*/

// async function insert() {
//   let sql = "INSERT INTO user_info (name,age,address) VALUES (?,?,?)";
//   let result = await mysqlPool.execute(sql, ["bobo", 18, "xian"]);
//   // console.log(result);
// }
//
// async function query() {
//   let sql = "SELECT * FROM user_info";
//   let result = await mysqlPool.execute(sql, null);
//   console.log(result[0]);
// }
//
// insert();
// query();

// const dao = require("dao");
//
// const db = require('db');
//
// db.find();
// // var params = url.parse("https://www.baidu.com?name=bobo&age=123",true).query;
// // console.log(params);
// // console.log(`name:${params.name}，age:${params.age}`)


/*文件*/
//
// fs.stat('./fs_test',(err,data)=>{
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log("isDirectory:" + data.isDirectory());
//   console.log("isFile:" + data.isFile());
// })

// function getData(resolve,reject) {
//   setTimeout(function () {
//     resolve("bobo");
//   },1000);
// }
//
// var p = new Promise(getData)
//
// p.then(function (value) {
//   console.log(value);
// })

/*async wait */
// async function test1(){
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("test");
//     },1000)
//   });
// }
//
// async function test2(){
//   var name = await test1();
//   console.log(name);
// }
//
// test2();

/*文件流读数据*/
// var readStream = fs.createReadStream("test1.txt");
// var string = "";
// var count = 0;
// readStream.on("data",function (data) {
//   string += data;
//   string += "\n";
//   count ++;
// })
//
// readStream.on("end",function () {
//   console.log("data:" + string);
//   console.log(count);
// })
//
// readStream.on("error",function (error) {
//   console.log(error);
// })

// var writeStream = fs.createWriteStream(".test123.txt");
//
// for (i = 0; i < 1000 ; i++){
//   writeStream.write("testtsetaetatesttsetaetatesttsetaetatesttsetaetatesttsetaetatesttsetaeta","utf-8");
// }
// writeStream.end();
//
// writeStream.on("finish",function () {
// console.log("finish");
// })
// writeStream.on("error",function (error) {
//   console.log(error);
// })
//
// http.createServer( (req,res) => {
//   res.writeHead(200,{"content-type":"text/html;charset='utf-8'"})
//   res.write("res");
//   res.write("哈哈哈","utf-8");
//   res.end("end");
// }).listen(3000);

// const db = mysql.createConnection({host:"localhost",user:"root",password:"wb283919.",database:"db_demo01"});
// db.connect((err)=>{
//   if (err) throw err;
//   console.log("链接成功");
// })


