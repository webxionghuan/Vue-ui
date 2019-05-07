<template>
    <div>
        <h1>Exam01</h1>
        <h3>使用标签方式跳转 Exam02 组件</h3>
        <router-link to="/Exam02">方式一标签</router-link>
        <hr>
        <h3>使用编程的方式跳转exam02组件</h3>
        <img src="http://127.0.0.1:3000/img/images/logo.png" @click="jump">
        <hr>
        <h3>使用编程方式1跳转Home组件</h3>
        <router-link to="/Home">方式一标签</router-link>
        <hr>
        <h3>使用编程方式2跳转NewsList组件</h3>
        <img src="http://127.0.0.1:3000/img/images/logo.png" @click="jumpNewsList">
        <hr>
        <!--发送数据 Exam01-->
        <h1>发送数据 Exam01</h1>
        <router-link to="/Exam02?nid=9">发送数据一</router-link><br>
        <img src="http://127.0.0.1:3000/img/images/logo.png" @click="jumpData">
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){

    },methods:{
        jump(){
            this.$router.push("./Exam02");
        },
        jumpNewsList(){
            this.$router.push("./News");
        },
        jumpData(){
            this.$router.push("./Exam02?nid=10")
        },
    }
}
</script>

<style>

</style>
 