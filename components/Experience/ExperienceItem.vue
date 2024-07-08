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
      <div class="py-2">
        <div
          v-for="description in experienceItem.description"
          :key="description"
          class="flex gap-2"
        >
          <div>-</div>
          <div>{{ description }}</div>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <slot name="skills">
          <SkillTag
            :skill="skill"
            :color="experienceItem.color"
            :key="skill"
            v-for="skill in experienceItem.technologies"
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
