<template>
  <div class="popup">
    <div class="popup_header">
      Детальная информация о регионе
      <span>
        <button class="clear_btn" @click.stop="closePopup">X</button>
      </span>
    </div>
    <div class="popup_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: [],
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  padding: 20px;
  position: fixed;
  left: 33%;
  top: 50px;

  width: 600px;
  height: 800px;
  background-color: rgb(248, 248, 248);
  box-shadow: 2px #e7e7e7;
  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
