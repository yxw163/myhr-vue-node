<template lang="html">
  <messageCustom title="我的职业生涯">
    <i slot="title" class="uk-icon-calendar" style="margin-right: 5px;"></i>
  </messageCustom>
</template>
<script>
  import MessageCustom from '../message-custom'
  export default {
    data () {
      return {
        title: '我的职业生涯'
      }
    },
    components: {
      MessageCustom
    }
  }
</script>