<template>
  <div class="my-6 font-open-sans">
    <div class="text-lg">
      {{ experienceItem.title }}
      <span class="font-sans mr-1">@</span>
      <span :class="[`text-${experienceItem.color}-400`]">{{
        experienceItem.company
      }}</span>
      <div class="text-sm">
        {{ experienceItem.startDate }} - {{ experienceItem.endDate }}
      </div>
    </div>

    <div class="ml-4">
      <div class="my-2 space-y-2">
        <ul
          v-for="description in experienceItem.description"
          :key="description"
          class="flex list-disc"
        >
          <li>{{ description }}</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-2">
        <slot name="skills">
          <SkillTag
            v-for="skill in experienceItem.technologies"
            :key="skill"
            :skill="skill"
            :color="experienceItem.color"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SkillTag from "~/components/SkillTag.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperienceItem",
  components: { SkillTag },
  props: {
    experienceItem: {
      type: Object,
      required: true,
    },
  },
});
</script>
