<template>
  <div :class="wrapperClass">
    <div class="flex flex-wrap gap-2 md:gap-6">
      <button
        v-for="experienceItem in sortedExperience"
        :key="experienceItem.id"
        :class="buttonClass(experienceItem)"
        @click="setActiveTab(experienceItem.id)"
      >
        {{ experienceItem.company }}
      </button>
    </div>
    <div>
      <div
        v-for="experienceItem in sortedExperience"
        v-show="activeTab === experienceItem.id"
        :key="experienceItem.id"
      >
        <ExperienceItem :experience-item="experienceItem" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from "vue";
import type { Experience } from "~/types/Experience";

export default defineComponent({
  name: "ExperienceList",
  props: {
    experienceList: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
  },
  setup(props) {
    const sortedExperience = computed(() => {
      return [...props.experienceList].sort(
        (a: Experience, b: Experience) =>
          new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
      );
    });

    const activeTab = ref(sortedExperience.value[0].id);

    const setActiveTab = (id: number) => {
      activeTab.value = id;
    };

    const wrapperClass = computed(
      () =>
        "mt-8 border-blue-900/50 hover:border-blue-900 border-2 rounded-lg p-6 hover:-translate-y-1 transition ease-out delay-150 h-full"
    );

    const buttonClass = (experienceItem: Experience) => [
      `text-${experienceItem.color}-400 text-lg`,
      { "underline underline-offset-4": activeTab.value === experienceItem.id },
    ];

    return {
      activeTab,
      buttonClass,
      setActiveTab,
      sortedExperience,
      wrapperClass,
    };
  },
});
</script>
