<script lang="ts" setup>
import HugeText from '@/components/typography/HugeText.vue'

defineProps<{
  bg?: string
  title: string
  path: string
}>()
</script>

<template>
  <NuxtLink :to="path" custom v-slot="{ href, navigate }">
    <a
      :href="href"
      @click="navigate"
      class="group block bg-center"
      :style="`background-image: url(${bg});`"
    >
      <div class="bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all cursor-pointer">
        <div class="container mx-auto px-4 py-16">
          <HugeText
            class="opacity-0 translate-x--4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white"
          >
            {{ title }}
          </HugeText>
        </div>
      </div>
    </a>
  </NuxtLink>
</template>
