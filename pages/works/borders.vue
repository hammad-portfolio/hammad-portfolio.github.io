<script lang="ts" setup>
import PageSection from "@/components/PageSection";
import { SectionColor } from "@/components/PageSection";
</script>

<template>
  <PageSection :bg-color="SectionColor.Black">
    <div class="pt-24 pb-12 w-2/3 mx-auto">
      <div class="flex justify-center items-center gap-16">
        <p class="text-white text-10rem">Borders</p>
        <p class="text-right font-ruqaa text-12rem">حُدودْ</p>
      </div>
      <ul class="text-white">
        <li>Borders</li>
        <li>2019</li>
        <li>Acrylic. Print</li>
        <li>21 x 29.7 cm</li>
      </ul>
    </div>
  </PageSection>
  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-2 min-h-full py-12">
      <img
        src="@/assets/works/borders-2019/1.jpg"
        alt="Borders"
        class="w-auto max-h-screen bg-top object-cover rounded"
      />
    </div>
  </PageSection>
  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-2 min-h-full py-12">
      <img
        src="@/assets/works/borders-2019/3.jpg"
        alt="Borders"
        class="w-auto max-h-screen bg-top object-cover rounded"
      />
    </div>
  </PageSection>
  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-2 min-h-full py-12">
      <img
        src="@/assets/works/borders-2019/4.jpg"
        alt="Borders"
        class="w-auto max-h-screen bg-top object-cover rounded"
      />
    </div>
  </PageSection>
</template>
