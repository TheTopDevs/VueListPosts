<template>
  <div class="posts-item">
    <VOverlay v-if="_fetchingPostStatus === requestStatus.PENDING">
      <VLoader/>
    </VOverlay>
    <div class="mb-2 d-flex align-items-center">
      <button
          @click="$router.push(`/`)"
          class="posts-item__btn cursor-pointer"
      >
        <img src="@/assets/img/icon-pag-prev.svg" alt=""/>
      </button>
    </div>
    <div class="posts-item__content p-1 mb-3">
      <h2 class="posts__title mb-2">Post: {{ _post.id }}</h2>
      <div class="posts-item__title text-lg mb-2">{{ _post.title }}</div>
      <div class="posts-item__body text-md"> {{ _post.body }}</div>
    </div>
  </div>
</template>

<script>
import {requestStatus} from '@/utils/constants';

export default {
  name: "PostItem",
  data() {
    return {
      requestStatus,
    }
  },

  created() {
    this.getPost(this.$route.params.id)
  },

  computed: {
    _post() {
      return this.$store.state.posts.post
    },
    _fetchingPostStatus() {
      return this.$store.state.posts.fetchingPostStatus;
    },
  },
  methods: {
    async getPost(id) {
      await this.$store.dispatch('posts/getPost', id)
    },
  }
}
</script>

<style lang="scss" scoped>

.posts-item {
  width: 50%;

  &__content {
    border: 1px solid var(--blue-lighten-5);
    border-radius: 8px;
  }

  &__title {
    padding-bottom: 8px;
    border-bottom: 1px solid var(--blue-lighten-5);
    color: var(--grey-darken-5);
  }
  &__btn {
    min-height: 36px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: var(--blue-lighten-5);
    border: 2px solid var(--blue-lighten-5);

    &:hover {
      border: 2px solid  var(--grey-darken-5);
      color: var(--grey-darken-5);
    }
  }
}
</style>