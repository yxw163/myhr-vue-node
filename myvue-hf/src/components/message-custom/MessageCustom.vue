<template lang="html">
  <div class="uk-panel uk-panel-box uk-panel-boder-top-yxw">
    <div class="uk-panel-badge-yxw">
      <slot name="left-badge"></slot>
    </div>
    <h3 class="uk-panel-title uk-article-boder-bottom-yxw">
      <slot name="title"></slot>
      {{ title }}
    </h3> 
    <slot></slot>
    <slot name="messageList"></slot>
    <slot name="showModal"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  }
</script>
<style lang="scss">
  .uk-panel-boder-top-yxw {
    border-top: 2px solid rgba(27, 30, 51, 0.64);
  }
  .uk-article-boder-bottom-yxw {
    border-bottom: 1px solid rgba(27, 30, 51, 0.1);
  }
  .uk-panel-badge-yxw {
    position: absolute;
    top: 0;
    right: 10px;
    z-index: 1;
    margin-top: 15px;
  }
  .uk-comment-avatar-yxw {
    margin-right: 10px;
    float: right;
    width: 50px;
    height: auto;
    border-radius: 50%;
  }
</style>