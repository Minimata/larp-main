<script setup lang="ts">
import { doc, onSnapshot, getDoc, updateDoc } from 'firebase/firestore'
import ShipOverview from '~~/components/ShipOverview.vue'

// Server Side
const { data: serverData } = useFetch('/api/ship')

// Client Side
const clientData = ref({})

onMounted(() => {
  const { firestore } = useFirebase()
  const docRef = doc(firestore, 'ship', 'ship')
  onSnapshot(docRef, (snap) => {
    clientData.value = snap.data()!
    // serverData.value = snap.data();
  })
})

const updateShip = async () => {
  const { firestore } = useFirebase()
  const docRef = doc(firestore, 'ship', 'ship')
  await updateDoc(docRef, {
    age: Math.floor(Math.random() * 1000),
  })
}
</script>

<template>
  <div class="flex">
    <ShipOverview>
      <h2>Server</h2>
      <pre>{{ serverData }}</pre>
      <h2>Client</h2>
      <pre>{{ clientData }}</pre>
      <button @click="updateShip">Update</button>
    </ShipOverview>
  </div>
</template>
