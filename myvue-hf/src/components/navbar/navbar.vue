<template lang="html">
  <div>
    <nav class="uk-navbar">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="">首页</a></li>
            <li><a @click="login">登录</a></li>
        </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    methods: {
      login () {
        this.$router.push({path: '/Hello'})
      }
    }
  }
</script>