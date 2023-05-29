<script lang="ts" setup>
import PageSection from "@/components/PageSection";
import { SectionColor } from "@/components/PageSection";
</script>

<template>
  <PageSection :bg-color="SectionColor.Black">
    <div class="pt-24 pb-12 w-2/3 mx-auto">
      <div class="flex justify-center items-center gap-16">
        <p class="text-white text-10rem">Hug</p>
        <p class="text-right font-ruqaa text-12rem">عِناق</p>
      </div>
      <ul class="text-white">
        <li>Hug</li>
        <li>2020</li>
        <li>Acrylic on paper</li>
        <li>69.8 x 99.5 cm</li>
      </ul>
    </div>
  </PageSection>
  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-2 min-h-full py-12">
      <img
        src="@/assets/works/hug-2020/1.jpg"
        alt="Parting"
        class="w-auto max-h-screen bg-top object-cover rounded"
      />
    </div>
  </PageSection>
</template>
