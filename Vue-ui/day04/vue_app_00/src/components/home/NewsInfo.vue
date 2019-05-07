<template>
   <div class="app-newsinfo">
      <!--新闻详细-->
      <div class="mui-card">
				<div class="mui-card-header mui-card-media" :style="'height:40vw;background-image:url('+info.img_url+')'"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
			<p>{{info.ctime | datetimeFilter}}</p>
						<p style="color: #333;">
               {{info.content}}
            </p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
      <!--新闻评论-->
   			<div class="mui-card">
				<div class="mui-card-header">
         </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<textarea placeholder="请吐槽最多120个字" maxlength="120">
            </textarea>
            <mt-button size="large" type="primary">发表评论</mt-button>
					</div>
				</div>
				<div class="mui-card-footer"></div>
			</div>   
   </div>
</template>
<script>
  export default {
    data(){
      return {
        nid:this.$route.query.nid,
        info:{}   //新闻详细对象
      }
    },
    created() {
      this.findNewsInfo()
    },
    methods:{
      //查询新闻详细信息
      findNewsInfo(){
        //1:获取新闻编号
        var id = this.nid;
        //2:创建url保存请求地址
        var url = "http://127.0.0.1:3000/";
        url+="newsInfo?nid="+id;
        console.log(url);
        //3:发送ajax请求
        this.axios.get(url).then(result=>{
           this.info = result.data.data[0];
           //console.log(this.info);
        })
        //4:获取服务器返回数据保存 info
      }
    }
  }
</script>
<style>
</style>