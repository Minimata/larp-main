<script setup lang="ts">
import { createClient, provideClient } from "@urql/vue";
import { NhostClient } from "@nhost/vue";

const config = useRuntimeConfig();
const nhost = new NhostClient({
  subdomain: config.nhostSubdomain,
  region: config.nhostRegion,
});

await nhost.auth.signIn({
  email: "minimata94@gmail.com",
  password: "12340987",
});

const client = createClient({
  url: nhost.graphql.getUrl(),
  fetchOptions: () => {
    const token = nhost.auth.getAccessToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" },
    };
  },
});

provideClient(client);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
