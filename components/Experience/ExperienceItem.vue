<template>
  <div class="mt-6 mb-4 font-open-sans">
    <div>
      <div class="text-lg mb-2 md:mb-0">
        {{ experienceItem.title }}
        <span class="font-sans mr-1">@</span>
        <span :class="[`text-${experienceItem.color}-400`]">{{
          experienceItem.company
        }}</span>
      </div>
      <div class="text-sm">
        {{ experienceItem.startDate }} - {{ experienceItem.endDate }}
      </div>
    </div>

    <div class="ml-4 my-2">
      <ul v-if="experienceItem.description" class="list-disc space-y-2">
        <li
          v-for="description in experienceItem.description"
          :key="description"
        >
          {{ description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Experience } from "~/types/Experience";

export default defineComponent({
  name: "ExperienceItem",
  props: {
    experienceItem: {
      type: Object as PropType<Experience>,
      required: true,
    },
  },
});
</script>
