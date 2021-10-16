<template>
  <div class="about_main">
    <div class="about_container">
      <div class="about" v-if="!loading">
        <DataTitle :text="title" />
        <DataBox :stats="stats" />

        <CountryList
          class="list_btn"
          @getCountry="getCountryData"
          :countries="countries"
        />

        <div class="clear_btn_container">
          <button
            class="clear_btn"
            @click.stop="clearCountry"
            v-if="stats.country"
          >
            Очистить
          </button>
        </div>
        <button class="clear_btn" @click.stop="showTf">За всё время</button>
        <button class="clear_btn" @click.stop="show30f">За месяц</button>
        <button class="clear_btn" @click.stop="show7f">За 7 дней</button>
        <div class="charts" v-show="showT">
          <line-chart
            class="chart"
            :data="this.historyStats.cases"
            :colors="['#0098df']"
            xtitle="Дата"
            ytitle="Случаи Заражения"
            :dataset="{ borderWidth: 10 }"
            :min="null"
            width="80%"
            height="500px"
          />

          <line-chart
            class="chart"
            :data="this.historyStats.deaths"
            :colors="['#c52828']"
            xtitle="Дата"
            ytitle="Смерти"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />

          <line-chart
            class="chart"
            :data="this.historyStats.recovered"
            :colors="['#2dc98d']"
            xtitle="Дата"
            ytitle="Выздоровление"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />
        </div>
        <div class="charts" v-show="show30">
          <line-chart
            class="chart"
            :data="this.historyStats30.cases"
            :colors="['#0098df']"
            xtitle="Дата"
            ytitle="Случаи Заражения"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />

          <line-chart
            class="chart"
            :data="this.historyStats30.deaths"
            :colors="['#c52828']"
            xtitle="Дата"
            ytitle="Смерти"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />

          <line-chart
            class="chart"
            :data="this.historyStats30.recovered"
            :colors="['#2dc98d']"
            xtitle="Дата"
            ytitle="Выздоровление"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />
        </div>
        <div class="charts" v-show="show7">
          <line-chart
            class="chart"
            :data="this.historyStats7.cases"
            :colors="['#0098df']"
            xtitle="Дата"
            ytitle="Случаи Заражения"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />

          <line-chart
            class="chart"
            :data="this.historyStats7.deaths"
            :colors="['#c52828']"
            xtitle="Дата"
            ytitle="Смерти"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />

          <line-chart
            class="chart"
            :data="this.historyStats7.recovered"
            :colors="['#2dc98d']"
            xtitle="Дата"
            ytitle="Выздоровление"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />
        </div>
      </div>
      <div class="loading_about" v-else>
        <img :src="loadingPicture" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import DataTitle from "@/components/WorldStats/DataTitle";
import DataBox from "@/components/WorldStats/DataBox";
import CountryList from "@/components/WorldStats/CountryList";

export default {
  name: "World",
  components: {
    DataTitle,
    DataBox,
    CountryList,
  },
  data() {
    return {
      loading: true,
      showT: false,
      show30: false,
      show7: false,
      title: "Мировая статистика",
      dataDate: "",
      stats: "",
      historyStats: "",
      historyStats7: "",
      historyStats30: "",
      countries: [],
      loadingPicture: require("../assets/loading.gif"),
      showCountries: 0,
      chartData: "",
    };
  },
  methods: {
    showTf() {
      this.show30 = false;
      this.show7 = false;
      this.showT = !this.showT;
    },
    show30f() {
      this.showT = false;
      this.show7 = false;
      this.show30 = !this.show30;
    },
    show7f() {
      this.show30 = false;
      this.showT = false;
      this.show7 = !this.show7;
    },
    async getInfoAPIWorld() {
      const res = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await res.json();
      return data;
    },
    async getInfoAPI() {
      const res = await fetch("https://disease.sh/v3/covid-19/countries");
      const dataReg = await res.json();
      return dataReg;
    },
    async getHistoryInfo30() {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
      );
      const dataHistory30 = await res.json();
      return dataHistory30;
    },
    async getHistoryInfo7() {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=7"
      );
      const dataHistory7 = await res.json();
      return dataHistory7;
    },
    async getHistoryInfo() {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const dataHistory = await res.json();
      return dataHistory;
    },
    getCountryData(country) {
      this.stats = country;
      this.title = this.stats.country;
    },
    async clearCountry() {
      this.loading = true;
      const data = await this.getInfoAPIWorld();
      this.title = "Мировая";
      this.stats = data;
      this.loading = false;
    },
  },
  async created() {
    const dataReg = await this.getInfoAPI();
    const data = await this.getInfoAPIWorld();
    const dataHistory = await this.getHistoryInfo();
    const dataHistory7 = await this.getHistoryInfo7();
    const dataHistory30 = await this.getHistoryInfo30();

    this.stats = data;
    this.historyStats = dataHistory;
    this.historyStats7 = dataHistory7;
    this.historyStats30 = dataHistory30;
    this.countries = dataReg;
    this.loading = false;
    this.updateVisuals();
  },
};
</script>

<style lang="scss">
.about_container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
}
.about_main {
  background-color: #f3f3f3;
}
.about {
  width: 100%;
}
.loading_about {
  width: 100%;
}
.btn_container {
}
.clear_btn {
  border-radius: 20px;
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 25px #c9c9c9;
  border: 1px solid #0098df;
  font-size: 20px;
  padding: 15px;
  cursor: pointer;
  margin: 0 5px;
}

.clear_btn_container {
  height: 40px;
  margin-bottom: 40px;
}
.list_btn {
  border-radius: 20px;
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 25px #c9c9c9;
  border: 1px solid #0098df;
  font-size: 20px;
  width: 20%;
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;

  :active {
    border: 5px solid #0098df;
  }
}
.charts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
