<template>
  <div>
    <Suspense>
      <BasicInput title="Welcome">
        <Asynchronous :time="0"> </Asynchronous>
      </BasicInput>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>
