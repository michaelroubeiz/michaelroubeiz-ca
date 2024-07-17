<template>
  <div
    class="border-blue-900/50 hover:border-blue-900 border-2 rounded-lg p-6 hover:-translate-y-1 transition ease-out delay-150 h-full"
  >
    <div class="grid grid-flow-col mb-2">
      <div class="max-w-min whitespace-nowrap font-roboto-mono">
        <template v-if="projectItem.projectLinkActive">
          <ULink
            :to="projectItem.projectLink"
            target="_blank"
            class="hover:text-blue-700 hover:underline underline-offset-4"
            :aria-label="projectItem.title"
          >
            {{ projectItem.title }}
          </ULink>
        </template>
        <template v-else>
          {{ projectItem.title }}
        </template>
      </div>
      <ULink
        v-if="projectItem.publicGithubLink"
        :to="projectItem.githubLink"
        :aria-label="projectItem.githubLink"
        class="ml-auto hover:text-blue-700 rounded-full"
        target="_blank"
      >
        <UTooltip text="github" :popper="{ placement: 'right' }">
          <UIcon name="mdi:github" width="24" height="24" dynamic />
        </UTooltip>
      </ULink>
    </div>
    <div class="text-xs text-gray-300 mb-6">{{ projectItem.description }}</div>
    <div class="flex flex-wrap gap-2 mt-2">
      <div
        v-for="item in projectItem.technologies"
        :key="item"
        class="text-xs text-gray-400"
        v-text="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Project } from "../../types/Project";

export default defineComponent({
  name: "ProjectItem",
  props: {
    projectItem: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
});
</script>
