网站首页
<template>
    <div class="app-index">
        <div class="row index-shou">
            <div class="col-lg-6 col-sm-12 col-xs-12 index-kuang">
               <div style="font-size:0.9rem;color:#393939;" class="pl-2 pt-3">地图资料</div>
               <div :style="{height:'25rem',width:'100%'}" ref="myEchart"></div>
                <ul class="tu-right">
                    <li class="mt-3">代理商数</li>
                    <li class="shuzi mt-2">9999</li>
                    <li class="mt-3">商家数</li>
                    <li class="shuzi mt-2">9999</li>
                    <li class="mt-3">总利润</li>
                    <li class="shuzi mt-2">100,000</li>
                    <li class="mt-3">营业额</li>
                    <li class="shuzi mt-2">9,100,000</li>
                     <li class="shu">福建省</li>
                </ul>
            </div>
            <div class="col-lg-6 col-sm-12 col-xs-12 index-kuang">
                <div>
                    <div style="font-size:0.9rem;color:#393939">报表统计</div>
                    <div class="pd">
                        <div>报表统计时间:</div>
                        <div class="center">
                            <div class="rl">
                                <input type="date" value="2019-03-28" min="2019-3-16" max="2020-10-1"/>
                            </div>
                            <span>  </span>
                            <div class="rl">
                                <input type="date" value="2019-03-28" min="2019-3-16" max="2020-10-1"/>
                            </div>
                        </div>
                        <div class="right"><a href="#">图表&nbsp;&nbsp;</a>|&nbsp;&nbsp;<a href="#">表格&nbsp;&nbsp;</a></div>
                    </div>
                    <div class="pd">
                        <div>区域报表统计:</div>
                        <div class="center">
                            <select>
                                <option class="opn" value="">省份</option>
                                <option value="">江西</option>
                                <option value="">福建</option>
                                <option value="">上海</option>      
                            </select>
                            <select>
                                <option class="opn" value="">省份</option>
                                <option value="">江西</option>
                                <option value="">福建</option>
                                <option value="">上海</option>      
                            </select> 
                            <select>
                                <option class="opn" value="">省份</option>
                                <option value="">江西</option>
                                <option value="">福建</option>
                                <option value="">上海</option>      
                            </select>   
                        </div>
                        <div class="right">
                            <a href="#">日&nbsp;&nbsp;</a>|&nbsp;&nbsp;<a href="#">月&nbsp;&nbsp;</a>|<a href="#">季度&nbsp;&nbsp;</a>
                        </div>
                    </div>
                    <div id="main" style="width:35rem;height:18.75rem;">
                    </div>
                </div>
            </div>
        </div>
        <div class="row index-di">
            <div class="col-lg-12 col-sm-12 col-xs-12 index-ro">
                <div class="col-lg-12 col-sm-12 col-xs-12 tb">
                    <div class="col-lg-6 col-sm-12 col-xs-12 tb-head">
                        <p>账号信息</p>
                        <div class="select">
                            <select>
                                <option class="opn" value="">省份</option>
                                <option value="">江西</option>
                                <option value="">福建</option>
                                <option value="">上海</option>      
                            </select>
                            <select>
                                <option class="opn" value="">省份</option>
                                <option value="">江西</option>
                                <option value="">福建</option>
                                <option value="">上海</option>      
                            </select> 
                            <select>
                                <option class="opn" value="">省份</option>
                                <option value="">江西</option>
                                <option value="">福建</option>
                                <option value="">上海</option>      
                            </select>
                        </div>  
                    </div>
                    <div class="col-lg-6 col-sm-12 col-xs-12">
                        <div class="right">
                            <input style="background-color:#eee;border-radius:25px;" type="text" value="搜索">
                            <a class="" style="background-color:#eee;border-radius:25px; width:4.125rem;" href="#">新增</a>
                        </div>    
                    </div>
                </div>
                <div class="col-12-lg col-12-sm bt">
                    <div class='col-lg-12 col-sm-12 col-xs-12 id'>
                        <table>
                            <tr style="background-color:#eee">
                                <td>ID</td>
                                <td>账号</td>
                                <td>手机号</td>
                                <td>代理商地区（省）</td>
                                <td>商家数</td>
                                <td>营业额</td>
                                <td>总利润</td>
                                <td>分成比例</td>
                                <td class="id-tb">管理</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>s1</td>
                                <td>159121423</td>
                                <td>福建省厦门市思明区</td>
                                <td>99</td>
                                <td>9999</td>
                                <td>999</td>
                                <td>10%</td>
                                <td class="id-tb">编辑</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>s1</td>
                                <td>159121423</td>
                                <td>福建省厦门市思明区</td>
                                <td>99</td>
                                <td>9999</td>
                                <td>999</td>
                                <td>10%</td>
                                <td class="id-tb">编辑</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>s1</td>
                                <td>159121423</td>
                                <td>福建省厦门市思明区</td>
                                <td>99</td>
                                <td>9999</td>
                                <td>999</td>
                                <td>10%</td>
                                <td class="id-tb">编辑</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>s1</td>
                                <td>159121423</td>
                                <td>福建省厦门市思明区</td>
                                <td>99</td>
                                <td>9999</td>
                                <td>999</td>
                                <td>10%</td>
                                <td class="id-tb">编辑</td>
                            </tr>
                        </table>
                    </div>
                <!-- <div class="col-12-lg col-12-sm">
                    <nav>
                       <ul class="pagination">
                           <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> 1 </a></li>
                           <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)">2</a></li>
                           <li v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;" @click="setCurrent(p.val)">{{ p.text }}</a></li>
                           <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)">3</a></li>
                           <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> »</a></li>
                       </ul>
                    </nav>
                </div> -->
                </div>
            </div>
        </div>
        <div class="tabbar">
            <van-tabbar v-model="active" active-color="#07c160" fixed='true'>
                <van-tabbar-item class="tabbar-zj1">
                    <img src="../../public/img/sy.png">
                    <span>首页</span>
                </van-tabbar-item>
                <van-tabbar-item class="tabbar-zj2">
                    <img class="sj" src="../../public/img/sj.png">
                    <span class="wz-sj">商家</span>
                </van-tabbar-item>
                <van-tabbar-item class="tabbar-zj3">
                    <img class="wd" src="../../public/img/wd.png">
                    <span class="wz-wd">我的</span>
                </van-tabbar-item>
            </van-tabbar>
        </div>
        
        
    </div>                 
</template>

<script>
import echarts from 'echarts'
import '../../node_modules/echarts/map/js/china.js'


export default {
    name: 'echarts',
    props: ["userJson"],
    data(){
        return{
            chart: null,
            current: this.currentPage,
            active: 0        
        }
    },
    // 分页
    props: {
      total: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },


    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          ;
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        ;
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      }
    },



    // 地图
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      chinaConfigure() {
        console.log(this.userJson)
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
        //   borderColor: '#fff',//地图边界线的颜色
        //   areaColor: '#000',//地图整体区域的颜色
          backgroundColor: "#fff",
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            text: ['High', 'Low'],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
         
         
          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: true,
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0)',
                  default: 12,
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#eb594e',
                borderColor: '#fff',//地图边界线的颜色
                areaColor: '#e0e1e6',//地图整体区域的颜色
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 0,
                borderWidth: 0,
                shadowColor: '#00',
                color: '#f64521'
              }
            }
          },
        //   series: [{
        //       type: 'scatter',
        //       coordinateSystem: 'geo' // 对应上方配置
        //     },
        //     {
        //       name: '启动次数', // 浮动框的标题
        //       type: 'map',
        //       geoIndex: 0,
        //       data: [{
        //         "name": "北京",
        //         "value": 599
        //       }, {
        //         "name": "上海",
        //         "value": 142
        //       }, {
        //         "name": "黑龙江",
        //         "value": 44
        //       }, {
        //         "name": "深圳",
        //         "value": 92
        //       }, {
        //         "name": "湖北",
        //         "value": 810
        //       }, {
        //         "name": "四川",
        //         "value": 453
        //       }]
        //     }
        //   ]
        })
      }
    },
    
    mounted: function () {
        this.chinaConfigure();
        // `this` 指向 vm 实例
       var echarts = require('echarts');
       var myChart = this.$echarts.init(document.getElementById('main'));

        var option = {
            // title : {
            //     text: '某地区蒸发量和降水量',
            //     subtext: '纯属虚构'
            // },
            // tooltip : {
            //     trigger: 'axis'
            // },
            // legend: {
            //     data:['蒸发量','降水量']
            // },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['01','02','03','04','05','06','07','08','09','10','11','12']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            legend: {
                x : 'center',
                itemGap: 10,
                itemWidth: 2,
                borderWidth: 0,            // 图例边框线宽，单位px，默认为0（无边框）
                padding: 5,
                textStyle: {
                    color: '#e0e1e6'          // 图文字颜色
                }
            },
            series : [
                {
                    barWidth: 5,
                    backgroundColor: '#e0e1e6',
                    type:'bar',
                    data:[2.5, 4.5, 19, 8.5, 40, 8, 15, 8.6, 6.8, 20, 8.4, 8.8],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    itemStyle: {
                        normal: {color: '#eb594e'}
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
            
            ]
        };
        myChart.setOption(option);
        }

      }

</script>

<style>
@media screen and (max-width:767px){
    div.index-shou{display: block;width:10rem !important;}
    div.index-di{display: none;}
    .app-container{
        padding-top:2rem;
        min-width:39.9375rem;
    }
} 
.tabbar van-tabbar  van-tabbar-item{
    display: flex;
    justify-content:space-between;
    margin-left: 5rem;
    font-size: 1.5rem;
    
}
.tabbar-zj1{
    font-size: 1.5rem;
    display: flex; 
    margin-top: 5rem;  
}
.tabbar-zj2{
    font-size: 1.5rem;
    display: flex;
    margin-left: 10rem;   
}
.tabbar-zj3{
    font-size: 1.5rem;
    display: flex;
    margin-left: 20rem;   
}
.tabbar-zj span{
    font-size: 1.5rem;
    display: flex;
   
    
}
.tabbar-zj img{
   left: 2rem;
}
.tabbar-zj 

.opn{
    background-color:#eee;
    border-radius:2px;
    font-size:12px;
}
.app-index{ 
    /* display: flex; */
    font-size: 1.38rem;
    background-color: #fff;
    color: #393939;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
}

.index-shou{
    display: flex;
    margin:0 auto;
    margin-left: 1.25rem;
    padding: 1.25rem;
}
.index-di{
    display: flex;
    margin:0 auto;
    box-shadow: 0.125rem 0.25rem 0.9375rem #eee;
    align-items: center;
    height: 28.125rem;
    margin-left: 1.25rem;
    width: 92.5% !important;
    /* margin-top: 1.25rem; */
    margin-left: 3.8rem !important;
    /* padding: 1.25rem; */
    justify-content: space-between;
   
}

.index-shou .index-kuang{
  display: flex;
  width: 37rem;;
  height: 25rem;
  margin: 0 auto;
  margin-top:66px;
  box-shadow: 0.125rem 0.25rem 0.625rem #eee;

}

.index-shou .index-kuang img{
    width: 25rem;
    height: 21.875rem;
    margin-top: 1.25rem;
    margin-left: 0px;
}
.app-index .index-shou .tu-right{
  font-size: 0.8rem;
  color: #393939;
  margin-left: 0.8rem;
  float: right;
  top: 4.125rem;
}
.index-shou .tu-right .shuzi{
    color: #eb594e;
    font-size: 1.19rem;
}
.index-shou .tu-right .shu{
    color: #eb594e;
    font-size: 1.19rem;
    margin-top: 1.9rem;
}
.index-shou .index-kuang input{
    border-color: #eb594e;
    border-style: solid;
    height: 1.25rem;
    width: 33.33%;
    font-size: 0.8rem;
    background-image:url(../../public/img/rl.png) no-repeat 0 50;
}
.index-kuang .pd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    margin: 0.625rem 0;
}
.index-kuang .pd .center {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8rem;
}
.center .rl{
    position: relative;
}
.rl input i{
    background-image: url(../../public/img/rl.png);
    position: absolute;
    left: 1.875rem;
    top:1.25rem;
    
}
.index-kuang .pd .center input {
    margin-bottom: 0;
    width: 13rem;
    margin: 0 1.9rem;
}
.index-kuang .pd .center span {
    height: 0.05rem;
    width: 0.375rem;
    background: #8f8f94;
    padding: 0 0.375rem;
}
.index-kuang .pd .center select {
    margin: 0 1.25rem;
    padding: 0;
}
.index-kuang .pd .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.index-kuang a{
    color: #393939;
}
.index-kuang a:hover{
    color: #eb594e;
}

/*  */
.tb {
    /* display: flex; */
    font-size: 0.8rem;
    margin: 0 auto;
    justify-content: space-between;
}
.tb .tb-head{
    /* display: flex; */
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    margin-left:0.5rem;
}
.tb-head p{
    margin-top: -0.19rem;
    font-size: 0.9rem;
}
.tb-head .select{
    display: flex;
    margin: 0 auto;
    margin-left: 0.6rem;
    color: #8f8f94;
    font-size: 0.8rem;

}
.tb .right{
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    font-size: #8f8f94;
    text-align: center;
    font-size: 0.8rem;
   
}
.tb .right input{
    height: 1.25rem;
    width: 9.375rem;
    margin: 0 auto;
    margin-right: 5.5rem;
    margin-top: 0.6rem;
} 
.tb .right a{
    color: #393939;
    margin: 0 auto;
    margin-right: 4.125rem;
    margin-top: 0.6rem;
    font-size: 0.9rem;
}
.tb .right a:hover{
    color: #eb594e;
}

.bt{
    display: flex;
    font-size:0.95rem;
    margin: 0 auto;
    box-shadow: 0.125rem 0.25rem 0.625rem #eee;
    justify-content: space-between;
}
.bt .id{
    display: flex;
    margin: 0 auto;
    width: 100%;
}
.bt .id table {
    margin: 0 auto;
    margin-top: 0.6rem;
    width: 100%;   
    table-layout: fixed;
    text-align: center;
    color: #393939;
    font-size: 0.8rem;
}
.id table tr{
    margin: 0.6rem auto;
    margin-top: 0.95rem;
    height: 2.5rem;
}
.bt .id .id-tb{
    color: #eb594e;
}

/* 分页 */
.pagination {
    overflow: hidden;
    display: table;
    margin: 0 auto;
    /*width: 100%;*/
    height: 3.125rem;
    display: flex;
}
 .pagination li {
    float: left;
    height: 1.875rem;
    border-radius: 5px;
    margin: 0.9rem;
    font-size: 0.95rem;
 }

 .pagination a:hover {
    background: #f44;
 }
 .pagination li a {
    display: block;
    width: 1.9rem;
    height: 1.9rem;
    text-align: center;
    line-height: 1.9rem;
    font-size: 0.95rem;
    border-radius: 0.31rem;
    text-decoration: none;
    color: #393939;
    margin-top: 1.25rem;
    
  }

  .active {
    background: #000;
  }
  .a {
    color: #fff;
 
  }
</style>