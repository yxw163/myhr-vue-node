<template lang="html">
  <div class="uk-margin-top uk-panel">
    <ul class="uk-list uk-list-striped">
      <li v-for="item in mesageDetailList">
        <article class="uk-comment">
          <header class="uk-comment-header">
            <img 
              class="uk-comment-avatar-yxw uk-link-yxw" 
              style="margin-bottom: 15px;" 
              :src=item.authorImg>
            <a
              class="uk-comment-title uk-link-yxw">{{ item.title }}
            </a>
            <div 
              class="uk-comment-meta">{{ item.author }} | {{ item.createdAt }}
            </div>
          </header>
          <p class="uk-clearfix uk-link-yxw">
            <img 
              class="uk-align-left"
              style="width: 100px; height: auto"
              :src=item.contentImg>
            {{ item.summary }}
          </p>
        </article>     
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        mesageDetailList: 'getMessageList'
      })
    },
    methods: {
      ...mapActions([
        'getMessageList'
      ])
    }
  }
</script>