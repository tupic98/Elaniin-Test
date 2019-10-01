<template>
  <v-parallax
    height="730"
    :src="banner"
  >
    <div id="home" class="introduction">
      <div
        class="left_side"
      >
        <v-layout class="sides" column align-start justify-center fill-height>
          <ul class="sides__elements">
            <a href="#">
              <li class="icon text-center">Instagram</li>
            </a>
            <a href="#">
              <li class="icon text-center">Twitter</li>
            </a>
            <a href="#">
              <li class="icon text-center">Facebook</li>
            </a>
          </ul>
        </v-layout>
      </div>
      <div
        class="center_left"
      >
        <v-layout column align-center justify-center fill-height>
          <div
            class="white--text"
          >
            <p class="text-uppercase">Introduction</p>
            <p class="main__text" v-html="mainText"></p>
            <v-divider class="white line"></v-divider>
            <p class="main__paragraph text-justify" v-html="mainParagraph"></p>

            <p>Discover</p>
          </div>
        </v-layout>
      </div>
      <div
        class="center_right"
      >
      </div>
      <div
        class="right_side"
      >
        <v-layout class="sides" column align-start justify-center fill-height>
          <ul class="sides__elements_right">
            <a href="#">
              <li class="icon" id="explore">
                <div
                  class="explore__text"
                >
                  <v-divider class="white explore__text_line"></v-divider>
                  EXPLORE MORE
                </div>
              </li>
            </a>
          </ul>
        </v-layout>
      </div>
    </div>
  </v-parallax>
</template>

<script lang="ts" src="./_introduction.ts">
</script>

<style scoped>
  @import "_introduction.scss";
</style>
