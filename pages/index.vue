<script setup lang="ts">
import PageSection from '@/components/PageSection'
import HugeText from '@/components/typography/HugeText.vue'
import WorkSection from '@/components/WorkSection.vue'
import bgRevolt from '@/assets/works/revolt-2020/1.jpg'
import bgBorders from '@/assets/works/borders-2019/1.jpg'
import bgHug from '@/assets/works/hug-2020/1.jpg'
import bgSea from '@/assets/works/crossing-2020/2.jpg'
import bgVillage from '@/assets/works/village-2020/1.jpg'
import bgParting from '@/assets/works/parting-2021/1.jpg'
import MediumText from '@/components/typography/MediumText.vue'

const works = [
  {
    title: 'Parting',
    year: '2021',
    bg: bgParting,
    path: '/works/parting'
  },
  {
    title: 'Revolt',
    year: '2020',
    bg: bgRevolt,
    path: '/works/revolt'
  },
  {
    title: 'Hug',
    year: '2020',
    bg: bgHug,
    path: '/works/hug'
  },
  {
    title: 'Crossing',
    year: '2020',
    bg: bgSea,
    path: '/works/crossing'
  },
  {
    title: 'Village',
    year: '2020',
    bg: bgVillage,
    path: '/works/village'
  },
  {
    title: 'Borders',
    year: '2019',
    bg: bgBorders,
    path: '/works/borders'
  }
]
</script>

<template>
  <PageSection full>
    <div class="flex justify-between items-start gap-64 justify-between min-h-full">
      <div class="flex flex-col gap-4">
        <HugeText> Alesandra Hammad </HugeText>
        <MediumText>
          Showcasing my creative journey during my study from 2018 to 2022. This collection
          represents the culmination of my exploration, growth, and passion for art throughout these
          formative years. Each piece is a reflection of my unique perspective and personal
          experiences, expressed through various mediums and artistic styles. From bold brushstrokes
          to intricate sculptures, I invite you to delve into my world of creativity and witness the
          evolution of my artistic expression. Join me on this visual odyssey as we embark on a
          captivating artistic voyage together.
        </MediumText>
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
