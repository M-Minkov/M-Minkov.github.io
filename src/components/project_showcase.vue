<template>
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
</template>

<script setup>
    //
</script>