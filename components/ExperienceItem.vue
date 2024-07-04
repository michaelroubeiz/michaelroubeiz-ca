<template>
  <div name="experience-box" class="my-6 font-roboto-mono">
    <div name="experience-title-company-date" class="text-lg">
      {{ experience.title }}
      <span class="font-sans mr-2">@</span>
      <span :class="[`text-${experience.color}-400`]">{{
        experience.company
      }}</span>
      <div name="experience-date" class="text-sm">
        {{ experience.startDate }} - {{ experience.endDate }}
      </div>
    </div>

    <div class="ml-4">
      <div class="py-2">
        <div
          v-for="experience in experience.description"
          :key="experience"
          class="flex gap-2"
        >
          <div>-</div>
          <div>{{ experience }}</div>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <slot name="skills">
          <SkillTag
            :skill="skill"
            :color="experience.color"
            :key="skill"
            v-for="skill in experience.technologies"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SkillTag from "./SkillTag.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperienceItem",
  components: { SkillTag },
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
});
</script>
