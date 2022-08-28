<script setup lang="ts">
const client = useSupabaseClient()
// import { doc, getDoc } from 'firebase/firestore'

// const db = useFirestore()
// const firstDocumentRef = doc(db.value, 'firstCollection', 'firstDocument')
// const firstDoc = await getDoc(firstDocumentRef)
// console.log(firstDoc.data())
</script>

<template>
  <div>
    <progress
      class="progress progress-accent w-56"
      value="100"
      max="100"
    ></progress>
  </div>
</template>
