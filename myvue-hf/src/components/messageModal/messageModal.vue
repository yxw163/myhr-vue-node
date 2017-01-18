<template lang="html">
  <div class="uk-modal">
    <div class="uk-modal-dialog uk-modal-dialog-large">
      <a class="uk-modal-close uk-close"></a>
      <div >
        <article class="uk-article">
          <h1 class="uk-article-title uk-text-center">{{ currentMessage.title }}</h1>
          <header class="uk-comment-header uk-text-center">  
            <h3 class="uk-comment-title">
              <div class="uk-comment-meta">
                <img :src=currentMessage.authorImg width="50" height="50" style="border-radius: 50%">
                <span class="uk-block">{{ currentMessage.author }}</span>
                <span class="uk-block">{{ currentMessage.createdAt }}</span>
              </div>     
            </h3>
            <div class="uk-comment-meta">{{ currentMessage.commentData }}</div>
          </header>
          <hr class="uk-article-divider">
          <div class="uk-overflow-container">
            <p>
              <img 
                class="uk-align-left"
                style="width: 400px; height: auto"
                :src=currentMessage.contentImg>
              {{ currentMessage.content }}
            </p>
          </div>  
        </article>
      </div>
      <hr class="uk-article-divider">
      <div class="uk-modal-footer">
        <h3 class="uk-h3">评论</h3>
        <hr class="uk-article-divider">
        <header class="uk-comment-header">
          <img class="uk-comment-avatar" src="../../custom/images/avatar-1.jpg" width="50" height="50" alt="">
          <h4 class="uk-comment-title">Author</h4>
          <div class="uk-comment-meta">12 days ago | Profile | #</div>
        </header>
        <div class="uk-comment-body">
          <p>Echarts3有词云图功能了？！！怎么在API文档里面没有找到。。</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        currentMessage: 'getCurrentMessage'
      })
    },
    methods: {
      ...mapActions([
        'setCurrentMessage'
      ])
    }
  }
</script>

<style>
  .uk-modal-header {
    margin-bottom: 5px;

  }
</style>