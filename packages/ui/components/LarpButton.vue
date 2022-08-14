<script setup lang="ts">
defineProps({
  disabled: Boolean,
});
</script>

<template>
  <div>
    <button :disabled="disabled"><slot /></button>
  </div>
</template>
