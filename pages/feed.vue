<script setup lang="ts">
import { doc, getDoc } from 'firebase/firestore'
import { db } from '~~/firebase'

const firstDocumentRef = doc(db, 'firstCollection', 'firstDocument')
const firstDoc = await getDoc(firstDocumentRef)
console.log(firstDoc.data())
</script>

<template>
  <div>
    <h1>Count is 1</h1>
  </div>
</template>
