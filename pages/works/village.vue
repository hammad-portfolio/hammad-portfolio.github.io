<script lang="ts" setup>
import PageSection from "@/components/PageSection";
import { SectionColor } from "@/components/PageSection";
</script>

<template>
  <PageSection :bg-color="SectionColor.Black">
    <div class="pt-24 pb-12 w-2/3 mx-auto">
      <div class="flex justify-center items-center gap-16">
        <p class="text-white text-10rem">Village</p>
        <p class="text-right font-ruqaa text-12rem">ضِيعة</p>
      </div>
      <ul class="text-white">
        <li>Village</li>
        <li>2020</li>
        <li>Acrylic. Print</li>
        <li>28 x 214 cm</li>
      </ul>
    </div>
  </PageSection>
  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-16 min-h-full py-12">
      <div class="relative">
        <img
          src="@/assets/works/village-2020/1.jpg"
          alt="Village"
          class="w-auto max-h-screen bg-top object-cover rounded"
        />
      </div>
      <div class="flex-grow">
        <img
          src="@/assets/works/village-2020/2.webp"
          alt="Village"
          class="w-full max-h-screen bg-top object-contain rounded"
        />
      </div>
    </div>
  </PageSection>

  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-16 min-h-full py-12">
      <div class="relative">
        <img
          src="@/assets/works/village-2020/1.jpg"
          alt="Village"
          class="w-auto max-h-screen bg-top object-cover rounded"
        />
      </div>
      <div class="flex-grow">
        <img
          src="@/assets/works/village-2020/3.webp"
          alt="Village"
          class="w-full max-h-screen bg-top object-contain rounded"
        />
      </div>
    </div>
  </PageSection>

  <PageSection full :bg-color="SectionColor.White">
    <div class="flex justify-center items-center gap-16 min-h-full py-12">
      <div class="relative">
        <img
          src="@/assets/works/village-2020/1.jpg"
          alt="Village"
          class="w-auto max-h-screen bg-top object-cover rounded"
        />
      </div>
      <div class="flex-grow">
        <img
          src="@/assets/works/village-2020/4.webp"
          alt="Village"
          class="w-full max-h-screen bg-top object-contain rounded"
        />
      </div>
    </div>
  </PageSection>
</template>
