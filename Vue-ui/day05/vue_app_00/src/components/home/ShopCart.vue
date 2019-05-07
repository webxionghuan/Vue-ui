<template>
  <div class="app-shopcart">
   <div class="mui-card">
				<div class="mui-card-header">
          页眉
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
           <!--商品信息开始-->
           <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,i) of list">
					<a href="javascript:;">
						<div class="mui-media-body">
							<p class='mui-ellipsis'>
                {{item.pname}}
                {{item.price}}
                <input type="button" value="删除" @click="removeItem" 
                :data-id="item.id"
                :data-idx="i"/>
              </p>
						</div>
					</a>
				</li>
        </ul>
           <!--商品信息结束-->
					</div>
				</div>
				<div class="mui-card-footer">
        页脚</div>
			</div>
  </div>
</template>
<script>
 import {Toast} from "mint-ui";
 export default {
   data(){
     return {
       list:[] //购物车列表
     }
   },
   created() {
     this.loadMore();
   },
   methods:{
     removeItem(e){
      //1:获取购物车商品id
      var id = e.target.dataset.id;
      var idx = e.target.dataset.idx;

      //2:创建url
      var url = "http://127.0.0.1:3000"
      url+="/removeItem";
      var postData = this.qs.stringify({
          id:id
      });
      //3:发送ajax请求
      this.axios.post(url,postData).then(result=>{
        if(result.data.code==1){
          //删除对应数据中值
          //1:获取下标 17:30
          //2:依据下标删除指定数组商品
          //删除数组中对应下标商品
          //splice(数组下标,个数)
          this.list.splice(idx,1);
          Toast("删除成功");
        }else{
          Toast("删除失败");
        }
      })
      //4:获取返回结果
      //5:提示删除结果
      //6:list对应商品项删除?
     },
     //加载当前用户购物车列表
     loadMore(){
       //1:创建url地址
       var url = "http://127.0.0.1:3000";
       url+="/getShopCart";
       //2:发送ajax请求
       this.axios.get(url).then(result=>{
        //3:获取返回数据
        //4:保存list
        this.list = result.data.data;
        //5:循环显示
       })
     }
   }
 }
</script>
<style>
</style>