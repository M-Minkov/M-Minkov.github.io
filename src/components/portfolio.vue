

<template>

  
  <v-app-bar elevation="4" scroll-behavior="hide" scroll-threshold=10>
    <template v-slot:append>
      <v-btn icon="mdi-github" href="https://github.com/M-Minkov"></v-btn>
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
    <v-col v-for="(project, index) in projectsList" :key="index" cols="4">
      <showcaseCard v-bind="project"/>
    </v-col>
  </v-row>
</template>
  
  <script setup>
    import { ref, reactive, computed } from 'vue'
    import showcaseCard from '@/components/showcaseCard.vue'
    import Card from '@/assets/js_classes/cardclass.js'

    const projectsList = [
      new Card(
        'TradeMe Web Scraper',
        'Gathers data of rental properties off TradeMe.co.nz, and puts them into a nicely formatted CSV file.',
        './barchart.PNG',
        "./barchart.gif",
        "https://github.com/M-Minkov/RentalScraper"
      ),
      new Card(
        'Fractal Image Generator',
        'Generative recursion is used to generate a fractal based on the Julia Set of a complex number. The ' +
        'more recursions done, the more detailed the fractal becomes. Give it 2 complex numbers, and it will generate ' +
        'as many fractals as you want in-between the numbers, and then squish the images together into a GIF or MP4. ' +
        'The frames per second, amount of frames, and quality of the image can all be changed.',
        './fractal.PNG',
        "https://raw.githubusercontent.com/M-Minkov/Fractal-Image-Generator/main/julia.gif",
        "https://github.com/M-Minkov/Fractal-Image-Generator"
      ),
      new Card(
        'Force Directed Graph',
        'A force directed graph, with nodes that can be dragged around. The nodes are countries, and each country is ' +
        'connected by an edge, if they share a border/edge in real life. Written in vanilla Javascript.',
        './forcedDirected.PNG',
        "./forcedDirected.PNG",
        "https://github.com/M-Minkov/Javascript-Force-Directed-Graph",
        "https://m-minkov.github.io/Javascript-Force-Directed-Graph/"
      ),
    ];

    console.log(projectsList[0].description);

  </script>
  