<script setup lang="ts">
const client = useSupabaseClient()

const email = ref('')
const password = ref('')
const isSignUp = ref(false)

const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })
  console.log(user)
  console.log(error)
}
const login = async () => {
  const { user, error } = await client.auth.signIn({
    email: email.value,
    password: password.value,
  })
  console.log(user)
  console.log(error)
}
</script>

<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-col">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login</h1>
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
              <label v-if="!isSignUp" class="label">
                <a href="#" class="link link-hover label-text-alt"
                  >Forgot password?</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button
                class="btn btn-primary"
                @click="() => (isSignUp ? signUp() : login())"
              >
                <span v-if="isSignUp">Sign up</span>
                <span v-else>Login</span>
              </button>
            </div>
          </div>
        </div>
        <div class="badge badge-lg">OR</div>
        <button class="btn gap-2" @click="isSignUp = !isSignUp">
          <span v-if="isSignUp">Login instead</span>
          <span v-else>Sign up instead</span>
        </button>
      </div>
    </div>
  </div>
</template>
