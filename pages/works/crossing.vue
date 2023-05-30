<script lang="ts" setup>
import PageSection from "@/components/PageSection";
import { SectionColor } from "@/components/PageSection";
</script>

<template>
  <PageSection :bg-color="SectionColor.Black">
    <div class="pt-24 pb-12 w-2/3 mx-auto">
      <div class="flex justify-center items-center gap-16">
        <p class="text-white text-10rem">Crossing</p>
        <p class="text-right font-ruqaa text-12rem">عُبور</p>
      </div>
      <ul class="text-white">
        <li>Crossing</li>
        <li>2020</li>
        <li>Mixed Materials</li>
      </ul>
    </div>
  </PageSection>
  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-2 min-h-full py-12">
      <img
        src="@/assets/works/crossing-2020/8.webp"
        alt="Crossing"
        class="w-auto max-h-screen bg-top object-cover rounded"
      />
    </div>
  </PageSection>
  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-16 min-h-full py-12">
      <img
        src="@/assets/works/crossing-2020/1.webp"
        alt="Crossing"
        class="w-1/3 bg-top object-cover rounded aspect-1"
      />
      <img
        src="@/assets/works/crossing-2020/6.webp"
        alt="Crossing"
        class="w-1/4 bg-top object-cover rounded"
      />
      <img
        src="@/assets/works/crossing-2020/7.webp"
        alt="Crossing"
        class="w-1/4 bg-top object-cover rounded"
      />
    </div>
    <div class="flex justify-center items-center gap-4 min-h-full py-12">
      <img
        src="@/assets/works/crossing-2020/3.webp"
        alt="Crossing"
        class="w-1/4 bg-top object-cover rounded aspect-1"
      />
      <img
        src="@/assets/works/crossing-2020/5.webp"
        alt="Crossing"
        class="w-1/4 bg-top object-cover rounded aspect-1"
      />
      <img
        src="@/assets/works/crossing-2020/4.webp"
        alt="Crossing"
        class="w-1/4 bg-top object-cover rounded aspect-1"
      />
    </div>
  </PageSection>
  <PageSection>
    <video
      src="/crossing-video.mp4"
      controls
      loop
      class="w-full bg-top object-cover rounded"
    ></video>
  </PageSection>
</template>
