<!-- card that has an image, and when you hover over the card, a little overlay with a button appears -->

<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card class="ma-auto"  v-bind="props" hover>
          <v-img cover src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
          </v-img>
          <v-overlay
            :model-value="isHovering"
            contained
            scrim="#036358"
            class="align-center justify-center"
          >
            <v-card-title>
              {{ title }}
            </v-card-title>
            <v-card-subtitle>
              {{ description }}
            </v-card-subtitle>
            <v-spacer></v-spacer>
          <v-btn variant="flat">See more info</v-btn>
          </v-overlay>
        </v-card>
      </v-hover>
</template>

<script setup>
    import { ref } from 'vue'

    const title = ref('Project Title');
    const description = ref('Project Description');
    const image = ref('https://cdn.vuetifyjs.com/images/cards/docks.jpg');
    
</script>