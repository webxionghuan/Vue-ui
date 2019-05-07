<template>
    <div class="app-home">
        <!--顶部导航条 mint-ui-->
        
        <!--轮播图     mint-ui-->
        <mt-swipe  :auto="2500"> 
            <mt-swipe-item v-for="item of navlist"><img :src="item.img_url"></mt-swipe-item>
        </mt-swipe>
        <!--九宫格         mui-->
            <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item of gridlist">
                    <a href="#">
		                <img :src="item.img_url" class=""  @click.prevent="jump" :data-id="item.id">
		                <div class="mui-media-body">{{item.title}}</div>
                    </a>
                </li>
            </ul>                
        <!--tabbar        mui-->
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            navlist:[],//轮播图列表
            gridlist:[] //九宫格列表
        }
    },
    created(){
       this.handleImage();
       this.handleGrid();
    },
    methods:{
        //Home.vue
        jump(e){
           var id=e.target.dataset.id;
           var path="/";
           if( id==1){
               path="/NewsList";
           }else if(id==2){
               path="/GoodList";
           }else{
               path="/"
           }
            this.$router.push(path);
        },
        //加载轮播图数据
        handleImage(){
            //1.发送ajax获取轮播数据
            var url="http://127.0.0.1:3000/imglist"
            this.axios.get(url).then(result=>{
                //2.获取返回结果
                // console.log(result.data.data);
            //3.保存在data属性中
                 this.navlist=result.data.data;
            })
        },
        //加载九宫格
        handleGrid(){  
        //发送ajax获取九宫格数据
        var url="http://127.0.0.1:3000/grid"
        this.axios.get(url).then(result=>{
              //2.获取返回结果
                // console.log(result.data);
            //3.保存在data属性中
            this.gridlist=result.data;
        })
        },
        //加载tabbar
        
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
/*九宫格图片宽度*/
.app-home .mui-grid-9 img{
    width:60px;
    height:60px;
}
/*九宫格背景色*/
.app-home .mui-grid-view.mui-grid-9{
    background-color:#fff;
}
</style>

