<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/20/solid/index.js'

const props = defineProps<{
  name: string
  food: number
  energy: number
  oxygen: number
  radiation: number
}>()
const foodPercent = props.food * 100
const energyPercent = props.energy * 100
const oxygenPercent = props.oxygen * 100
const radiationPercent = props.radiation * 100
</script>

<template>
  <div class="flex w-full flex-row">
    <div class="flex w-fit flex-col items-center">
      <component :is="UserCircleIcon" aria-hidden="true" class="w-10" />
      <div>{{ name }}</div>
    </div>
    <div class="flex grow flex-col justify-between p-2">
      <progress
        class="progress progress-info w-full"
        :value="energyPercent"
        max="100"
      ></progress>
      <progress
        class="progress progress-info w-full"
        :value="foodPercent"
        max="100"
      ></progress>
      <progress
        class="progress progress-info w-full"
        :value="oxygenPercent"
        max="100"
      ></progress>
      <progress
        class="progress progress-info w-full"
        :value="radiationPercent"
        max="100"
      ></progress>
    </div>
  </div>
</template>
