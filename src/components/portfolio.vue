

<template>

  
  <v-app-bar elevation="4" scroll-behavior="hide" scroll-threshold=10>
    <template v-slot:append>
      <v-btn icon="mdi-github" href="https://github.com/M-Minkov"></v-btn>
      <v-btn icon="mdi-email"></v-btn>
      <v-btn href="https://github.com/M-Minkov/M-Minkov.github.io">Source Code</v-btn>
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
    <!-- for loop -->
    <v-col v-for="n in 4" :key="n" cols="4">
      <showcaseCard />
    </v-col>
  </v-row>
</template>
  
  <script setup>
    import { ref } from 'vue'
    import showcaseCard from '@/components/project_showcase.vue'

  </script>
  