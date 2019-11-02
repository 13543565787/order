// 单个食品栏
<template>
  <li class="menuItem">
    <img 
      :src="normalImg"
      :data-src = "foodImg"
      lazy-load="true"
      alt="304" 
    />
    <!-- <img src= "../assets/images/img1.jpg" alt="304" /> -->
    <div class="foodName">
      <div class="left">
        <span>{{ foodName }}</span>
        <p>
          <span>RMB</span>
          <strong>{{ foodPrice }}/份</strong>
        </p>
      </div>
      <div class="right">
        <a href="#">
          <i class="iconfont">&#xe61d;</i>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      // foodImg1: require('../assets/images/img1.jpg'),
    };
  },
  methods:{
    lazyLoad(){
      //懒加载
      let imgDom = document.querySelectorAll('.menuItem>img');
      //当前滚动高度
      let scrollTop = document.documentElement.scrollTop;
      //当前视口高度
      let viewHeight = document.documentElement.clientHeight;
      imgDom.forEach((item,index)=>{
        if(item.offsetTop < scrollTop + viewHeight){
          //当图片出现视口处，进行加载
          if(item.getAttribute("lazy-load") === 'true'){
            // console.log(item.dataset.src);
            // console.log("加载该图片");
            item.setAttribute("src",item.dataset.src);
            item.setAttribute("lazy-load","false");
          }
        }
      });
      // console.log(imgDom);
    },
    throttle(fn,context){//函数节流
      clearTimeout(fn.tId);
      fn.tId = setTimeout(()=>{
        fn.call(context);
      },300);
    }
  },
  mounted(){
    this.lazyLoad();
    this.lazyLoad.id = 1;
    window.onscroll = ()=>{
      this.throttle(this.lazyLoad,window);
      console.log("!");
    };
    console.log(this.lazyLoad.id);
  },
  updated(){
    // window.onscroll = ()=>{
    //   this.throttle(this.lazyLoad,window);
    // };
  },
  created(){
    // console.log(this.normalImg);
  },
  props: {
    normalImg: {
      type: String,
      required: true
    },
    foodImg: {
      type: String,
      required: true
    },
    foodName: {
      type: String,
      required: true
    },
    foodPrice: {
      type: Number,
      required: true,
      validator(value) {
        return value > 0;
      }
    }
  }
};
</script>

<style scoped>
.iconfont {
  font-family: "iconfont";
  font-size: 60px;
  font-style: normal;
  color: #1296db;
}

/* 整个食品框 */
.menuItem {
  width: 280px;
  border-radius: 20px;
  background-color: #fff;
  margin-bottom: 30px;
  overflow: hidden;
  border: 2px solid #ccc7c3;
  display: inline-block;
  margin: 20px;
}
.menuItem:hover,
.menuItem:active {
  border: 2px solid #f19903;
}
/* 图片 */
img {
  /* background: cover; */
  width: 100%;
  max-height: 210px;
  min-height: 210px;
}

/* 图片一下的信息框 */
.foodName {
  padding: 10px 20px;
  /* width: 100%; */
  height: 70px;
}
.left {
  display: inline-block;
  width: 150px;
  font-size: 26px;
  color: #796355;
}
.left p {
  font-size: 18px;
  color: #f39706;
  padding: 5px 0px;
}
.left p strong {
  font-size: 30px;
}

.right {
  float: right;
  margin-top: 3px;
}
.right a {
  text-decoration: none;
}
.right i:hover {
  color: #008c8c;
}
</style>
