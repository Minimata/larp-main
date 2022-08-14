<script setup lang="ts">
import {
  LightningBoltIcon,
  ScaleIcon,
  HomeIcon,
} from "@heroicons/vue/outline/index.js";

type Theme = "light" | "dark";

useColorMode().preference = "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};

const buttons = [
  {
    name: "Home",
    icon: HomeIcon,
    to: "/",
    divider: true,
  },
  {
    name: "Icon 1",
    icon: LightningBoltIcon,
    to: "/first",
  },
  {
    name: "Icon 2",
    icon: ScaleIcon,
    to: "/second",
  },
];
</script>

<template>
  <div class="fixed top-0 left-0 h-screen w-16 flex flex-col shadow-lg">
    <div>
      <ul>
        <div>
          <div v-for="button in buttons" :key="button.name">
            <li>
              <NuxtLink :to="button.to">
                <NavbarIcon
                  :name="button.name"
                  :icon="button.icon"
                  :divider="button.divider"
                />
              </NuxtLink>
            </li>
          </div>
        </div>
      </ul>
    </div>
    <div class="grow"></div>
    <!-- <div>
      <NavbarIcon
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
        :icon="$colorMode.preference == 'dark' ? SunIcon : MoonIcon"
      />
    </div> -->
  </div>
</template>
