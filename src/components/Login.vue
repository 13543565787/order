<template>
  <div class="fullbg" @click="fullHandle">
    <div class="registerBox" @click.stop="fullHandleStop">
      <!-- 用来判断是登录窗口还是注册窗口 -->
      <div class="title" @click="chooseHandle">
        <h2 data-title="loginH2" :class="{select:selectLogin}">帐号登录</h2>
        <h2 data-title="registerH2" :class="{select:selectRegister}">帐号注册</h2>
      </div>
      <!-- 登录窗口 -->
      <div class="wrapper" v-show="selectLogin">
        <div>
          <label for="loginUsername">帐号</label>
          <input
            placeholder="请输入帐号"
            :style="foucsStyle1"
            @blur="blurHandle1"
            @focus="focusHandle1"
            type="text"
            id="loginUsername"
            v-model="loginUsername"
          />
          <!-- 显示信息的！ -->
          <span>输入正确帐号</span>
        </div>
        <div>
          <label for="loginPassword">密码</label>
          <input
            :style="foucsStyle2"
            @blur="blurHandle2"
            @focus="focusHandle2"
            type="password"
            id="loginPassword"
            v-model="loginPassword"
          />
          <!-- <span>账号不存在</span> -->
        </div>
        <div class="else">
          <span>忘记密码？</span>
          <input type="checkbox" name="autoLogin" id="autoLogin" />
          <label for="autoLogin">下次自动登录</label>
        </div>
        <div>
          <button @click="register">登录</button>
        </div>
      </div>
      <!-- 注册窗口 -->
      <div class="wrapper" v-show="selectRegister">
        <div>
          <label for="reigsterUsername">帐号</label>
          <input
            placeholder="请输入帐号"
            :style="foucsStyle1"
            @blur="blurHandle1"
            @focus="focusHandle1"
            type="text"
            id="reigsterUsername"
            v-model="reigsterUsername"
          />
          <!-- 显示信息的！ -->
          <span>输入正确帐号</span>
        </div>
        <div>
          <label for="registerPassword">创建密码</label>
          <input
            :style="foucsStyle2"
            @blur="blurHandle2"
            @focus="focusHandle2"
            type="password"
            id="registerPassword"
            v-model="registerPassword"
          />
          <!-- <span>账号不存在</span> -->
        </div>
        <div>
          <label for="confirm">确认密码</label>
          <input
            :style="foucsStyle3"
            @blur="blurHandle3"
            @focus="focusHandle3"
            type="password"
            id="confirm"
            v-model="confirm"
          />
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
  computed: {},
  data() {
    return {
      //切换模式
      selectLogin: true,
      selectRegister: false,

      foucsClass: {
        focus: false
      },
      foucsStyle1: {
        border: "1px solid #aaa"
      },
      foucsStyle2: {
        border: "1px solid #aaa"
      },
      foucsStyle3: {
        border: "1px solid #aaa"
      },
      loginUsername: "", //登录用户名
      loginPassword: "", //登录密码
      reigsterUsername: "", //注册用户名
      registerPassword: "", //注册密码
      confirm: ""
    };
  },
  methods: {
    fullHandle() {
      const confirm = window.confirm("您还未登录，确定退出吗？");
      if (confirm) {
        this.$router.go(-1);
      }
    },
    chooseHandle(e) {
      console.log(e.target.dataset.title);
      if (e.target.dataset.title === "loginH2") {
        this.selectLogin = true;
        this.selectRegister = false;
      } else {
        this.selectLogin = false;
        this.selectRegister = true;
      }
      // console.log(e.target);
      // e.target.style
    },
    toLoginHandle(e) {
      console.log(e);
    },
    toRegisterHandle() {},
    //取消冒泡
    fullHandleStop() {},
    //每个input绑定一个事件
    focusHandle1() {
      console.log(this);
      this.foucsStyle1["border"] = "1px solid #FFC200";
    },
    blurHandle1() {
      this.foucsStyle1["border"] = "1px solid #aaa";
    },
    focusHandle2() {
      // console.log(this);
      this.foucsStyle2["border"] = "1px solid #FFC200";
    },
    blurHandle2() {
      // console.log("!!!");
      this.foucsStyle2["border"] = "1px solid #aaa";
    },
    focusHandle3() {
      this.foucsStyle3["border"] = "1px solid #FFC200";
    },
    blurHandle3() {
      this.foucsStyle3["border"] = "1px solid #aaa";
    },
    //点击登录按钮
    login() {
      console.log("登录");
      if (this.loginUsername === "") {
        alert("请输入帐号！");
        return;
      }
      if (this.loginPassword === "") {
        alert("请输入密码！");
        return;
      }
      // this.$axios.get()
    },

    //点击注册按钮，
    register() {
      console.log("注册");
      if (this.reigsterUsername === "") {
        alert("请输入帐号！");
        return;
      }
      if (this.registerPassword === "") {
        alert("请输入密码！");
        return;
      }
      if (this.registerPassword !== this.confirm) {
        alert("两次输入密码不一致！请重新输入");
        this.password = "";
        this.confirm = "";
        return;
      }
      //把要传递的数据放在一个对象里，作为数据交互的第二个参数
      const formData = {
        username: this.reigsterUsername,
        password: this.registerPassword,
      };
      // get
      // this.$axios
      //   .get(this.getUrl, { params: { name: "hehe" } })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      // // post
      // this.$axios
      //   .post(this.postUrl, { name: "hehe" })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      // 统一写法
      // this.$axios({
      //   method: "get",
      //   url: this.getUrl,
      //   data: {
      //     name: "hehe",
      //     age: 20
      //   }
      // })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
/* 整个登录框 */
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
/* 登录框标题 */
.registerBox .title {
  /* margin-top: 10px; */
  text-align: left;
  color: #000;
  padding: 5px 10px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  /* border-bottom: 2px solid #ccc; */
  /* background-color: #8f53f0; */
}
.registerBox .title h2 {
  text-align: center;
  display: inline-block;
  width: 50%;
  color: #9b9b9b;
  /* height: 50px; */
}
/* .registerBox .title h2:first-child{
  border-right: 1px solid #aaa;
  margin-right: -1px;
} */
.registerBox .title h2.select {
  color: #333;
  border-bottom: 2px solid #000;
  /* background-color: #FE8C00; */
}
/* 登录框主体 */
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
/* 其他选项 */
.registerBox .wrapper div.else input {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-left: 5px;
}
.registerBox .wrapper div.else label {
  text-align: left;
  text-indent: 0px;
  display: inline-block;
  font-size: 14px;
  width: 100px;
  height: 30px;
}
.registerBox .wrapper div.else span {
  display: inline-block;
  margin-left: 90px;
  color: #fe8c00;
  font-size: 14px;
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
/* 登录框提交按钮 */
.registerBox .wrapper div button {
  margin-left: 88px;
  width: 212px;
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
  background-color: #ffbd00;
  text-align: center;
  user-select: none;
  cursor: pointer;
}
</style>