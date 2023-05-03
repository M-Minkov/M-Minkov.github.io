

<template>

  
  <v-app-bar elevation="4" scroll-behavior="hide" scroll-threshold=10>
    <template v-slot:append>
      <v-btn icon="mdi-github" href="https://github.com/M-Minkov"></v-btn>
      <v-btn icon="mdi-email"></v-btn>
      <v-btn>Source Code</v-btn>
    </template>
  </v-app-bar>


  <v-container>
    <v-responsive class="align-end text-center pt-7 ma-auto" max-width="40%" style="line-height: 1.6;" >
      <h1>Minko Minkov</h1>
      <h2 style="font-weight: normal;">Fullstack Developer, with a passion for Statistics & Math</h2>
      <p>Hi there! My name is Minko, I've been a coder since 2016. I have a strong passion for puzzly algorithm and statistics based questions.
        I also have a variety of fullstack experience, and do a passion project from time-to-time. <br><br>Come check out my work!</p>
    </v-responsive>
  </v-container>

  <v-row>
    <v-col cols="4">
      <!-- card that has an image, and when you hover over the card, a little overlay with a button appears -->
      <v-hover v-slot="{ isHovering, props }">
        <v-card class="ma-auto" max-width="400" v-bind="props" hover>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          </v-img>
          <v-overlay
            :model-value="isHovering"
            contained
            scrim="#036358"
            class="align-center justify-center"
          >
          <v-btn variant="flat">See more info</v-btn>
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="8">
      <showcaseCard />
    </v-col>
  </v-row>

  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center">
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
  
  <script setup>
    import { ref } from 'vue'
    import showcaseCard from '@/components/project_showcase.vue'

    const overlay = ref(true)
  </script>
  