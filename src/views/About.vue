<template>
  <div class="about_main">
    <div class="about_container">
      <div class="about" v-if="!loading">
        <DataTitle :text="title" :dataDate="dataDate" />
        <DataBox :stats="statsW" />
        <button class="clear_btn" @click.stop="showTf">За всё время</button>
        <button class="clear_btn" @click.stop="show30f">За месяц</button>
        <button class="clear_btn" @click.stop="show7f">За 7 дней</button>
        <div class="charts" v-show="showT">
          <line-chart
            class="chart"
            :data="this.statsHT.cases"
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
            :data="this.statsHT.deaths"
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
            :data="this.statsHT.recovered"
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
            :data="this.statsH30.cases"
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
            :data="this.statsH30.deaths"
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
            :data="this.statsH30.recovered"
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
            :data="this.statsH7.cases"
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
            :data="this.statsH7.deaths"
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
            :data="this.statsH7.recovered"
            :colors="['#2dc98d']"
            xtitle="Дата"
            ytitle="Выздоровление"
            :dataset="{ borderWidth: 10 }"
            width="80%"
            :min="null"
            height="500px"
          />
        </div>
        <RegionsList :regions="regions" />
      </div>
      <div class="loading_about" v-else>
        <img :src="loadingPicture" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import DataTitle from "@/components/RusStats/DataTitle";
import DataBox from "@/components/RusStats/DataBox";
import RegionsList from "@/components/RusStats/RegionsList";
import moment from "moment";
export default {
  name: "World",
  components: {
    DataTitle,
    DataBox,
    RegionsList,
  },
  data() {
    return {
      loading: true,
      title: "Cтатистика Россия",
      dataDate: "",
      stats: "",
      statsW: "",
      statsHT: "",
      statsH30: "",
      statsH7: "",
      showT: false,
      show30: false,
      show7: false,

      regions: [],
      loadingPicture: require("../assets/loading.gif"),
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
    async getInfoAPI() {
      const res = await fetch(
        "https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true"
      );
      const data = await res.json();

      return data;
    },
    async getInfoAPIW() {
      const resw = await fetch(
        "https://disease.sh/v3/covid-19/countries/russia"
      );
      const dataW = await resw.json();

      return dataW;
    },
    async getHistoryInfo30() {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/historical/russia?lastdays=30"
      );
      const data30 = await res.json();
      return data30;
    },
    async getHistoryInfo7() {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/historical/russia?lastdays=7"
      );
      const data7 = await res.json();
      return data7;
    },
    async getHistoryInfo() {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/historical/russia?lastdays=all"
      );
      const dataH = await res.json();
      return dataH;
    },
  },
  async created() {
    const data = await this.getInfoAPI();
    const dataW = await this.getInfoAPIW();
    const dataH = await this.getHistoryInfo();
    const data7 = await this.getHistoryInfo7();
    const data30 = await this.getHistoryInfo30();
    this.dataDate = moment(data.lastUpdatedAtSource).format("L");
    this.stats = data;
    this.statsW = dataW;
    this.statsHT = dataH.timeline;
    this.statsH7 = data7.timeline;
    this.statsH30 = data30.timeline;
    this.regions = data.infectedByRegion;
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
.about_container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  background-color: #f3f3f3;
}
.about {
  width: 90%;
}
.loading_about {
  width: 90%;
}
.about_main {
  background-color: #f3f3f3;
}
</style>
