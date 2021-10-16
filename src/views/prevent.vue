<template>
  <div class="prevent_container_main">
    <div class="prevent_container">
      <div class="prevent_item" v-for="post in posts" :key="post.id">
        <div class="prevent_item_title">{{ post.id }}</div>
        <div class="prevent_item_content">{{ post.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      posts: {},
    };
  },
  methods: {
    async getPosts() {
      const res = await fetch("http://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      return data;
    },
  },
  async created() {
    const data = await this.getPosts();
    this.posts = data;
  },
};
</script>
<style lang="scss" scoped>
.prevent_item {
  margin: 20px auto;
  padding: 10px;
  width: 50%;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  box-shadow: 0px 2px 25px #c9c9c9;
}
.prevent_container_main {
  background-color: #f3f3f3;
}
.prevent_container_ {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
}
.prevent_item_title {
  font-size: 30px;
  font-weight: bold;
  margin: 15px;
}
.prevent_item_content {
  font-size: 25px;
}
</style>
