<template lang="html">
  <div class="uk-slidenav-position" data-uk-slideshow="{autoplay:true, autoplayInterval: 5000, kenburns:true}">
    <ul class="uk-slideshow">
      <li>
        <img src="../../custom/images/banner-1.jpg" width="1220px" height="250px">
      </li>
       <li>
        <img src="../../custom/images/banner-2.jpg" width="1220px" height="250px">
      </li>
       <li>
        <img src="../../custom/images/banner-3.jpg" width="1220px" height="250px">
      </li>
    </ul>
    <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
    <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
    <ul class="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center">
      <li data-uk-slideshow-item="0"><a href="#"></a></li>
      <li data-uk-slideshow-item="1"><a href="#"></a></li>
      <li data-uk-slideshow-item="2"><a href="#"></a></li>
    </ul> 
  </div>
</template>
<script>
  import 'uikit/dist/css/components/slideshow.css'
  import 'uikit/dist/js/components/slideshow.js'
  import 'uikit/dist/css/components/slidenav.css'
  import 'uikit/dist/js/components/slideshow-fx.js'
  import 'uikit/dist/css/components/dotnav.css'

  export default {
    data () {
      return {
        banners: [
          { img: '../../custom/images/banner-1.jpg' },
          { img: '../../custom/images/banner-2.jpg' },
          { img: '../../custom/images/banner-3.jpg' }
        ]
      }
    }
  }
</script>