// 整个食品菜单
<template>
  <!-- <div id="foodMenu"> -->
    <ul class="menuList">
        <menu-List 
          :foodImg = "foodImg"
          :foodName = 'foodName'
          :foodPrice= 33
        ></menu-List>
        <menu-List 
          :foodImg = "foodImg"
          :foodName = 'foodName'
          :foodPrice= 33
        ></menu-List>
        <menu-List 
          :foodImg = "foodImg"
          :foodName = 'foodName'
          :foodPrice= 33
        ></menu-List>
        <menu-List 
          :foodImg = "foodImg"
          :foodName = 'foodName'
          :foodPrice= 33
        ></menu-List>
        <menu-List 
          :foodImg = "foodImg"
          :foodName = 'foodName'
          :foodPrice= 33
        ></menu-List>
    </ul>
  <!-- </div> -->
</template>

<script>
import menuList from './MenuList';
export default{
  components : {
      menuList,
  },
  data(){
    return {
      foodImg : require("../assets/images/img1.jpg"),
      foodName : '三文鱼'
    }
  }
}
</script>

<style scoped>
.menuList{
  user-select: none;
  /* background-color : #c6c2c1; */
  /* display: inline-block; */
}
</style>
