<!-- card that has an image, and when you hover over the card, a little overlay with a button appears -->

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="ma-auto"  v-bind="props" hover>
          <v-img cover
          :src="isHovering ? imageURL2 : imageURL1">
          </v-img>
          <v-overlay
            :model-value="isHovering"
            contained
            scrim="#FFFFFF"
            transition="scale-transition"
            close-delay=1000
            class="fill-height"
          >
          <v-container class="d-flex flex-column align-center align-self-center justify-center fill-height">
            <p class="custom_title">{{ title }}</p>
            <p class="custom_subtitle">{{ description }}</p>
            <v-spacer></v-spacer>
            <v-btn variant="flat">See more info</v-btn>
          </v-container>

          </v-overlay>
        </v-card>
      </v-hover>
</template>

<style>
.custom_overlay {
  background-color: #ffffffb8;
}

.custom_title {
  background-color: #ffffff57;
  padding: 10px;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
}

.custom_subtitle {
  background-color: #ffffff57;
  padding: 3px;
  display: inline-block;
  font-size: 1rem;
  font-weight: normal;
  max-width: 50%;
}

</style>

<script setup>
    import { computed } from 'vue';
import { ref } from 'vue'

    const title = ref('Project Title');
    const description = ref('made up description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.');
    // const imageURL1 = ref('https://cdn.vuetifyjs.com/images/cards/docks.jpg');
    const imageURL1 = ref('./barchart.PNG');
    const imageURL2 = ref('https://cdn.dribbble.com/users/80960/screenshots/1388364/shot5.gif');
    const overlay = ref(true)
    
</script>