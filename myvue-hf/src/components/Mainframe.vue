<template lang="html">
  <div class="uk-container uk-container-center uk-margin-top">
    <Navbar></Navbar>
    <router-view></router-view>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
  import Navbar from './navbar/Navbar'
  import tmFooter from './footer/TmFooter'
  export default {
    components: {
      Navbar,
      tmFooter
    }
  }

</script>