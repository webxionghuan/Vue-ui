<template>
  <div class="app-goodlist">
     <!--商品详细信息 start-->
     <div class="goods-item">
       <img src="http://127.0.0.1:3000/img/product/md/57ad359dNd4a6f130.jpg" />
       <h4>苹果本</h4>
       <div class="info">
           <span class="now">9999.99</span>
       </div>
       <div class="sell">
            <span>热卖中</span>
       </div>
     </div>
     <!--商品详细信息 end-->
     <!--加载更多..-->
  </div>
</template>
<script>
 export default {
   data(){
     return {}
   }
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