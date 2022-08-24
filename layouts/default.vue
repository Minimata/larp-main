<template>
  <div>
    <div class="flex"><Navbar></Navbar></div>
    <Suspense>
      <div class="pl-16">
        <slot />
      </div>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>
