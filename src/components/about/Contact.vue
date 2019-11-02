<template>
  <div class="contact">
      <p>联系方式</p>
      <ul>
          <router-link to='/about/contact/wechat'>微信</router-link>
          <router-link to='/about/contact/qq'>QQ</router-link>
          <router-link to='/about/contact/email'>邮箱</router-link>
      </ul>
      <div class="contact_box">
          <router-view></router-view>
      </div>
  </div>
</template>

<style>
.contact p{
  color: #ccc;
  font-size: 20px;
}
</style>


