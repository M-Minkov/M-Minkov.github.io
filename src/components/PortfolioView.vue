<template>
  <v-app>
    <v-app-bar elevation="0" class="navbar" scroll-behavior="hide" scroll-threshold="100">
      <v-app-bar-title class="font-weight-bold">Minko Minkov</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon="mdi-github"
        href="https://github.com/M-Minkov"
        target="_blank"
        variant="text"
      ></v-btn>
      <v-btn
        href="https://github.com/M-Minkov/M-Minkov.github.io"
        target="_blank"
        variant="text"
        class="ml-2"
      >Source Code</v-btn>
    </v-app-bar>

    <v-main class="main-content">
      <v-container class="projects-section" id="projects">
        <div class="projects-header">
          <h3 class="section-title">Projects</h3>
          <p class="section-description">
            Software engineer that enjoys coding and solving problems. Coding since 2016—check out some of my work below!
          </p>
        </div>

        <div class="project-grid">
          <article
            v-for="(project, index) in projectsList"
            :key="index"
            class="project-grid__item"
          >
            <ShowcaseCard v-bind="project" />
          </article>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import ShowcaseCard from '@/components/ShowcaseCard.vue'
import { projects } from '@/data/projects.js'

const projectsList = projects
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

:global(body) {
  font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
  background-color: #f3f5fa;
  color: #0f1f3d;
  margin: 0;
}

:global(#app) {
  min-height: 100vh;
}

.navbar {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(13, 71, 161, 0.08);
  padding-inline: clamp(16px, 4vw, 72px);
}

.main-content {
  background: radial-gradient(circle at top right, rgba(25, 118, 210, 0.08), transparent 40%),
    linear-gradient(180deg, #ffffff 0%, #f5f7fb 60%, #eef2fb 100%);
  min-height: 100vh;
}

.projects-section {
  width: 100%;
  padding: clamp(24px, 5vw, 60px) clamp(18px, 6vw, 120px) clamp(48px, 7vw, 100px);
}

.projects-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 32px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #0f1f3d;
  margin-bottom: 12px;
}

.section-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #38486a;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(24px, 2.8vw, 42px);
  align-items: stretch;
}

.project-grid__item {
  display: flex;
}

.project-grid__item > * {
  flex: 1;
}

@media (max-width: 1100px) {
  .project-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 860px) {
  .project-grid {
    display: flex;
    flex-wrap: nowrap;
    gap: clamp(20px, 6vw, 32px);
    overflow-x: auto;
    padding-bottom: 8px;
    justify-content: flex-start;
  }

  .project-grid__item {
    flex: 0 0 clamp(280px, 75vw, 360px);
  }

  .project-grid__item > * {
    min-width: 0;
  }
}

@media (pointer: coarse) {
  .project-grid {
    scroll-snap-type: x proximity;
  }

  .project-grid__item {
    scroll-snap-align: start;
  }
}

@media (min-width: 1280px) {
  .projects-section {
    max-width: 1280px;
    margin: 0 auto;
  }
}

</style>
  