<script setup lang="ts">
defineProps<{
  name?: string;
  icon: any;
  divider?: boolean;
}>();
</script>

<template>
  <div class="sidebar-icon group">
    <component :is="icon" aria-hidden="true" />
    <span
      v-if="name != undefined"
      class="sidebar-tooltip group-hover:scale-100"
      >{{ name }}</span
    >
  </div>
  <div v-if="divider" class="divider"></div>
</template>
