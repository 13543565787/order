
<template>
  <div>
    <nav>
      <h2>
        <strong>肥家订餐</strong>
        <span>想吃啥点啥</span>
      </h2>
    </nav>
    <div class="wrapper">
      <div 
      class="slider" 
      @mouseleave="handleLeave"
      @mouseenter="handleEnter"
      >
        <button class="leftBtn" @click="leftClick">
          <i class="iconfont">&#xe604;</i>
        </button>
        <button class="rightBtn" @click="rightClick">
          <i class="iconfont">&#xe603;</i>
        </button>
        <div class="pointer">
          <ul>
            <li v-for="(item,index) in len" :key="item">
              <div :class="{selected : (cur_index === index)}" @mouseenter="pointEnter(index)"></div>
            </li>
          </ul>
        </div>
        <ul class="slideList" :style="{ left : (-cur_index * 500)+'px' }">
          <!-- <ul class="slideList" > -->
          <!-- :style="{left:index*500 +'px'}" -->
          <li v-for="(img,index) in this.imgs" :key="index">
            <a href="#">
              <div class="img">
                <img :src="img.src" alt="图片加载失败" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <button class='btn' @click="back">回退</button>
    <button class='btn' @click="goTo">跳转</button>-->
  </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
  data() {
    return {
      imgs: [
        { src: require("../assets/images/img1.jpg") },
        { src: require("../assets/images/img2.jpg") },
        { src: require("../assets/images/img3.jpg") },
        { src: require("../assets/images/img4.jpg") },
        { src: require("../assets/images/img5.jpg") }
      ],
      imgPosition: [0, 120],
      // left: 0, //作为切换轮播图的方式
      cur_index : 0,//代表当前所在的图片页面
      timer : null,//用来设置计数器的
    };
  },
  computed: {
    len() {
      return this.imgs.length;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goTo() {
      this.$router.push("/login");
    },
    leftClick() {
      if (this.cur_index <= 0) {
        this.cur_index = this.len-1;
        return;
      }
      this.cur_index -= 1;
    },
    rightClick() {
      if (this.cur_index >= (this.len-1)) {
        this.cur_index = 0;
        return;
      }
      this.cur_index += 1;
    },
    pointEnter(index){
      this.cur_index = index;
    },
    //自动轮播
    autoSlide(){
      let timer = setInterval(()=>{
        this.cur_index +=1;
        if(this.cur_index ==this.len){
          this.cur_index = 0;
        }
      },1000);
      return timer;
    },
    handleEnter(){
      window.clearInterval(this.timer);
    },
    handleLeave(){
      this.timer = this.autoSlide();
    },
    
  },
  mounted(){
    this.cur_index = 0;
    this.timer = this.autoSlide();
  },
};
</script>

<style scoped>
/* 字体样式 */
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
}
nav {
  margin: 30px;
  /* text-align: center; */
}
nav h2 strong {
  color: rgb(0, 0, 0);
  font-size: 35px;
  font-weight: bold;
}
nav h2 span {
  margin-left: 5px;
  font-size: 23px;
  color: rgb(12, 4, 47);
  vertical-align: bottom;
}
/* 轮播图 */
.wrapper {
  /* position: relative; */
  width: 600px;
  height: 600px;
  margin: 20px auto;
  border: 1px solid orange;
}
/* 图片 */
.wrapper .slider {
  width: 500px;
  height: 375px;
  margin: 20px auto;
  /* padding: 10px; */
  border: 1px solid orange;
  overflow: hidden;
  position: relative;
}
/* 思路是，整个ul是一个整体且是一个定位元素，通过left来改变
而ul中的li都是浮动的！ */
.wrapper .slider ul.slideList {
  position: relative;
  width: 5000px;
  left: 0px;
  /* 改变left达到滚动效果！！！！ */
  /* height: 500px; */
}
.wrapper .slider ul.slideList li {
  /* border: 2px solid #000; */
  /* position: absolute; */
  /* z-index: 1; */
  float: left;
}
.wrapper .slider ul.slideList li .img {
  width: 500px;
  height: 375px;
  top: 0px;
}
.wrapper .slider ul.slideList li .img img {
  width: 100%;
  height: 100%;
  background-color: #000;
}

/* 左右控件 */
.wrapper .slider .leftBtn,
.wrapper .slider .rightBtn {
  position: absolute;
  width: 30px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 999;
  /* overflow: hidden; */
}
.wrapper .slider .leftBtn:hover,
.wrapper .slider .rightBtn:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.wrapper .slider .leftBtn {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  left: 0px;
  top: 48%;
}
.wrapper .slider .rightBtn {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  right: 0px;
  top: 48%;
}
.wrapper .slider .leftBtn i,
.wrapper .slider .rightBtn i {
  position: relative;
  font-size: 23px;
  color: rgb(255, 255, 255);
}
.wrapper .slider .leftBtn i {
  left: -3px;
}
.wrapper .slider .rightBtn i {
  right: -3px;
}

/* 轮播点 */
.wrapper .slider .pointer {
  position: absolute;
  left: 200px;
  bottom: 10px;
  z-index: 999;
}
.wrapper .slider .pointer ul {
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0);
}
.wrapper .slider .pointer ul li {
  display: inline-block;
  margin: 0 3px;
}
.wrapper .slider .pointer ul li div {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
}
.wrapper .slider .pointer ul li div.selected {
  background-color: #000;
}
.wrapper .slider .pointer ul li div:hover {
  background-color: #000;
}
</style>