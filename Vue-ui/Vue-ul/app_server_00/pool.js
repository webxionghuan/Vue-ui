//�������ӳأ���һ��ģ����Ҫ���ӣ�ֻ��Ҫ�����ģ�鼴��
const mysql=require('mysql');
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'xz',
  connectionLimit:20
});
//�������ӳض���pool
module.exports=pool;