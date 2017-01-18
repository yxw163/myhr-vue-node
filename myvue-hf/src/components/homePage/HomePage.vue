<template>
  <div class="uk-grid">
    <div class="uk-width-1-1 uk-margin-top">
      <slider></slider>
    </div>
    <div class="uk-width-1-3 uk-margin-top" >
      <panel data-uk-scrollspy="{cls: 'uk-animation-fade',repeat: true}"></panel>
      <career style="height: 226px" data-uk-scrollspy="{cls: 'uk-animation-fade',repeat: true}"></career>
    </div>
    <div class="uk-width-2-3 uk-margin-top" >
      <message style="height: 404px" data-uk-scrollspy="{cls: 'uk-animation-fade',repeat: true}"></message>
    </div>
    <div class="uk-width-2-3 uk-margin-top" style="position: relative" >
      <performance></performance>
    </div>
    <div class="uk-width-1-3 uk-margin-top" >
      <data-visual></data-visual>
    </div>
    <div class="uk-width-1-1 uk-margin-top">
      <contacts></contacts>
    </div>
    <message-modal id="massageModal"></message-modal>
  </div>
</template>
<script>
  import 'uikit/dist/js/core/scrollspy.js'
  import Slider from '../slider/Slider'
  import Panel from '../panel/Panel'
  import Message from '../message/Message'
  import Performance from '../performance/Performance'
  import Career from '../career/Career'
  import Contacts from '../contacts/Contacts'
  import DataVisual from '../data-visual/DataVisual'
  import MessageModal from '../messageModal/messageModal'
  export default {
    components: {
      Slider,
      Panel,
      Message,
      Performance,
      Career,
      Contacts,
      DataVisual,
      MessageModal
    }
  }

</script>