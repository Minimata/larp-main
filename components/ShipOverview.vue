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
import SummaryPanel from './SummaryPanel.vue'

// Server Side
const energyPercent = ref(50)
const foodPercent = ref(50)
const oxygenPercent = ref(50)
const energyGrowthPercent = ref(50)
const foodGrowthPercent = ref(50)
const oxygenGrowthPercent = ref(50)

useFetch('/api/ship').then((result) => {
  energyPercent.value = result.data.value.energy * 100
  foodPercent.value = result.data.value.food * 100
  oxygenPercent.value = result.data.value.oxygen * 100
  energyGrowthPercent.value = result.data.value.energyGrowth * 100
  foodGrowthPercent.value = result.data.value.foodGrowth * 100
  oxygenGrowthPercent.value = result.data.value.oxygenGrowth * 100
})

onMounted(() => {
  const { firestore } = useFirebase()
  const docRef = doc(firestore, 'ship', 'ship')
  onSnapshot(docRef, (snap) => {
    const { energy, food, oxygen, energyGrowth, foodGrowth, oxygenGrowth } =
      snap.data()!
    energyPercent.value = energy * 100
    foodPercent.value = food * 100
    oxygenPercent.value = oxygen * 100
    energyGrowthPercent.value = energyGrowth * 100
    foodGrowthPercent.value = foodGrowth * 100
    oxygenGrowthPercent.value = oxygenGrowth * 100
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
  <div class="w-full">
    <SummaryPanel title="Ship overview">
      <Percentage
        name="Energy"
        :growth="energyGrowthPercent"
        :percent="energyPercent"
        color="progress-info"
      ></Percentage>

      <Percentage
        name="Food"
        :growth="foodGrowthPercent"
        :percent="foodPercent"
        color="progress-accent"
      ></Percentage>

      <Percentage
        name="Oxygen"
        :growth="oxygenGrowthPercent"
        :percent="oxygenPercent"
        color="progress-primary"
      ></Percentage>
      <!-- <button @click="updateShip">Update</button> -->
    </SummaryPanel>

    <SummaryPanel title="Crew overview">
      <MemberSummary
        name="Member 1"
        :energy="1"
        :food="1"
        :oxygen="1"
        :radiation="1"
      >
      </MemberSummary>
    </SummaryPanel>
  </div>
</template>
