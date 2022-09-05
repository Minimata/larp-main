<script setup lang="ts">
import {
  ArrowRightIcon,
  AdjustmentsVerticalIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  Bars2Icon,
} from '@heroicons/vue/20/solid/index.js'

import { doc, onSnapshot, getDoc, updateDoc } from 'firebase/firestore'
import Percentage from './Percentage.vue'

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
      <button class="btn btn-outline btn-circle h-12 w-12">
        <component :is="ArrowRightIcon" aria-hidden="true" />
      </button>
    </div>

    <Percentage
      name="Energy"
      :growth="23"
      :percent="energyPercent"
      color="progress-info"
    ></Percentage>

    <Percentage
      name="Food"
      :growth="0"
      :percent="foodPercent"
      color="progress-accent"
    ></Percentage>

    <Percentage
      name="Oxygen"
      :growth="-5"
      :percent="oxygenPercent"
      color="progress-primary"
    ></Percentage>
    <!-- <button @click="updateShip">Update</button> -->
    <slot />
  </div>
</template>
