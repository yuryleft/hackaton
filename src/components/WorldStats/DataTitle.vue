<template>
  <div class="title">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "DataTitle",
  props: ["text"],
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  font-weight: bold;
}
</style>
