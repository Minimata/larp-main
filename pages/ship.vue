<script setup lang="ts">
const { data: ship } = await useFetch('/api/ship', {
  key: 'global ship data',
  headers: useRequestHeaders(['cookie']),
})

const energyPercent = ref(ship.value!.energy * 100)
</script>

<template>
  <div>
    <div>{{ energyPercent }}</div>
    <div class="flex flex-row justify-center">
      <div class="flex h-24 flex-col justify-center">
        <progress
          class="progress progress-accent w-56"
          :value="energyPercent"
          max="100"
        ></progress>
        <progress
          class="progress progress-primary w-56"
          value="100"
          max="100"
        ></progress>
        <progress
          class="progress progress-secondary w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    </div>
  </div>
</template>
