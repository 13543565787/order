
<template>
  <div>
    <nav>
      <h2>管理菜品</h2>
    </nav>
    <div class="manage">
      <div class="add">
        <h3>添加菜单</h3>
        <ul>
          <li>
            <label for>菜品：</label>
            <input type="text" v-model="newDish.name"/>
          </li>
          <li>
            <label for>分类：</label>
            <input type="text" v-model="newDish.classify"/>
          </li>
          <li>
            <label for>单价：</label>
            <input type="text" v-model="newDish.price"/>
          </li>
          <li>
            <label for>图片：</label>
            <input type="text" v-model="newDish.img"/>
          </li>
        </ul>
        <button @click="addDish">添加</button>
      </div>
      <div class="del">
        <h3>删除菜品</h3>
        <ul>
          <li v-for="(item) in this.totalDishes" :key="item.key">
            <span>{{ item.name }}</span>
            <a href="#">删除</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDish :{//存放从页面中提交的数据
        name:'',
        classify:'',
        price:'',
        img:'',
        num:0,//此字段代表添加菜品的次数
      },
      totalDishes:[
        {name:'三文鱼',key:'001'},
        {name:'鱼头汤',key:'002'},
        {name:'叉烧',key:'003'},
        {name:'面包',key:'004'},
        {name:'油炸茄子',key:'005' },
      ]
    };
  },
  methods:{
    addDish(){
      const {name,classify,price,img} = this.newDish;
      if(name === ''||classify ===''||price === ''|| img === ''){
        alert("请输入完整");
        return;
      }
      console.log(this.newDish);
    }
  },
  created(){
    //在页面的实例被创建时触发，可用于数据请求。
  }
};
</script>

<style scoped>
nav {
  text-align: center;
  padding: 10px;
  font-size: 38px;
  margin: 30px;
}
.manage .add,
.manage .del{
  float: left;
  width: 350px;
  border: 1px solid orange;
  font-size: 25px;
  margin-left: 60px;
  padding: 20px;
}
.manage .add h3,
.manage .del h3{
  color: orange;
  padding: 10px 0px;
  margin-bottom: 10px;
}
.manage .add ul li,
.manage .del ul li{
  padding: 5px 0px;
  /* text-align: left; */
  vertical-align: middle;
}
.manage .add ul li label{
  font-size: 23px;
}
.manage .add ul li input{
  border: 1px solid #ccc;
  border-radius: 6px;
  /* height: 32px; */
  padding: 3px 0px;
  width: 250px;
  font-size: 23px;
  text-indent: 5px;
}
.manage .add ul li input:focus{
  border: 1px solid orange;
}
.manage .add button{
  margin-top: 10px;
  margin-left: 255px;
  font-size: 26px;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #6a37f6;
  color: #fff;
  padding: 5px;
}
.manage .add button:hover{
  background-color: rgb(67, 12, 218);
}
.manage .del ul li{
  font-size: 23px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #aaa;
  margin: 5px 0px;
}
.manage .del ul li span{
  display: inline-block;
  width: 250px;
  overflow: hidden;
}
.manage .del ul li a{
  vertical-align:top;
  float: right;
  color: rgb(235, 12, 12);
}
</style>