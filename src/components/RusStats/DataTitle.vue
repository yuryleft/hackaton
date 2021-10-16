<template>
  <div class="title">
    <h2 class="title_header">{{ text }}</h2>
    <h4>Актуальная информация на {{ dataDate }}</h4>
  </div>
</template>

<script>
export default {
  name: "DataTitle",
  props: ["text", "dataDate"],
};
</script>

<style lang="scss" scoped>
.title_header {
  font-size: 40px;
  font-weight: bold;
}
</style>
