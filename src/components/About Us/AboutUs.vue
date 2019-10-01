<template>
  <div id="about" class="about-us">
    <v-layout column align-center justify-center fill-height>
      <v-card class="about_image-card" elevation="3">
        <v-img
          :src="image"
          height="400"
          width="300"
        ></v-img>
        <v-divider class="line white" vertical></v-divider>
      </v-card>
      <p class="white--text about-text">Hello.</p>
      <p class="white--text text-center about-paragraph" v-html="aboutParagraph"></p>
      <p class="white--text text-center about-paragraph">- Edward Oliver</p>
    </v-layout>
  </div>
</template>

<script lang="ts" src="./_aboutUs.ts">
</script>

<style lang="scss" scoped>
  @import "_aboutUs.scss";
</style>
