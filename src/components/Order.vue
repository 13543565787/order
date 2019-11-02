
<template>
  <div class="order">
    <nav class="conNav">订单页</nav>
    <table>
      <thead>
        <tr>
          <th colspan="4">单号：123123123</th>
          <th colspan="4">
            <button @click="submit" class="submitBtn">提交订单</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- 一共八列 -->
        <tr>
          <th>序号</th>
          <th>菜名</th>
          <th>单价</th>
          <th>数量</th>
          <th>价格</th>
          <th>备注</th>
          <th>种类</th>
          <th>删除</th>
        </tr>
        <!-- 列表 -->
        <!-- 循环tr标签 -->
        <tr 
          v-for="(item,index) in this.orderList" 
          :key='index'
        >
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td class="amount">
            <button @click="reduce(item)" class="leftBtn">
              <i class="iconfont">&#xe602;</i>
            </button>
            <input type="text" v-model="item.num" />
            <button @click="add(item)" class="rightBtn">
              <i class="iconfont">&#xe65d;</i>
            </button>
          </td>
          <td>{{ item.num*item.price+'.00' }}</td>
          <td>加辣</td>
          <td>{{ item.classify }}</td>
          <td class="delete">
            <button class="deleteBtn">
              <i class="iconfont">&#xe654;</i>
            </button>
          </td>
        </tr>
      </tbody>
      <!-- 分页 -->
      <tfoot>
        <tr>
          <td colspan="6">&nbsp;</td>
          <td colspan="2">总价:{{ totalPrice }}</td>
        </tr>
        <tr>
          <td colspan="8">1,2,3,4,5</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      orderList : [
        {name:'三文鱼',price:42,classify:'热菜',num:1},
        {name:'鱼头汤',price:52,classify:'汤',num:2},
        {name:'叉烧',price:43,classify:'冷菜',num:3},
        {name:'面包',price:12,classify:'其他',num:2},
        {name:'油炸茄子',price:22,classify:'热菜',num:2},
      ]
    }
  },
  computed:{
    totalPrice(){
      // console.log(this.orderList);
      let all = 0;
      this.orderList.forEach((item)=>{
        all += item.price*item.num;
      })
      return all;
    }
  },
  methods:{
    reduce(item){
      if(item.num<=0){
        return;
      }
      item.num--;//直接改变orderList的数据！！！
      // console.log(n);
    },
    add(item){
      item.num++;
    },
    submit(){
      console.log(this.orderList);
      const confirm = window.confirm("确定提交订单吗？");
      if(confirm){
        alert("成功提交订单！");
      }
    }
  }

};
</script>

<style scoped>
/* 设置iconfont */
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
}
/* 整体设置 */
.order {
  font-size: 20px;
  width: 100%;
  border-radius: 30px;
  /* margin: 30px 30px; */
  user-select: none;
}
/* 顶部 */
.order .conNav {
  margin: 40px;
  text-align: center;
  font-size: 38px;
}
/* 表单设置 */
.order table {
  width: 900px;
  border-collapse: separate;
  border-spacing: 0px;
  border-radius: 30px;
  border: 2px solid orange;
  overflow: hidden;
  /* border-collapse: collapse;  会导致圆角失效*/
  background-color: #fff;
  margin: 30px auto;
}
/* 单元格的设置 */
.order table th,
.order table td {
  height: 38px;
  line-height: 38px;
  padding: 10px;
  text-align: center;
  border-right: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
}
/* 消除重合的border */
.order table tfoot tr:last-child td {
  border-bottom: 0px;
}
.order table tr td:last-child,
.order table tr th:last-child {
  border-right: 0px;
}
.order table tbody tr:nth-child(2n) {
  background-color: rgb(241, 233, 233);
}
.order table tbody tr:first-child {
  font-size: 23px;
  font-weight: bold;
}
/* 表头设置 */
table thead th {
  font-size: 30px;
  background-color: rgb(75, 211, 216);
}
table thead th:first-child {
  color: #000;
  padding-left: 30px;
  text-align: left;
}
/* 提交按钮设置 */
table thead .submitBtn {
  font-size: 30px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 23px;
  margin-left: 80px;
}
table thead .submitBtn:hover {
  background-color: #008c8c;
  color: #fff;
}
/* 数量框样式！ */
/* 增加减少按钮样式 */
table tbody tr td.amount button{
  display: inline-block;
  font-size: 23px;
  padding: 2px;
}
table tbody tr td.amount button.leftBtn{
  color: orange;
}
table tbody tr td.amount button.rightBtn{
  color: orange;
}
table tbody tr td.amount button:hover{
  color: #008c8c;
}
/* 输入框样式 */
table tbody tr td.amount input {
  height: 36px;
  width: 60px;
  font-size: 23px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 5px;
}
/* 删除按钮设置 */
table tbody tr td.delete button{
  cursor: pointer;
  font-size: 32px;
  color: #000;
  vertical-align:top;

}
table tbody tr td.delete button:hover{
  color: rgb(228, 43, 10)
}
</style>