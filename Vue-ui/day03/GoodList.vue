<template>
  <div class="app-goodlist">
     <!--商品详细信息 start  -->
     <div class="goods-item" v-for="item of list">
       <img :src="'http://127.0.0.1:3000/'+item.md" /> 
       <h4>{{item.lname}}</h4>
       <div class="info">
           <span class="now">{{item.price}}</span>
       </div>
       <div class="sell">
            <span>热卖中</span>
       </div>
     </div>
     <!--商品详细信息 end-->
     <!--加载更多..-->
     <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
 export default {
   data(){
     return {
       list:[]   //模板中显示商品列表
     }
   },
   created() {
     //当组件创建成功后立即调用加载下一页方法
     this.loadMore();
   },
   methods:{
     //加载下一页数据并且将数据显示在模块上
     loadMore(){
       //1:创建变量url请求地址
       var url = "http://127.0.0.1:3000";
       url+="/getProducts"
       //2:发送ajax请求
       this.axios.get(url).then(result=>{
           //3:获取服务器返回结果保存data
           this.list = result.data.data;
           //console.log(this.list);
       })
     }
   },
 }
</script>
<style>
  /*外层父元素*/
  .app-goodlist{
   display:flex;   /*弹性布局*/
   flex-wrap:wrap; /*子元素换行*/
   justify-content:space-between;/*两端对齐*/
   padding:4px;
  }
  /*商品信息*/
  .app-goodlist .goods-item{
    width:49%;    /*商品信息元素宽度*/
    border:1px solid #ccc; /*边框*/
    margin:2px 0; /*外补丁*/
    padding:2px;
    display:flex; /*子元素弹性布局*/
    flex-direction:column;/*排列方式:按列*/
    min-height:245px;/*最小高度*/
  }
  /*商品图片*/
  .app-goodlist .goods-item img{
    width:100%;
  }
  /*商品名称*/
  /*商品价格*/
</style>