<template>
  <select @change="changeCountry" v-model="selected">
    <option value="0">Выбрать страну</option>
    <option v-for="country in countries" :key="country.country">
      {{ country.country }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CountryList",
  props: ["countries"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    changeCountry() {
      const country = this.countries.find(
        (item) => item.country === this.selected
      );
      this.$emit("getCountry", country);
    },
  },
};
</script>

<style></style>
