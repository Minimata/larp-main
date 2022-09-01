import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBVYE4qDEDhfYYK1AKAVH9sSLm7hISL7sE',
    authDomain: 'larp-sf.firebaseapp.com',
    projectId: 'larp-sf',
    storageBucket: 'larp-sf.appspot.com',
    messagingSenderId: '49391230784',
    appId: '1:49391230784:web:79e0fa41349bba11d624a5',
    measurementId: 'G-R42SPRVWZW',
  }

  const firebaseApp = initializeApp(firebaseConfig)
  const firestore = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  return {
    firebaseApp,
    firestore,
    auth,
  }
}
