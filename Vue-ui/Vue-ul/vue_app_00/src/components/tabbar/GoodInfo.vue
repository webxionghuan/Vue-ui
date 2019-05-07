<template>
    <div class="app-goodinfo">
        <mt-header title="商品详情"></mt-header>
        <div class="mui-card">
				<div class="mui-card-header">{{info.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>{{info.price}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="danger" size="small" @click="addcart">加入购物车</mt-button>
                </div>
			</div>
    </div>
</template>

<script>
export default {
    data(){
        return {//上一个组件传递id
            lid:this.$route.query.lid,
            info:{}//显示商品对象
            }
    },
    created(){
        this.findProduct();
    },
    methods:{
        //当组件创建成功后加载当前商品信息
        findProduct(){
            //1.获取商品lid
            //2.发送ajax请求
            var url="http://127.0.0.1:3000/findProduct?lid="+this.lid;
            this.axios.get(url).then(result=>{
                //console.log(result);
                this.info=result.data.data[0];
            })
            //3.获取服务器返回结果[]

            //4.保存返回结果
        },
        //添加购物车功能
        addcart(){
            //获取三个参数 pid pname price
            var pid = this.lid;
            var pname = this.info.lname;
            var price = this.info.price;
            console.log(pid+":"+pname+":"+price);

            //发送ajax请求
            var url="http://127.0.0.1:3000/addcart?pid="+pid+"&price="+price+"&pname"+pname;
            this.axios.get(url).then(result=>{
                console.log(result);
                //如果将商品已经加入购物车
                //GoodInfo.vue  addcart(){}
                this.$store.commit("increment");
            })
            //获取返回结果 提示

        }
    },
}
</script>

<style>

</style>

