<template>
  <div class="link">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="syringe"
      class="icon"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M504.1 71.03l-64-64c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L422.1 56L384 94.06l-55.03-55.03c-9.375-9.375-24.56-9.375-33.94 0c-8.467 8.467-8.873 21.47-2.047 30.86l149.1 149.1C446.3 222.1 451.1 224 456 224c6.141 0 12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L417.9 128L456 89.94l15.03 15.03C475.7 109.7 481.9 112 488 112s12.28-2.344 16.97-7.031C514.3 95.59 514.3 80.41 504.1 71.03zM208.8 154.1l58.56 58.56c6.25 6.25 6.25 16.38 0 22.62C264.2 238.4 260.1 240 256 240S247.8 238.4 244.7 235.3L186.1 176.8L144.8 218.1l58.56 58.56c6.25 6.25 6.25 16.38 0 22.62C200.2 302.4 196.1 304 192 304S183.8 302.4 180.7 299.3L122.1 240.8L82.75 280.1C70.74 292.1 64 308.4 64 325.4v88.68l-56.97 56.97c-9.375 9.375-9.375 24.56 0 33.94C11.72 509.7 17.86 512 24 512s12.28-2.344 16.97-7.031L97.94 448h88.69c16.97 0 33.25-6.744 45.26-18.75l187.6-187.6l-149.1-149.1L208.8 154.1z"
      ></path>
    </svg>
    <a
      class="dg-widget-link"
      href="https://www.google.ru/maps/search/%D0%B2%D0%B0%D0%BA%D1%86%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F+%D1%80%D1%8F%D0%B4%D0%BE%D0%BC/@57.1379314,65.5008301,11.67z"
      >Посмотреть на карте Центры Вакцинации</a
    >
  </div>
</template>

<script>
export default {
  name: "Vaccine",
  components: {},
};
</script>
<style lang="scss" scoped>
.link {
  font-size: 50px;
  text-decoration: none;
  padding: 30px;
  padding-bottom: 70px;
  margin: 15%;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  box-shadow: 0px 2px 25px #c9c9c9;
  :visited {
    color: rgb(58, 58, 58);
  }
  :hover {
    color: #0098df;
  }
}
.icon {
  margin: 30px;
  width: 40px;
  height: 40px;
  color: #0098df;
}
</style>
