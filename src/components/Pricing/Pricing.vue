<template>
  <div class="pricing" id="prices">
    <v-container fluid class="pricing_title">
      <div class="top__center-left">
        <v-layout column align-center justify-center fill-height>
          <div
            class="white--text"
          >
            <p class="pricing-text">Pricing.</p>
            <v-divider class="white line"></v-divider>
            <p class="pricing-paragraph">The photo leaves open moments, which immediately overlap with the</p>
            <p class="pricing-paragraph">pressure of time.</p>
          </div>
        </v-layout>
      </div>
    </v-container>
    <v-container fluid grid-list-sm fill-height>
      <v-layout row fill-height wrap>
        <div
          v-for="priceCardItem in priceCardItems"
        >
          <v-flex class="price-card" d-flex xs12>
            <v-card
              :class="obtainColorCard(priceCardItem.id)"
              width="385"
              class="pa-3">
              <v-layout column fill-height align-start class="white--text info1">
                <v-divider class="white line2"></v-divider>
                <div class="price-title">{{ priceCardItem.title1 }}</div>
                <div class="price-title">{{ priceCardItem.title2 }}</div>
                <p></p>
                <div class="text-uppercase grey--text info_title">Photos</div>
                <p class="info_desc">{{ priceCardItem.photos }}</p>
                <div class="text-uppercase grey--text info_title">Processing</div>
                <p class="info_desc">{{ priceCardItem.processing }}</p>
                <div class="text-uppercase grey--text info_title">Type of camera
                </div>
                <p class="info_desc">{{ priceCardItem.type }}</p>
                <div class="text-uppercase grey--text info_title">Resolution</div>
                <p class="info_desc">{{ priceCardItem.resolution }}</p>
                <div class="text-uppercase grey--text info_title">Term</div>
                <p class="info_desc">{{ priceCardItem.term }}</p>
                <p></p>
                <p></p>
                <p class="price">{{ priceCardItem.price }}</p>
              </v-layout>
            </v-card>
          </v-flex>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  interface PriceCard {
    id: number;

    title1: string;

    title2: string;

    photos: string;

    processing: string;

    type: string;

    resolution: string;

    term: string;

    price: string;
  }

  @Component
  export default class Pricing extends Vue {

    priceCardItems: PriceCard[] = [
      {
        id: 1,
        title1: 'Model',
        title2: 'Photography',
        photos: 'Package of 50',
        processing: 'Retouch',
        type: 'Semi-professional',
        resolution: '12 MP',
        term: '14 days',
        price: '$39',
      },
      {
        id: 2,
        title1: 'Photography of',
        title2: 'events.',
        photos: 'Package of 150',
        processing: 'Correction',
        type: 'Semi-professional',
        resolution: '32 MP',
        term: '14 - 21 days',
        price: '$59',
      },
      {
        id: 3,
        title1: 'Corporate',
        title2: 'Photography',
        photos: 'Package of 500',
        processing: 'Correction, Retouch',
        type: 'Professional',
        resolution: '48 MP',
        term: '30 days',
        price: '$99',
      },
      {
        id: 4,
        title1: 'Photography for',
        title2: 'movies.',
        photos: 'Unlimited',
        processing: 'All types of installation',
        type: 'Professional',
        resolution: '68 MP',
        term: 'Individual',
        price: 'Individual',
      },
    ]

    obtainColorCard(id: number) {
      if (id % 2 === 0) {
        return 'secondary';
      }
      return 'secondary lighten-1';
    }
  }
</script>

<style lang="scss" scoped>

  .price {
    font-size: 24px;
    margin-left: 10px;
  }

  .price-title {
    margin-left: 50px;
    font-size: 28px;
  }

  .pricing {
    min-height: calc(100vh - 0px);
    height: calc(100vh);
    max-height: calc(100vh);
  }

  .pricing_title {
    display: grid;
    grid-template-columns: 0.01fr 1.5fr 1fr 0.15fr;
    grid-template-rows: 0.3fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    .top__center-left {
      grid-area: 1 / 2 / 2 / 3;
    }
  }

  .line {
    position: absolute;
    width: 100px;
    left: 230px;
  }

  .line2 {
    position: absolute;
    width: 40px;
    top: 50px;
    left: 0px;
  }

  .pricing-text {
    font-size: 52px;
  }

  .pricing-paragraph {
    font-size: 12px
  }

  .info_title {
    margin-left: 10px;
    font-size: 11px;
  }

  .info_desc {
    margin-left: 10px;
    font-size: 13px;
  }
</style>
