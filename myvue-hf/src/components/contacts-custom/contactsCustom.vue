<template lang="html">
  <div class="uk-panel uk-panel-box hvr-float-shadow" style="border: 1px solid rgba(27, 30, 51, 0.64)">
    <h3 class="uk-panel-title">
      <slot name="img">
        <img slot="img" :src="img" class="uk-align-left" style="margin-bottom: -15px">
      </slot>
      <slot name="contact-kind">
        <p slot="contact-kind" class="uk-block-muted">{{ contactKind }}</p>
      </slot>
      <slot name="contact-count">
        <p>{{ contactCount }} 人</p>
      </slot>
    </h3>
  </div>
</template>
<script>
  export default {
    props: {
      contactCount: {
        type: String
      }
    },
    data () {
      return {
        img: require('../../custom/images/logo_1.png'),
        contactKind: '通讯录'
      }
    }
  }
</script>
<style>
  /* Float Shadow */
.hvr-float-shadow {
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
</style>