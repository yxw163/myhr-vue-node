<template lang="html">
  <messageCustom title="News">
    <!-- <a slot="left-badge" class="uk-icon-bars"></a> -->
    <a 
      slot="left-badge" 
      class="uk-icon-bars hvr-pulse-grow"
      @click="goMessageDetailList"></a>
    <i slot="title" class="uk-icon-bookmark-o" style="margin-right: 5px;"></i>
    <ul slot="messageList" class="uk-comment-list">
      <li v-for="item in articleData">
        <article class="uk-comment">
          <header class="uk-comment-header">
            <img 
              class="uk-comment-avatar-yxw uk-link-yxw" 
              style="margin-bottom: 15px;" 
              :src=item.authorImg>
            <a @click="setCurrentMessage1(item)"
              class="uk-comment-title" 
              data-uk-modal="{target: '#massageModal'}">{{ item.title }}
            </a>
            <div class="uk-comment-meta"> {{ item.author }} | 
              {{ item.createdAt }}
            </div>
          </header>
          <a class="uk-clearfix">
            <img 
              class="uk-align-left"
              style="width: 100px; height: auto"
              :src=item.contentImg>
            {{ item.summary }}
          </a>
        </article>     
      </li >
    </ul>
    <!-- <template slot="item" scope="options">
      <li>
        <article class="uk-comment">
          <header class="uk-comment-header">
            <img 
              class="uk-comment-avatar-yxw uk-link-yxw" 
              style="margin-bottom: 15px;" 
              :src=options.item.images>
            <a 
              @click="setCurrentMessage(articleData[0])"
              class="uk-comment-title uk-link-yxw" 
              data-uk-modal="{target: '#massageModal'}">{{ options.item.title }}
            <a>
            <div 
              class="uk-comment-meta">{{ options.item.commentData }}
            </div>
          </header>
          <p class="uk-clearfix uk-link-yxw">
            <img 
              class="uk-align-left"
              style="width: 100px; height: auto"
              :src=options.item.imagesAvatar>
            {{ options.item.content }}
          </p>
        </article>      
      </li> -->
    </template>
  </messageCustom>
</template>
<script>
  import MessageCustom from '../message-custom'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        articleData: []
      }
    },
    computed: {
      ...mapGetters({
        articleData: 'getMessageList'
      })
    },
    mounted () {
      // if (this.articleData().length === 0) {
      this.$http.get('/api/1').then((response) => {
        this.articleData = response.data
        this.getMessageList(response.data)
      })
      // }
    },
    methods: {
      ...mapActions([
        'setCurrentMessage',
        'getMessageList'
      ]),
      setCurrentMessage1 (articleData) {
        this.setCurrentMessage(articleData)
      },
      goMessageDetailList () {
        this.$router.push({path: '/messageDetail'})
      }
    },
    components: {
      MessageCustom
    }
  }
</script>
<style type="less">
a:active,
a:hover {
  outline: 0;
}
/*
 * Style
 */
a,
.uk-link {
  color: #444;
  text-decoration: none;
  cursor: pointer;
}
a:hover,
.uk-link:hover {
  color: #999;
  text-decoration: none;
}

  /* Pulse Grow */
@-webkit-keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

.hvr-pulse-grow {
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}
.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {
  -webkit-animation-name: hvr-pulse-grow;
  animation-name: hvr-pulse-grow;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

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
</style>