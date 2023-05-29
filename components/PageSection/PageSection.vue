<script lang="ts" setup>
import { SectionColor } from '.'

defineProps<{
  bgColor?: SectionColor
  full?: boolean
}>()
</script>

<template>
  <div
    class="flex flex-col"
    :class="{
      'min-h-screen': full,
      'h-full': full,
      'bg-white': !bgColor || bgColor === SectionColor.White,
      'bg-black': !bgColor || bgColor === SectionColor.Black
    }"
  >
    <div class="container mx-auto flex-auto h-full">
      <slot></slot>
    </div>
  </div>
</template>
