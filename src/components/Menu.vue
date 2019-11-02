<template>
  <div>
    <div class="menu_nav">
      <ul>
        <li>
          <div @click="toHot">
            <i class="iconfont">&#xe601;</i>热菜
          </div>
        </li>
        <li>
          <div @click="toSoup">
            <i class="iconfont">&#xe7e8;</i>汤类
          </div>
        </li>
        <li>
          <div @click="toCold">
              <i class="iconfont">&#xe613;</i>凉菜
          </div>
        </li>
        <li>
          <div @click="toDrink">
            <i class="iconfont">&#xe60d;</i>饮料
          </div>
        </li>
        <li>
          <div @click="toOther">
            <i class="iconfont">&#xe627;</i>其他
          </div>
        </li>
      </ul>
    </div>
    <div class="box">
      <food-list @getOffset="handleGet"></food-list>
    </div>
  </div>
</template>

<script>
import FoodList from "./FoodList";
export default {
  data() {
    return {
      scrollList: {}
    };
  },
  components: {
    FoodList
  },
  methods: {
    handleGet(value) {
      // console.log("!!!!!!!");
      // console.log(value);
      this.scrollList = value; //获得每个元素的滚动高度
    },
    toHot() {
      let { hotT } = this.scrollList;
      document.documentElement.scrollTop = hotT;
    },
    toSoup() {
      let { soupT } = this.scrollList;
      document.documentElement.scrollTop = soupT;
    },
    toCold() {
      let { coldT } = this.scrollList;
      document.documentElement.scrollTop = coldT;
    },
    toDrink() {
      let { drinkT } = this.scrollList;
      document.documentElement.scrollTop = drinkT;
    },
    toOther() {
      let { otherT } = this.scrollList;
      document.documentElement.scrollTop = otherT;
    }
  }
};
</script>


<style scoped>
.iconfont {
  font-family: "iconfont";
}
/* 种类列表样式 */
.menu_nav li {
  display: inline-block;
  width: 200px;
  font-size: 30px;
  padding: 10px 0px;
  text-align: center;
  cursor: pointer;
}
.menu_nav li {
  color: orange;
}
</style>