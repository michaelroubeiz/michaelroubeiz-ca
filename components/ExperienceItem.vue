<template>
  <div name="experience-box" class="my-6 font-roboto-mono">
    <div name="experience-title-company">
      {{ experience.title }} @
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

    <div name="experience-technologies">
      {{ experience.technologies }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceItem",
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>
