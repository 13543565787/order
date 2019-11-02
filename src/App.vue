<template>
  <div class="container">
    <header>
      <!-- 抽象为一个组件 -->
      <my-header></my-header>
    </header>
    <div class="wrapper clearfix">
      <nav class="aside">
        <side-bar></side-bar>
      </nav>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import MyHeader from "./components/MyHeader";
export default {
  components: {
    SideBar,
    MyHeader
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1443775 */
  src: url('//at.alicdn.com/t/font_1443775_vyjv5z6dndp.eot');
  src: url('//at.alicdn.com/t/font_1443775_vyjv5z6dndp.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1443775_vyjv5z6dndp.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1443775_vyjv5z6dndp.woff') format('woff'),
  url('//at.alicdn.com/t/font_1443775_vyjv5z6dndp.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1443775_vyjv5z6dndp.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
}
.clearfix::after {
  clear: both;
  content: "";
  display: block;
}

/* 头部样式 */

/* 头部样式结束 */
/* 页面主体样式 */
.wrapper {
  width: 1200px;
  /* 设置最小长度，就可以避开滚动条来回切换导致宽度问题 */
  min-height: 800px;
  margin: 80px auto;
  border: 2px solid #000;
}
.wrapper .aside {
  float: left;
  border: 2px solid #ccc;
  box-sizing: border-box;
  margin-right: 10px;
}
.main {
  border: 2px solid #008c8c;
  background-color: #ffffffb4;
  width: 1000px;
  overflow: hidden;
}
/* 页面主体样式结束 */
</style>
