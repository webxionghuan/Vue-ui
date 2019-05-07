<template>
    <div class="app-shopcart">
       <div class="mui-card">
            <div class="mui-card-header">
                全选
                <input type="checkbox" @click="selectAll" :checked="allcb">
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <!--商品信息开始-->
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell mui-media" v-for="(item,i) of list">
                            <a href="javascript:;">
                                <img class="mui-media-object mui-pull-left" src="">
                                <div class="mui-media-body">
                                <p class='mui-ellipsis'>
                                    <!--商品复选框-->
                                     <input type="checkbox" :data-id="item.id" :checked="item.cb" :data-i="i" @click="modifyItem">
                                     <!---->
                                    {{item.pname}}
                                    {{item.price}}
                                    <input type="button" value="删除" :data-id="item.id" :data-idx="i" @click="removeItem">
                                </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                   <!--商品信息结束-->
                </div>
            </div>
            <div class="mui-card-footer">
                <input type="button" value="删除选中的商品" @click="delItem" >
            </div>
		</div>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            list:[],
            allcb:false,//全选的状态
        }
    },
    created(){
        this.loadMore();
    },
    methods:{
        loadMore(){
            //1：创建url地址
            var url="http://127.0.0.1:3000/getShopCart";
            //2：发送ajax请求
            this.axios.get(url).then(result=>{
                //3：获取返回数据
                //4:保存list
                //this.list=result.data.data;
                //5:循环显示
                //6:获取返回的数组
                var rows = result.data.data;
                //7:为数组中每个对象添加属性Cb初始值为false
                for(var item of rows){
                    item.cb=false;
                }
                //8:将数据保存list中
                this.list=rows;
                console.log(this.list);
            })
        },
        removeItem(e){
            //1:获取购物车商品id
            var id=e.target.dataset.id;
            var idx=e.target.dataset.idx;
            console.log(id);
            //2:创建url
            var url="http://127.0.0.1:3000/removeItem";
            var postData=this.qs.stringify({
                   id:id
                });
            // //3:发送ajax请求
             this.axios.post(url,postData).then(result=>{
                //4:获取返回结果
                //5:提示删除结果
                if(result.data.code==1){
                    //删除对应数据中的值
                    //1:获取下标
                    //2:依据下标删除指定数组商品
                    //删除数组中对应下标商品
                    //splice(数组下标，个数)
                    this.list.splice(idx,1);
                    Toast("删除成功")
                }else{
                    Toast("删除失败");
                }
                //6:list对应商品项删除？

            })
            
        },
        //多选删除按钮,删除选中的多个商品
        delItem(){
            //1：创建空字符串
            var html="";
            //2：遍历数据中的元素
            for(var item of this.list){
            //3：判断cb==true
                if(item.cb){
                //4：保存id拼接字符串
                    html += item.id+",";
                }
            }
            
             //5:截取字符串去除最后
             html = html.substring(0,html.length-1);
             if(html.length==0){
                 Toast("请选中您需要删除商品！")
                 return;
             }
            //6:发送ajax请求
            var url="http://127.0.0.1:3000/removeMItem?ids="+html;
            this.axios.get(url).then(result=>{
                 //7:获取返回数据提示  删除成功或者失败
                 if(result.data.code==1){
                     Toast("删除成功");
                     this.loadMore();
                 }else{
                     Toast("删除失败");
                 }
            })
           
        },
        modifyItem(e){
            //1.获取当前元素的选中状态 true false
            var rs = e.target.checked;
            //2.当前元素在数组的下标
             var i=e.target.dataset.i;
             //console.log(rs+":"+i);
            //3.将状态赋值当前数组下标中对象cb值
            this.list[i].cb=rs;
            //console.log(this.list);

            // 判断全选复选框状态
            // 1:获取数组个数
            var size1=this.list.length;
            // 2:计算数组中cb  true   元素个数
            var count = 0;
            for(var item of this.list){
                if(item.cb){
                    count++;
                }
            }
            //console.log(size1+":"+count);
            // 3:数组个数==cb  true  个数[累加和]
            if(count == size1){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
            // 4:将allcb = true

            // 5:否则 allcb= false

        },
        //全选按钮，选中所有商品选中，清除状态，所有商品清除
        selectAll(e){
        //1:获取全选按钮选中状态
            var rs=e.target.checked;
            //2:遍历数组所有元素
            for(var item of this.list){
                //3:item.cb=全选按钮
                item.cb=rs;
            }
            this.allcb=rs;
        },
    }
}
</script>

<style>
    input:hover{
        background-color:red !important ; 
    }
</style>

