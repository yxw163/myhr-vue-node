<template lang="html">
  <message-custom title="我的联系人">
    <i slot="title" class="uk-icon-phone" style="margin-right: 5px;"></i>
    <div class="uk-grid">
      <div class="uk-width-1-5">
        <contacts-custom contactCount="269"></contacts-custom>
      </div>
      <div class="uk-width-1-5">
        <contacts-custom contactCount="466">
          <img slot="img" src="../../custom/images/logo_2.png" class="uk-align-left" style="margin-bottom: -15px">
          <p slot="contact-kind" class="uk-block-muted">同地点</p>
        </contacts-custom>
      </div>
      <div class="uk-width-1-5" contactCount="378">
        <contacts-custom contactCount="903">
          <img slot="img" src="../../custom/images/logo_3.png" class="uk-align-left" style="margin-bottom: -15px">
          <p slot="contact-kind" class="uk-block-muted">老乡</p>
        </contacts-custom>
      </div>
      <div class="uk-width-1-5">
        <contacts-custom contactCount="109">
          <img slot="img" src="../../custom/images/logo_4.png" class="uk-align-left" style="margin-bottom: -15px">
          <p slot="contact-kind" class="uk-block-muted">校友</p>
        </contacts-custom>
      </div>
      <div class="uk-width-1-5">
        <contacts-custom contactCount="1120">
          <img slot="img" src="../../custom/images/logo_10.png" class="uk-align-left" style="margin-bottom: -15px">
          <p slot="contact-kind" class="uk-block-muted">同职位</p>
        </contacts-custom>
      </div>
    </div>
  </message-custom>
</template>

<script>
  import MessageCustom from '../message-custom'
  import ContactsCustom from '../contacts-custom'
  export default {
    components: {
      MessageCustom,
      ContactsCustom
    }
  }
</script>
