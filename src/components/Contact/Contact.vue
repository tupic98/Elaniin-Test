<template>
  <v-container fluid class="contact-footer white--text" id="contact">
    <v-layout row justify-center align-center fill-height>
      <v-layout column justify-center align-center>
        <p class="contact-paragraph">Sing up for our newsletter</p>
        <p class="contact-paragraph">to receive special offers.</p>
        <div class="vertical-line"></div>
        <v-text-field style="width: 400px;" dark outlined placeholder="Enter your email address"></v-text-field>
      </v-layout>
    </v-layout>
  </v-container>
</template>
<script lang="ts" src="./_contact.ts">
</script>

<style lang="scss" scoped>
  @import "_contact.scss";
</style>
