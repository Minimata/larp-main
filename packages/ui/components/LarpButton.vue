<script setup lang="ts">
defineProps({
  disabled: Boolean,
});
</script>

<template>
  <div>
    <button :disabled="disabled">COUCOU</button>
  </div>
</template>
