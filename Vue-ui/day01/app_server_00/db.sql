#完成任务用户登录
#创建用户表 xz_login
#添加一行数据
INSERT INTO 表名 VALUES(新值1,..)
#更新数据
UPDATE 表名 SET 列=新值 WHERE 条件
#删除指定数据(少用)
DELETE FROM 表名 WHERE 条件;
#查询(不要用*号) 需要哪列查询哪列
SELECT * FROM 表名

#示例:
SELECT id,uname,upwd FROM xz_login;
INSERT INTO xz_login VALUES(null,'kk',md5('123'));
#将id=2用户密码修改 456
UPDATE xz_login SET upwd=md5('456')
WHERE id = 2;
DELETE FROM xz_login WHERE id = 2;

CREATE TABLE xz_login(
  id   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
INSERT INTO xz_login
 VALUES(null,'tom',md5('123'));