import { firestore } from '../utils/firebase'

export default defineEventHandler(async (event) => {
  const ref = firestore.doc(`ship/ship`)
  const snapshot = await ref.get()
  const data = snapshot.data()
  return data
})
