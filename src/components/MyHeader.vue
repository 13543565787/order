<template>
  <div class="head">
    <div class="logo">
      <img src="../assets/images/logo.png" />
    </div>
    <div class="title">
      <h2>肥家订餐</h2>
      <span>想吃啥点啥</span>
    </div>
    <div class="user">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.iconfont{
  font-family: 'iconfont';
}
/* 头部整体样式 */
.head {
  height: 70px;
  width: 100%;
  position: fixed;
  text-align: center;
  top: 0;
  z-index: 100;
  overflow: hidden;
  border-bottom: 2px solid #ccc;
  color: #000;
  background: #fff;
}
/* 头部整体样式结束 */

/* 头部logo和标题 */
.head .logo {
  width: 70px;
  height: 70px;
  margin-left: 10px;
  float: left;
}
.head .logo img {
  width: 70px;
  height: 70px;
}
.head .title {
  float: left;
}
.head .title h2 {
  font-size: 25px;
  line-height: 40px;
  height: 40px;
  color: #000;
  /* font-weight: bold; */
}
.head .title span {
  font-size: 20px;
  height: 30px;
  /* line-height: 1; */
  display: block;
}
/* 头部logo和标题结束 */

/* 用户登录框 */
.user {
  float: right;
  /* margin: 20px 0px; */
  margin-right: 30px;
  /* border: 2px solid #ccc; */
  padding: 10px;
  box-sizing: border-box;
  height: 70px;
  line-height: 50px;
}
.user .login {
  font-size: 25px;
  color: rgb(26, 11, 3);
}
.user .login i {
  color: orange;
  font-size: 25px;
}
.user .logined {
  font-size: 25px;
  display: none;
}
/* 用户登录框结束 */
</style>


