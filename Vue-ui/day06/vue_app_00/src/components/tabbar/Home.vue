<template>
  <div class="app-home">
    <!--顶部导航条 mint-ui-->
    <mt-header fixed title="学子商城"></mt-header>
    <!--轮播图     mint-ui-->
    <mt-swipe  :auto="4000">
      <mt-swipe-item v-for="item of navlist" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
    <!--九宫格     mui-->
	  <ul class="mui-table-view mui-grid-view mui-grid-9">
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item of gridlist">
      <a href="#">
		   <img :src="item.img_url" />
		   <div class="mui-media-body">{{item.title}}</div>
       </a>
       </li>
      </ul>
    <!--tabbar.html 55~72   mui-->
   	<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact">
        
        </span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
  </div>
</template>
<script>
export default {
   data(){
     return {
       navlist:[], //轮播图列表
       gridlist:[]//保存九宫格数组
     }
   },
   created() {
     this.handleImage();
     this.handleGrid();
   },
   methods:{
     handleGrid(){
      //1:发送ajax获取九宫格数据
      var url = "http://127.0.0.1:3000";
      url+="/grid";
      this.axios.get(url).then(result=>{
      //2:获取返回数据
      //console.log(result.data);
      //3:保存gridlist
      this.gridlist = result.data;
      });
     },
     //加载轮轮图数据
     handleImage(){
      //1:发送ajax获取轮播数据
      var url = "http://127.0.0.1:3000";
      url+="/imglist";
      this.axios.get(url).then(result=>{
        //2:获取返回结果
        //3:保存data属性中
        this.navlist = result.data.data;
      })
     }
   }
}
</script>
<style>
  .app-home .mint-swipe{
    height:200px;
  }
  .app-home .mint-swipe img{
    width:100%;
  }
  /*九宫格图片宽度 逻辑像素*/
  .app-home .mui-grid-9 img{
    width:60px;
    height:60px;
  }
  /*九宫格背景色 白色*/
  .app-home .mui-grid-view.mui-grid-9{
    background-color:#fff
  }

</style>