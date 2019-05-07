<template>
    <div class="app-goodlist">
      
        <!--商品详细信息 start-->
        <div class="goods-item" v-for="item of list">
            <img :src="'http://127.0.0.1:3000/'+item.md" @click.prevent="jumpInfo" :data-lid="item.lid">
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
        //当组件成功后立即调用加载下一页方法
        this.loadMore();

    },
    methods:{
        //跳转
        jumpInfo(e){
            var lid=e.target.dataset.lid;
            console.log(lid);
            this.$router.push("/GoodInfo?lid="+lid);
        },

        //加载下一页的数据并且将数据显示在模板上
        loadMore(){
            //0.获取当前页码
            this.pno++;
            //1.创建变量url请求地址
            var url="http://127.0.0.1:3000/getProducts?pno="+this.pno;
            //2.发送ajax请求
            this.axios.get(url).then(result=>{
                //3.获取服务器返回结果保存data
                // this.list=result.data.data;
                //3.1获取服务器返回结果  追加list
                //3.2使用 concat 拼接数组
               var rows=this.list.concat(result.data.data);
               this.list=rows;
            });
        },

    },
}
</script>

<style>
    /*外层父元素*/
    .app-goodlist{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:4px;
    }
    /*商品信息*/
    div.app-goodlist div.goods-item{
        width:49%;
        border:1px solid #ccc;
        margin:2px 0;
        padding:2px;
        display: flex;
        flex-direction: column;
        min-height: 245px;
    }
    /*商品图片*/
    .app-goodlist .goods-item img{
        width:100%;
    }
    /*商品名称*/

    /*商品价格*/

</style>


