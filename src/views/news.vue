<template>
  <h2>Новости :</h2>
  <div class="news_container_main">
    <div class="news_container">
      <div class="news_items" v-for="post in posts" :key="post.id">
        <div class="news_title">{{ post.title }}</div>
        <div class="news_content">
          <div class="news_content_img">
            <img src="https://via.placeholder.com/350x150" />
          </div>
          <div class="news_content_text">{{ post.body }}</div>
        </div>
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
.news_title {
  font-weight: bold;
}
.news_container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
}
.news_container_main {
  background-color: #f3f3f3;
}
.news_items {
  width: 28%;
  margin: 15px;
  padding: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  box-shadow: 0px 2px 25px #c9c9c9;
}
</style>
