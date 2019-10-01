<template>
  <v-container fluid class="logos-container">
    <div class="logo-container">
      <div class="logos">
        <div v-for="i in 8" :key="i">
          <v-img
            height="150"
            width="150"
            :src="logo"
          >
          </v-img>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // @ts-ignore
  import logo from '@/assets/cam.png';

  @Component
  export default class LogoGrid extends Vue {
    logo: any = logo;
  }
</script>

<style lang="scss" scoped>
  .logos-container {
    min-height: calc(20vh - 0px);
    height: calc(20vh);
    max-height: calc(20vh);
  }

  .logo-container {
    display: grid;
    grid-template-columns: 0.5fr 0.9fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    .logos {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      grid-area: 1 / 2 / 2 / 3;
    }
  }
</style>
