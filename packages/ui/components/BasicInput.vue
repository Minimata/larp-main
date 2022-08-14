<script setup lang="ts">
import { useQuery, gql, useMutation } from "@urql/vue";

const articleTitle = ref("");

const updateArticlesQuery = gql`
  mutation ($title: String!) {
    insert__helloworld_article_one(object: { title: $title, author_id: 1 }) {
      title
    }
  }
`;
const { executeMutation: updateArticles } = useMutation(updateArticlesQuery);

const uploadArticle = async () => {
  if (articleTitle.value == "") {
    return;
  }

  const variables = { title: articleTitle.value };
  const { data, error } = await updateArticles(variables);
  if (data) {
    console.log(data.value);
  }
  if (error) {
    console.log(error);
  }
};

defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="flex flex-col max-w-lg h-screen items-center justify-center">
        <h1 class="text-5xl font-bold py-5">
          <span>{{ title }}</span>
        </h1>
        <div class="form-control py-5">
          <div class="input-group">
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered"
              v-model="articleTitle"
            />
            <button class="btn btn-primary btn-square" @click="uploadArticle">
              Go
            </button>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
