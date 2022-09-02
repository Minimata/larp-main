<template>
  <div>
    <Navbar></Navbar>
    <Suspense>
      <ContentHolder>
        <slot />
      </ContentHolder>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>
