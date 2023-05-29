<script setup lang="ts">
import PageSection from "@/components/PageSection";
import HugeText from "@/components/typography/HugeText.vue";
import WorkSection from "@/components/WorkSection.vue";
import bgRevolt from "@/assets/works/revolt-2020/1.jpg";
import bgBorders from "@/assets/works/borders-2019/1.jpg";
import bgHug from "@/assets/works/hug-2020/1.jpg";
import bgSea from "@/assets/works/crossing-2020/2.jpg";
import bgVillage from "@/assets/works/village-2020/1.jpg";
import bgParting from "@/assets/works/parting-2021/1.jpg";
import MediumText from "@/components/typography/MediumText.vue";

const works = [
  {
    title: "Parting",
    year: "2021",
    bg: bgParting,
    path: "/works/parting",
  },
  {
    title: "Revolt",
    year: "2020",
    bg: bgRevolt,
    path: "/works/revolt",
  },
  {
    title: "Hug",
    year: "2020",
    bg: bgHug,
    path: "/works/hug",
  },
  {
    title: "Crossing",
    year: "2020",
    bg: bgSea,
    path: "/works/crossing",
  },
  {
    title: "Village",
    year: "2020",
    bg: bgVillage,
    path: "/works/village",
  },
  {
    title: "Borders",
    year: "2019",
    bg: bgBorders,
    path: "/works/borders",
  },
];
</script>

<template>
  <PageSection>
    <div
      class="flex justify-between items-center gap-64 justify-between min-h-full px-4 py-8"
    >
      <div class="flex flex-col gap-4">
        <HugeText> Alesandra Hammad </HugeText>
        <NormalText>
          I studied interior design with a keen interest in architecture, but my
          journey took an unexpected turn when I discovered therapy through art.
          Painting with watercolours and wood colours sparked a deep passion
          within me, while experimenting with innovative printing techniques
          like styrofoam and silk printing added to my artistic repertoire.
        </NormalText>
        <NormalText>
          This portfolio is a platform where I showcase my artistic experiences,
          still in the process of learning and evolving. Each creation
          represents a chapter of my ongoing journey, capturing emotions and
          pushing boundaries. Join me as I express myself through colours and
          textures, aiming to inspire and evoke beauty.
        </NormalText>
      </div>
      <img
        alt="Hammad logo"
        src="@/assets/portrait.jpg"
        class="object-cover min-w-128 w-128 h-128 rounded-5"
      />
    </div>
  </PageSection>
  <WorkSection
    v-for="work in works"
    :key="work.title"
    :title="work.title"
    :bg="work.bg"
    :path="work.path"
  />
</template>
