<script setup lang="ts">
import { useQuery, gql } from "@urql/vue";

const { time } = defineProps({
  time: {
    type: Number,
    required: true,
  },
});

// Add in a delay to simulate loading data
await new Promise((resolve: any) => {
  setTimeout(() => {
    resolve();
  }, time);
});

const from = ref(0);
const GetArticles = gql`
  query ($offset: Int!, $limit: Int!) {
    _helloworld_article(offset: $offset, limit: $limit) {
      title
      id
    }
  }
`;

const { data, fetching, error } = await useQuery({
  query: GetArticles,
  variables: { offset: from, limit: 2 },
});

if (error.value) {
  console.log(error);
}

const onClick = () => {
  from.value += 1;
};

// watch([data, fetching, error], () => {
//   if (data.value) {
//     const articles = data.value._helloworld_article;
//     articles.forEach((article: { title: string; author: any }) => {
//       console.log(article.title);
//     });
//   }
// });
</script>

<template>
  <div>
    <ul>
      <div>
        <div v-for="article in data._helloworld_article" :key="article.id">
          <li>{{ article.title }}</li>
        </div>

        <button @click="onClick">Next Page</button>
      </div>
    </ul>
  </div>
</template>
