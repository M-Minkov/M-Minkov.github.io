<!-- card that has an image, and when you hover over the card, a little overlay with a button appears -->

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="ma-auto"  v-bind="props" hover>
          <v-img cover
          :src="isHovering ? gifFile : pngFile"  >
          </v-img>
          <v-overlay
            :model-value="isHovering"
            contained
            scrim="#000000"
            transition="scale-transition"
            close-delay=10
            class="fill-height"
          >
          <v-container class="d-flex flex-column align-center align-self-center justify-center fill-height">
            <p class="custom_title">{{ title }}</p>
            <p class="custom_subtitle">{{ description }}</p>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-github" :href="sourceURL" style="margin: 10px;"></v-btn>
            <!-- add button if buildURL exists and add a bit of space between the buttons with inbuilt css -->
            <v-btn v-if="buildURL" :href="buildURL" style="margin: 10px;">View Build</v-btn>
          </v-container>

          </v-overlay>
        </v-card>
      </v-hover>
</template>

<style>
.custom_overlay {
  background-color: #ffffffe6;
}

.custom_title {
  background-color: #ffffffa1;
  padding: 10px;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
}

.custom_subtitle {
  background-color: #ffffffa1;
  padding: 3px;
  display: inline-block;
  font-size: 1rem;
  font-weight: normal;
  max-width: 50%;
}

</style>

<script setup>
  import { ref, reactive, computed } from 'vue'
  import Card from '@/assets/js_classes/cardclass.js'

  const props = defineProps(new Card())

 /*   const title = ref('Project Title');
    const description = ref('made up description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.');
    const pngFile = ref('./barchart.PNG');
    const gifFile = ref('https://cdn.dribbble.com/users/80960/screenshots/1388364/shot5.gif');
    const overlay = ref(true) */


    
</script>