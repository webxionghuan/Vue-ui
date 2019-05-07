<template>
    <div>
         <mt-header title="学子商城"></mt-header>
         
        <h1>用户的列表组件</h1>
      <mt-button>登录</mt-button>
      <!--循环数组将数组中内容显示-->
      <ul>
          <li v-for="item of list">{{item.id}}:{{item.name}}</li>
      </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
            {id:1,name:"tom"},
            {id:2,name:"jerry"},
            {id:3,name:"james"}
            ]
        }
    }
}
</script>

<style>

</style>


