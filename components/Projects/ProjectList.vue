<template>
  <div class="my-6 font-open-sans">
    <div v-for="year in sortedYears" :key="year">
      <div class="font-roboto-mono text-lg font-bold mb-2">{{ year }}</div>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mb-4">
        <slot :project-list="groupedProjects[year]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Project } from "~/types/Project";

export default defineComponent({
  name: "ProjectList",
  props: {
    projectList: {
      type: Array as PropType<Project[]>,
      required: true,
    },
  },
  computed: {
    groupedProjects() {
      return this.projectList.reduce(
        (grouped, project) => {
          const year = project.year.toString();
          if (!grouped[year]) {
            grouped[year] = [];
          }
          grouped[year].push(project);
          return grouped;
        },
        {} as Record<string, Project[]>
      );
    },
    sortedYears() {
      return Object.keys(this.groupedProjects).sort().reverse();
    },
  },
});
</script>
