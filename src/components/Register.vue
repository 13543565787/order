<template>
  <div class="fullbg" @click="fullHandle">
    <div class="registerBox" @click.stop="loginHandle">
      <div class="title">
        <h2>帐号注册^_^</h2>
      </div>
      <div class="wrapper">
        <div>
          <label for="username">帐号</label>
          <input 
          placeholder="请输入帐号"
          :style="foucsStyle1"
          @blur="blurHandle1"
          @focus="focusHandle1" type="text" id="username" v-model="username" />
          <!-- 显示信息的！ -->
          <span>输入正确帐号</span>
        </div>
        <div>
          <label for="password">创建密码</label>
          <input 
          :style="foucsStyle2"          
          @blur="blurHandle2"
          @focus="focusHandle2"
          type="password" id="password" v-model="password" />
          <!-- <span>账号不存在</span> -->
        </div>
        <div>
          <label for="confirm">确认密码</label>
          <input 
          :style="foucsStyle3"          
          @blur="blurHandle3"
          @focus="focusHandle3"
          type="password" id="confirm" v-model="confirm" />
          <!-- <span>账号不存在</span> -->
        </div>
        <div>
          <button @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foucsClass:{
        focus : false,
      },
      foucsStyle1:{
        border:'1px solid #aaa'
      },foucsStyle2:{
        border:'1px solid #aaa'
      },foucsStyle3:{
        border:'1px solid #aaa'
      },
      username: "",
      password: "",
      confirm: "",
      getUrl:
        "https://www.easy-mock.com/mock/5d9ad346ec41a373d609dbbc/vue-data/getData",
      postUrl:
        "https://www.easy-mock.com/mock/5d9ad346ec41a373d609dbbc/vue-data/postData"
    };
  },
  methods: {
    fullHandle() {
      const confirm = window.confirm("您还未登录，确定退出吗？");
      if (confirm) {
        this.$router.go(-1);
      }
    },
    loginHandle() {},
    focusHandle1() {
      console.log(this);
      this.foucsStyle1['border'] = "1px solid #FFC200";
      // this.foucsClass.focus = true;
    },
    blurHandle1(){
      // console.log("!!!");
      this.foucsStyle1['border'] = "1px solid #aaa";
      // this.foucsClass.focus = false;
    },
    focusHandle2() {
      console.log(this);
      this.foucsStyle2['border'] = "1px solid #FFC200";
      // this.foucsClass.focus = true;
    },
    blurHandle2(){
      // console.log("!!!");
      this.foucsStyle2['border'] = "1px solid #aaa";
      // this.foucsClass.focus = false;
    },
    focusHandle3() {
      console.log(this);
      this.foucsStyle3['border'] = "1px solid #FFC200";
      // this.foucsClass.focus = true;
    },
    blurHandle3(){
      // console.log("!!!");
      this.foucsStyle3['border'] = "1px solid #aaa";
      // this.foucsClass.focus = false;
    },




    // register(){
    //   // get
    //   this.$axios.get(this.getUrl,{params:{name:"hehe"}}).then(res=>{
    //     console.log(res);
    //   }).catch(err=>{
    //     console.log(err);
    //   });
    //   // post
    //   this.$axios.post(this.postUrl,{name:"hehe"}).then(res=>{
    //     console.log(res);
    //   }).catch(err=>{
    //     console.log(err);
    //   });
    //   // 统一写法
    //   this.$axios({
    //     method:"get",
    //     url:this.getUrl,
    //     data:{
    //       name:"hehe",
    //       age:20,
    //     }
    //   }).then(res=>{
    //     console.log(res);
    //   }).catch(err=>{
    //     console.log(err);
    //   });
    // }

    register() {
      // console.log(this.username);
      if (this.username === "") {
        alert("请输入帐号！");
        return;
      }
      if (this.password === "") {
        alert("请输入密码！");
        return;
      }
      if (this.password !== this.confirm) {
        alert("两次输入密码不一致！请重新输入");
        this.password = "";
        this.confirm = "";
        return;
      }
      //把要传递的数据放在一个对象里，作为数据交互的第二个参数
      const formData = {
        username: this.username,
        password: this.password
      };
    }
  }
};
</script>

<style scoped>
/* 蒙层 */
.fullbg {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 999;
  background: #0000007e;
}

.registerBox {
  background: #fff;
  opacity: 1;
  /* z-index: 9999; */
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  padding: 5px;
  width: 420px;
  height: 320px;
  /* border: 2px solid orange; */
}
.registerBox .title {
  /* margin-top: 10px; */
  text-align: left;
  color: #000;
  padding: 15px 10px;
  font-size: 20px;
  border-bottom: 2px solid #ccc;
  /* background-color: #8f53f0; */
}
.registerBox .wrapper div {
  width: 410px;
  height: 30px;
  line-height: 30px;
  margin: 25px 10px;
}

.registerBox .wrapper div label {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: right;
  display: inline-block;
}

.registerBox .wrapper div span {
  color: #666;
  margin-left: 6px;
  width: 100px;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  display: inline-block;
  user-select: none;
}

.registerBox .wrapper div input {
  font-size: 16px;
  margin-left: 8px;
  display: inline-block;
  border: 1px solid #aaa;
  width: 200px;
  height: 24px;
  line-height: 24px;
  vertical-align: middle;
  padding: 5px;
}

.registerBox .wrapper div button {
  margin-left: 88px;
  width: 200px;
  padding: 5px;
  /* height: 40px; */
  /* line-height: 40px; */
  font-weight: bold;
  font-size: 20px;
  background-color: #ffbd00;
  text-align: center;
  /* margin-top: 30px;
  margin-left: 80px; */
  user-select: none;
  cursor: pointer;
}

/* .registerBox .username,
.registerBox .password {
  width: 380px;
  margin: 30px auto;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
} */
/* .wrapper input {
  font-family: simsun;
  border: 2px solid #ccc;
  width: 200px;
  margin-left: 55px;
  border-radius: 3px;
  padding: 5px 0px;
  font-size: 28px;
  text-indent: 2px;
} */

/* 提交按键 */
/* .registerBox .btn button {
  width: 200px;
  height: 40px;
  line-height: 40px;
  padding: 0px;
  font-weight: bold;
  font-size: 20px;
  background-color: #ffbd00;
  text-align: center;
  margin-top: 30px;
  margin-left: 80px;
  user-select: none;
  cursor: pointer;
} */
/* .registerBox .btn button {
  background-color: inherit;
  color: #000;
  padding: 0px;
  margin: 0px;
  border: 0px;
  font-size: 20px;
} */

/* focus 和 blur */
.registerBox .wrapper div input.focus{
  border: 1px solid #FFC300;
}

</style>