<template>
  <div>
    <Suspense>
      <WelcomeComponent></WelcomeComponent>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>
