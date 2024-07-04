<template>
  <div name="experience-box" class="my-6 font-roboto-mono">
    <div name="experience-title-company">
      {{ experience.title }}
      <span class="font-sans mr-2">@</span>
      <span :class="'text-' + experience.color + '-400'">{{
        experience.company
      }}</span>
    </div>
    <div name="experience-image">{{ experience.image }}</div>
    <div name="experience-date">
      {{ experience.startDate }} - {{ experience.endDate }}
    </div>

    <div
      v-for="experience in experience.description"
      :key="experience"
      class="pl-4"
    >
      - {{ experience }}
    </div>

    <div class="flex flex-wrap gap-2 mt-2">
      <SkillTag
        :skill="skill"
        :color="experience.color"
        :key="skill"
        v-for="(skill, index) in experience.technologies"
      />
    </div>
  </div>
</template>

<script>
import SkillTag from "./SkillTag.vue";

export default {
  name: "ExperienceItem",
  components: { SkillTag },
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>
