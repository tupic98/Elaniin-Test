<template>
  <v-app
    class="app"
  >
    <v-app-bar
      absolute
      class="navigation"
      flat
      app
    >
      <v-toolbar-title class="headline text-uppercase">
        <v-img
          :src="logo"
          height="50"
          width="100"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div
        v-if="$vuetify.breakpoint.smAndDown"
      >
        <v-btn class="white--text" icon v-blur>
          <v-icon @click.stop="drawer = !drawer">mdi-menu</v-icon>
        </v-btn>
      </div>
      <div
        v-for="item in navItems"
        :key="item.id"
        v-else
      >
        <v-btn
          v-blur
          text
          @click="scroll(item.ref)"
          dark
        >
          <span class="mr-2">{{ item.name }}</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-sheet
      height="100%"
      class="overflow-hidden"
      style="position: relative"
    >
      <v-content>
        <Introduction/>
        <AboutUs></AboutUs>
        <MyWorks></MyWorks>
        <Pricing></Pricing>
        <LogoGrid></LogoGrid>
        <Contact></Contact>
      </v-content>
      <v-footer>
        <v-layout row align-center justify-space-around fill-height>
          <v-layout column align-center justify-center fill-height>
            <div>
              <p class="text-uppercase nav_title">Office</p>
              <p class="nav_text">756 Livingston Street</p>
              <p class="nav_text">Brooklyn, NY 11201</p>
            </div>
          </v-layout>
          <v-layout column align-center justify-center fill-height>
            <div>
              <p class="text-uppercase nav_title">Get in touch</p>
              <p class="nav_text">work@e.oliver.com</p>
              <p class="nav_text">+1 (00) 123-45-67</p>
            </div>
          </v-layout>
          <v-layout column align-center justify-center fill-height>
            <div>
              <p class="text-uppercase nav_title">Social</p>
              <p class="nav_text">Connect with me on <a href="#" class="white--text">facebook</a></p>
              <p class="nav_text"><a href="#" class="white--text">twitter</a> or <a href="#"
                                                                                    class="white--text">instagram</a>
              </p>
            </div>

          </v-layout>
        </v-layout>
      </v-footer>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        right
        temporary
      >
        <v-list dense>
          <v-list-item
            v-for="item in navItems"
            :key="item.id"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                <v-btn
                  v-blur
                  text
                  @click="scroll(item.ref)"
                  dark
                >
                  <span class="mr-2">{{ item.name }}</span>
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>

  </v-app>
</template>

<style lang="scss" scoped>
  ::v-deep .theme--light.v-navigation-drawer {
    background-color: #000;
  }

  .nav_title {
    font-size: 16px;
  }

  .nav_text {
    font-size: 11px;
  }

  .theme--light.v-application.app {
    background: rgba(0, 0, 0, 0.91);
  }

  ::v-deep .theme--light.v-sheet {
    background-color: rgba(255, 255, 255, 0);
    color: #fff;
  }
</style>

<script lang="ts" src="./app.ts">
</script>
