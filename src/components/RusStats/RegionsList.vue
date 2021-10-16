<template>
  <table class="region_container">
    <tr class="regions_title">
      <td class="region_title_name">Регион</td>
      <td class="region_title_infected">Случаи заражения</td>
      <td class="region_title_recovered">Выздоровело</td>
      <td class="region_title_deceased">Умерло</td>
    </tr>

    <tr
      class="region_item"
      @click="showPopup"
      v-for="region in regions"
      :key="region.isoCode"
    >
      <Popup v-if="popupVisible" @closePopup="closePopup">
        <div class="popup_container">
          <div class="region_item_namePop">Регион {{ region.region }}</div>
          <div class="region_item_infectedPop">
            Заражения {{ region.infected }}
          </div>
          <div class="region_item_recoveredPop">
            Выздоровело {{ region.recovered }}
          </div>
          <div class="region_item_deceasedPop">
            Умерло {{ region.deceased }}
          </div>
        </div>
      </Popup>

      <td class="region_item_name">{{ region.region }}</td>
      <td class="region_item_infected">{{ region.infected }}</td>
      <td class="region_item_recovered">{{ region.recovered }}</td>
      <td class="region_item_deceased">{{ region.deceased }}</td>
    </tr>
  </table>
</template>

<script>
import Popup from "@/components/Popup";
export default {
  name: "RegionList",
  components: { Popup },
  props: ["regions"],
  data() {
    return {
      selected: 0,
      popupVisible: false,
    };
  },
  methods: {
    showPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.region_container {
  width: 100%;
  flex-wrap: wrap;
  margin: 20px auto;
  box-shadow: 0px 2px 25px #c9c9c9;
  border-radius: 15px;

  background-color: rgb(250, 250, 250);
}
.popup_container {
  border: none;
  display: flex;
  flex-wrap: wrap;
}

.region_title {
  &_name {
    font-weight: 600;
    font-size: 23px;
  }
  &_infected {
    font-weight: 600;
    font-size: 23px;
  }
  &_recovered {
    font-weight: 600;
    font-size: 23px;
  }
  &_deceased {
    font-weight: 600;
    font-size: 23px;
  }
}
.region_item {
  border-radius: 35px;
  cursor: pointer;
  border: 1px solid #c9c9c9;

  :hover {
    background-color: rgb(255, 255, 255);
    border: 1px solid #5c5c5c;
  }
  &_namePop,
  &_infectedPop,
  &_recoveredPop,
  &_deceasedPop {
    margin: 10px;
    font-weight: 500;
    font-size: 20px;
  }
  &_namePop {
    width: 80%;
  }
}
table {
  text-align: start;
}
th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
  border-radius: 35px;
}
th {
  position: sticky;
  top: 0;
  background: #fff;
  vertical-align: bottom;
}
td {
  padding: 15px;
}
</style>
