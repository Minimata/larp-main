<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref()
const password = ref()

const register = () => {
  console.log('coucou')
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log(data)
      const router = useRouter()
      router.push({ path: '/feed' })
    })
    .catch((error) => {
      console.log(error)
    })
}

const signUpGoogle = () => {}
</script>

<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-col">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Sign up</h1>
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
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" @click="register">
                Register
              </button>
            </div>
          </div>
        </div>
        <div class="badge badge-lg">OR</div>
        <button class="btn gap-2" @click="signUpGoogle">
          Sign up with Google
        </button>
      </div>
    </div>
  </div>
</template>
