<template>
    <div class="app-newslist">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item of list">
                <router-link :to="'/NewsInfo?nid='+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>{{item.ctime | dateTimeFilter}}</span>
                            <span>点击 {{item.point}} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>

        <!--加载更多-->
        <mt-button @click="loadMore" size="large" type="primary">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
         list:[],
         pno:0,   
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        loadMore(){
            this.pno++;
            var url="http://127.0.0.1:3000/news?pno="+this.pno;
            this.axios.get(url).then(result=>{
                var news=this.list.concat(result.data.data);
                this.list=news;
            })
        }
    }
}
</script>

<style>
/**修改 新闻内容 时间 点击次数 两端对齐**/
.app-newslist .mui-ellipsis{
    display:flex;
    font-size:12px;
    color:#226aff;
    justify-content:space-between;
}
.app-newslist .mui-ellipsis span:first-child{
    color:blueviolet;
}
.app-newslist .mui-ellipsis span:last-child{
    color:red;
}
</style>

