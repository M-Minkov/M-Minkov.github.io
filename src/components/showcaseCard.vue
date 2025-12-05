<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card 
      v-bind="props" 
      class="project-card"
      :class="{ 'card-hovered': isHovering }"
      elevation="4"
    >
      <v-img 
        cover
        :src="isHovering ? gifFile : pngFile"
        class="card-image"
        aspect-ratio="16/10"
      />
      
      <v-overlay
        :model-value="isHovering"
        contained
        scrim="#000000"
        opacity="0.85"
        transition="scale-transition"
        class="fill-height overlay-container"
      >
        <v-container class="d-flex flex-column fill-height justify-center align-center pa-6">
          <div class="overlay-content">
            <p class="overlay-title">{{ title }}</p>
            <p class="overlay-description">{{ description }}</p>
            
            <v-spacer class="my-2"></v-spacer>
            
            <div class="button-group">
              <v-btn 
                icon="mdi-github" 
                :href="sourceURL"
                target="_blank"
                rel="noopener"
                class="action-btn"
                size="large"
              ></v-btn>
              <v-btn 
                v-if="buildURL" 
                :href="buildURL"
                target="_blank"
                rel="noopener"
                class="action-btn ml-3"
                size="large"
              >View Project</v-btn>
            </div>
          </div>
        </v-container>
      </v-overlay>

      <v-card-item class="card-footer">
        <v-card-title class="text-truncate font-weight-bold">{{ title }}</v-card-title>
      </v-card-item>
    </v-card>
  </v-hover>
</template>

<style scoped>
.project-card {
  height: 100%;
  min-height: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
}

.card-image {
  flex: 1 1 auto;
  min-height: 0;
}

.project-card:not(.card-hovered) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-hovered {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  transform: translateY(-8px);
}

.card-image {
  transition: all 0.3s ease;
}

.overlay-container {
  backdrop-filter: blur(2px);
}

.overlay-content {
  text-align: center;
  width: 100%;
}

.overlay-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  animation: slideInDown 0.3s ease;
}

.overlay-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin-bottom: 16px;
  animation: slideInUp 0.3s ease 0.1s both;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  animation: fadeIn 0.3s ease 0.2s both;
}

.action-btn {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
}

.action-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.card-footer {
  padding: 16px 18px;
  background: white;
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  min-height: 76px;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .overlay-title {
    font-size: 1.25rem;
  }

  .overlay-description {
    font-size: 0.85rem;
  }

  .button-group {
    gap: 4px;
  }

  .action-btn {
    margin-left: 0 !important;
  }

  .project-card {
    min-height: 360px;
  }
}
</style>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pngFile: {
    type: String,
    required: true
  },
  gifFile: {
    type: String,
    required: true
  },
  sourceURL: {
    type: String,
    required: true
  },
  buildURL: {
    type: String,
    default: ''
  }
})
</script>