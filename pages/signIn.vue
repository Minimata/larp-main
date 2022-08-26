<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref()
const password = ref()

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log(data)
      const router = useRouter()
      router.push({ path: '/feed' })
    })
    .catch((error) => {
      const errorMessages: { [key: string]: any } = {
        'auth/invalid-email': 'Invalid email',
        'auth/user-not-found': 'No user with that email was found',
        'auth/wrong-password': 'Incorrect password',
        'auth/user-disabled': 'Your account was disabled',
      }
      const errorMsg =
        errorMessages[error.code] ?? 'Email or password was incorrect'
      console.log(error)
    })
}

const signInGoogle = () => {}
</script>

<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-col">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login</h1>
          <!-- <p class="py-6">For an insane LARP experience</p> -->
        </div>
        <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                v-model="email"
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                v-model="password"
                type="password"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="link link-hover label-text-alt"
                  >Forgot password?</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" @click="login">Login</button>
            </div>
          </div>
        </div>
        <div class="badge badge-lg">OR</div>
        <button class="btn gap-2" @click="signInGoogle">
          Login with Google
        </button>
      </div>
    </div>
  </div>
</template>
