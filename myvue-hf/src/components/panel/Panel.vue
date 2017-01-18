<template lang="html">
  <div class="uk-panel uk-panel-box-yxw">
    <div class="uk-grid" >
      <div class="uk-width-1-2">
        <img src="../../custom/images/avatar.jpg">
      </div>
      <div class="uk-width-1-2">
        <h3>{{ name }}</h3>
        <p>{{ position }}</p>
        <p>{{ department }}</p>
        <div class="uk-margin-top"><label class="uk-text-small">入职时间 :  <p class="uk-comment-meta uk-flex-inline uk-flex-right">{{ date }}</p></label></div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Kimi',
      position: '信贷主管',
      department: '总行信贷部',
      date: '2016-12-21'
    }
  }
}
</script>
<style lang="scss">
  .uk-panel-box-yxw {
    padding: 0px;
    background: #f5f5f5;
  }
  h3 {
    margin-top: 10px;
  }
  p {
    margin: 0 0 0 0;
  }

</style>