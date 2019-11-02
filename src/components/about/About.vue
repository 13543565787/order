
<template>
  <div>
    <nav class="about_nav">
      <ul>
        <li>
          <router-link :to=
          "{
            path:'/about/intro',
            query : {
              name:'hehe',
              age:'18',
            },
          }"
          >个人简介</router-link>
        </li>
        <li>
          <router-link to="/about/join">加入我们</router-link>
        </li>
        <li>
          <router-link to="/about/contact">联系我们</router-link>
        </li>
      </ul>
    </nav>

    <div class="about_box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      age:12,
    }
  }
};
</script>

<style>
</style>