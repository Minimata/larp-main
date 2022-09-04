<script setup lang="ts">
import {
  ArrowRightIcon,
  AdjustmentsVerticalIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  Bars2Icon,
} from '@heroicons/vue/20/solid/index.js'

import { doc, onSnapshot, getDoc, updateDoc } from 'firebase/firestore'

// Server Side
const energyPercent = ref(50)
const foodPercent = ref(50)
const oxygenPercent = ref(50)

useFetch('/api/ship').then((result) => {
  energyPercent.value = result.data.value.energy * 100
  foodPercent.value = result.data.value.food * 100
  oxygenPercent.value = result.data.value.oxygen * 100
})

onMounted(() => {
  const { firestore } = useFirebase()
  const docRef = doc(firestore, 'ship', 'ship')
  onSnapshot(docRef, (snap) => {
    const { energy, food, oxygen } = snap.data()!
    energyPercent.value = energy * 100
    foodPercent.value = food * 100
    oxygenPercent.value = oxygen * 100
  })
})

const updateShip = async () => {
  const { firestore } = useFirebase()
  const docRef = doc(firestore, 'ship', 'ship')
  await updateDoc(docRef, {
    age: Math.floor(Math.random() * 1000),
  })
}
</script>

<template>
  <div
    class="flex w-full flex-col items-center space-x-4 rounded-xl p-6 shadow-lg"
  >
    <div class="flex w-full flex-row items-center">
      <div class="text-2xl font-bold">Ship overview</div>
      <div class="grow"></div>
      <button class="btn btn-circle btn-outline h-12 w-12">
        <component :is="ArrowRightIcon" aria-hidden="true" />
      </button>
    </div>

    <div class="flex w-full flex-row items-center space-x-4">
      <div class="w-24 text-xl">Energy</div>
      <progress
        class="progress progress-info grow"
        :value="energyPercent"
        max="100"
      ></progress>
      <div>
        <div class="stat w-40">
          <div class="stat-figure text-secondary">
            <component
              :is="AdjustmentsVerticalIcon"
              class="h-5 w-5"
              aria-hidden="true"
            ></component>
          </div>
          <div class="stat-value font-mono text-warning">-23%</div>
          <div class="stat-desc m-auto text-warning">
            <component
              :is="ArrowTrendingDownIcon"
              class="h-5 w-5"
              aria-hidden="true"
            ></component>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-row items-center space-x-4">
      <div class="w-24 text-xl">Food</div>
      <progress
        class="progress progress-accent grow"
        :value="foodPercent"
        max="100"
      ></progress>
      <div>
        <div class="stat w-40">
          <div class="stat-figure text-secondary">
            <component
              :is="AdjustmentsVerticalIcon"
              class="h-5 w-5"
              aria-hidden="true"
            ></component>
          </div>
          <div class="stat-value font-mono text-success">3%</div>
          <div class="stat-desc m-auto text-success">
            <component
              :is="ArrowTrendingUpIcon"
              class="h-5 w-5"
              aria-hidden="true"
            ></component>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-row items-center space-x-4">
      <div class="w-24 text-xl">Oxygen</div>
      <progress
        class="progress progress-primary grow"
        :value="oxygenPercent"
        max="100"
      ></progress>
      <div>
        <div class="stat w-40">
          <div class="stat-figure text-secondary">
            <component
              :is="AdjustmentsVerticalIcon"
              class="h-5 w-5"
              aria-hidden="true"
            ></component>
          </div>
          <div class="stat-value font-mono">0%</div>
          <div class="stat-desc m-auto">
            <component
              :is="Bars2Icon"
              class="h-5 w-5"
              aria-hidden="true"
            ></component>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="updateShip">Update</button> -->
    <slot />
  </div>
</template>
