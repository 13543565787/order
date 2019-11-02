//侧边栏
<template>
  <div class="sideBar">
    <!-- <div class="logo"></div> -->
    <!-- <div class="user">
      <div class="login">
        <div>
          <router-link to="/login">
            <i class="iconfont">&#xe600;</i>登录
          </router-link>
          <router-link to="/register">
            <i class="iconfont">&#xe635;</i>注册
          </router-link>
        </div>
      </div>
      <div class="logined">
        <span>欢迎：hehe</span>
      </div>
    </div> -->
    <ul class="message">
      <li>
        台号：
        <strong>101</strong>
      </li>
      <li>
        人数：
        <strong>3</strong>
      </li>
      <li>
        订单号：
        <strong>1003</strong>
      </li>
    </ul>
    <ul class="sideNav">
      <li>
        <router-link :to="home" tag="div">
          <i class="iconfont">&#xe65e;</i>主页
        </router-link>
      </li>
      <li>
        <router-link :to="menu" tag="div">
          <i class="iconfont">&#xe718;</i>菜单
        </router-link>
      </li>
      <li>
        <router-link :to="order" tag="div">
          <i class="iconfont">&#xe65c;</i>订单
        </router-link>
      </li>
      <li>
        <router-link :to="manage" tag="div">
          <i class="iconfont">&#xe632;</i>管理
        </router-link>
      </li>
      <li>
        <router-link :to="about" tag="div">
          <i class="iconfont">&#xe6a1;</i>关于
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: "/home",
      menu: "/menu",
      order: "/order",
      manage: "/manage",
      about: "/about"
    };
  }
};
</script>

<style scoped>
.iconfont {
  font-family: "iconfont";
}
/* 侧边栏整体 */
.sideBar {
  float: left;
  padding: 5px;
  /* min-width: 160px; */
  width: 160px;
  user-select: none;
  background-color: rgba(255, 255, 255, 0.671);
}
/* 侧边栏整体结束 */

/* logo图标 */
.logo {
  width: 120px;
  height: 120px;
  background: url("../assets/images/logo.jpg") no-repeat 0px 0px / contain;
  border-radius: 50%;
  margin: 10px auto;
}
/* logo图标结束 */



/* 信息框 */
.message {
  margin: 10px 0px;
}
.message li {
  font-size: 20px;
  margin: 10px 0;
}
/* 信息框结束 */

/* 导航栏 */
.sideNav li {
  border: 1px solid #ccc;
  margin: 5px 0px;
  display: block;
  text-align: center;
  cursor: pointer;
}

.sideNav li i{
  margin-right: 8px;
}
.sideNav li div{
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  color: #000;
}

.sideNav .active {
  /* background: #ccc; */
  color: #FFBA1E;
}
/* 导航栏结束 */

</style>

