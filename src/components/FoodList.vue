<template>
  <div class="foodList">
    <ul>
      <li v-for="(item,index) in sort" :key="index" :ref="type[index]">
        <div>{{ type[index] }}</div>
        <food
          v-for="(food,index) in item"
          :key="index"
          :normalImg ="normalImg"
          :foodImg="food.foodImg"
          :foodName="food.foodName"
          :foodPrice="food.foodPrice"
        ></food>
      </li>
    </ul>
  </div>
</template>

<script>
import Food from "./Food";
export default {
  components: {
    Food,
  },
  computed: {
    // aaa(){
    //   return 111;
    // },
    sort() {
      let type = ["hot", "soup", "cold", "drink", "other"];
      let result = [];
      let flag = ["false", "false", "false", "false", "false"];
      this.foods.forEach((item, index) => {
        // console.log(item);
        for (let i = 0; i < type.length; i++) {
          if (item.foodType === type[i]) {
            if (flag[i] === "false") {
              //判断是否创建了数组
              flag[i] = "true";
              result[i] = [];
            }
            result[i].push(item);
          }
        }
      });
      // console.log(result);
      return result;
    }
  },
  data() {
    return {
      normalImg : require("../assets/images/common.jpg"),
      type: ["hot", "soup", "cold", "drink", "other"],
      foods: [
        {
          id: 1,
          foodType: "hot",
          foodName: "三文鱼",
          foodImg: require("../assets/images/img1.jpg"),
          foodPrice: 33
        },
        {
          id: 1,
          foodType: "hot",
          foodName: "三文鱼",
          foodImg: require("../assets/images/img1.jpg"),
          foodPrice: 33
        },
        {
          id: 1,
          foodType: "hot",
          foodName: "三文鱼",
          foodImg: require("../assets/images/img1.jpg"),
          foodPrice: 33
        },
        {
          id: 1,
          foodType: "hot",
          foodName: "三文鱼",
          foodImg: require("../assets/images/img1.jpg"),
          foodPrice: 33
        },
        {
          id: 2,
          foodType: "hot",
          foodName: "油炸茄子",
          foodImg: require("../assets/images/img2.jpg"),
          foodPrice: 33
        },
        {
          id: 3,
          foodType: "soup",
          foodName: "鱼头汤",
          foodImg: require("../assets/images/img3.jpg"),
          foodPrice: 33
        },
        {
          id: 3,
          foodType: "soup",
          foodName: "鱼头汤",
          foodImg: require("../assets/images/img3.jpg"),
          foodPrice: 33
        },
        {
          id: 3,
          foodType: "soup",
          foodName: "鱼头汤",
          foodImg: require("../assets/images/img3.jpg"),
          foodPrice: 33
        },
        {
          id: 3,
          foodType: "soup",
          foodName: "鱼头汤",
          foodImg: require("../assets/images/img3.jpg"),
          foodPrice: 33
        },
        {
          id: 3,
          foodType: "soup",
          foodName: "鱼头汤",
          foodImg: require("../assets/images/img3.jpg"),
          foodPrice: 33
        },
        {
          id: 4,
          foodType: "soup",
          foodName: "猪肚汤",
          foodImg: require("../assets/images/img4.jpg"),
          foodPrice: 33
        },
        {
          id: 5,
          foodType: "other",
          foodName: "面包",
          foodImg: require("../assets/images/img5.jpg"),
          foodPrice: 33
        },
        {
          id: 5,
          foodType: "other",
          foodName: "面包",
          foodImg: require("../assets/images/img5.jpg"),
          foodPrice: 33
        },
        {
          id: 5,
          foodType: "other",
          foodName: "面包",
          foodImg: require("../assets/images/img5.jpg"),
          foodPrice: 33
        },
        {
          id: 5,
          foodType: "other",
          foodName: "面包",
          foodImg: require("../assets/images/img5.jpg"),
          foodPrice: 33
        },
        {
          id: 5,
          foodType: "other",
          foodName: "面包",
          foodImg: require("../assets/images/img5.jpg"),
          foodPrice: 33
        },
        {
          id: 6,
          foodType: "cold",
          foodName: "叉烧",
          foodImg: require("../assets/images/img6.jpg"),
          foodPrice: 33
        },
        {
          id: 6,
          foodType: "cold",
          foodName: "叉烧",
          foodImg: require("../assets/images/img6.jpg"),
          foodPrice: 33
        },
        {
          id: 6,
          foodType: "cold",
          foodName: "叉烧",
          foodImg: require("../assets/images/img6.jpg"),
          foodPrice: 33
        },
        {
          id: 6,
          foodType: "cold",
          foodName: "叉烧",
          foodImg: require("../assets/images/img6.jpg"),
          foodPrice: 33
        },
        {
          id: 6,
          foodType: "cold",
          foodName: "叉烧",
          foodImg: require("../assets/images/img6.jpg"),
          foodPrice: 33
        },
        {
          id: 7,
          foodType: "cold",
          foodName: "饺子",
          foodImg: require("../assets/images/img7.jpg"),
          foodPrice: 33
        },
        {
          id: 8,
          foodType: "cold",
          foodName: "腩肉",
          foodImg: require("../assets/images/img8.jpg"),
          foodPrice: 33
        }
      ],
      offsetHeight: 0
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(function() {
      let type = ["hot", "soup", "cold", "drink", "other"];
      let hotT = this.$refs.hot[0].offsetTop -70;//减去顶部
      let soupT = this.$refs.soup[0].offsetTop-70;//减去顶部
      let coldT = this.$refs.cold[0].offsetTop-70;//减去顶部
      let drinkT = this.$refs.drink[0].offsetTop-70;//减去顶部
      let otherT = this.$refs.other[0].offsetTop-70;//减去顶部
      // console.log(hotT,soupT,coldT,drinkT,otherT);
      let obj = { hotT, soupT, coldT, drinkT, otherT };
      // console.log(obj);
      this.$emit("getOffset",obj);
      // console.log("发送了！");
    });
  },
};
</script>

<style scoped>
.foodList li div {
  color: #000;
  font-size: 30px;
  margin-left: 30px;
}
</style>