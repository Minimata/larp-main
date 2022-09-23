<script setup lang="ts">
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  Bars2Icon,
  AdjustmentsVerticalIcon,
} from '@heroicons/vue/20/solid/index.js'

const props = defineProps<{
  name: string
  percent: number
  growth: number
  color: string
}>()

const className: string = 'progress grow ' + props.color

interface IGrowthUtils {
  color: string
  icon: any
}
const signToGrowthMap = new Map<number, IGrowthUtils>([
  [1, { color: 'text-success', icon: ArrowTrendingUpIcon }],
  [0, { color: '', icon: Bars2Icon }],
  [-1, { color: 'text-warning', icon: ArrowTrendingDownIcon }],
])

const growthInfo = signToGrowthMap.get(Math.sign(props.growth))
const growthColor = growthInfo?.color
const growthClassName = 'stat-value m-auto font-mono ' + growthColor
const growthIconClassName = 'stat-desc m-auto ' + growthColor
const growthIcon = growthInfo?.icon
</script>

<template>
  <div class="flex w-full flex-row items-center space-x-4">
    <div class="w-24 text-xl">{{ name }}</div>
    <progress :class="className" :value="percent" max="100"></progress>
    <div>
      <div class="stat w-40">
        <div class="stat-figure text-secondary">
          <component
            :is="AdjustmentsVerticalIcon"
            class="h-5 w-5"
            aria-hidden="true"
          ></component>
        </div>
        <div :class="growthClassName">{{ growth }}</div>
        <div :class="growthIconClassName">
          <component
            :is="growthIcon"
            class="h-5 w-5"
            aria-hidden="true"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>
