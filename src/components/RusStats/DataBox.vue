<template>
  <div class="data_stats">
    <div class="new_cases">
      <h3>
        Выявлено случаев
        <svg
          class="icon"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angles-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"
          ></path>
        </svg>
        {{ numberWithCommas(stats.todayCases) }}
      </h3>
      <div>
        <span> </span>{{ numberWithCommas(stats.cases) }} ({{
          (stats.casesPerOneMillion / 10000).toPrecision(3)
        }}
        %)
      </div>
    </div>
    <div class="health_cases">
      <h3>
        Выздоровело
        <svg
          class="icon"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angles-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"
          ></path>
        </svg>
        {{ numberWithCommas(stats.todayRecovered) }}
      </h3>
      <div>
        <span> </span>{{ numberWithCommas(stats.recovered) }} ({{
          (stats.recoveredPerOneMillion / 10000).toPrecision(3)
        }}
        %)
      </div>
    </div>
    <div class="tests_cases">
      <h3>Сделано тестов</h3>
      <div>
        <span> </span>{{ numberWithCommas(stats.tests) }} ({{
          (stats.testsPerOneMillion / 10000).toPrecision(3)
        }}
        %)
      </div>
    </div>
    <div class="population">
      <h3>Население</h3>
      <div>
        {{ numberWithCommas(stats.population) }}
      </div>
    </div>
    <div class="critical_cases">
      <h3>В критическом состоянии</h3>
      <div>
        <span> </span>{{ numberWithCommas(stats.critical) }} ({{
          (stats.criticalPerOneMillion / 10000).toPrecision(3)
        }}
        %)
      </div>
    </div>
    <div class="death_cases">
      <h3>
        Умерло
        <svg
          class="icon"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angles-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"
          ></path>
        </svg>
        {{ numberWithCommas(stats.todayDeaths) }}
      </h3>
      <div>
        <span> </span>{{ numberWithCommas(stats.deaths) }} ({{
          (stats.deathsPerOneMillion / 10000).toPrecision(3)
        }}
        %)
      </div>
    </div>
    <div class="active_cases">
      <h3>Носители</h3>
      <div>
        <span> </span>{{ numberWithCommas(stats.active) }} ({{
          (stats.activePerOneMillion / 10000).toPrecision(3)
        }}
        %)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBox",
  props: ["stats"],
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped>
.data_stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: #f3f3f3;
  font-weight: 600;
  font-size: 20px;
}
.icon {
  width: 17px;
  height: 17px;
  color: #0098df;
}
.new_cases {
  width: 44%;
  margin: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  padding: 10px;
  padding-bottom: 25px;

  box-shadow: 0px 2px 25px #c9c9c9;
  :hover {
    color: #0098df;
  }
}
.health_cases {
  width: 44%;
  margin: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  padding: 10px;
  padding-bottom: 25px;
  box-shadow: 0px 2px 25px #c9c9c9;
  :hover {
    color: #c52828;
  }
}
.death_cases {
  width: 44%;
  margin: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  padding: 10px;
  padding-bottom: 25px;

  box-shadow: 0px 2px 25px #c9c9c9;
  :hover {
    color: #000000;
  }
}
.active_cases {
  width: 44%;
  margin: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  padding: 10px;
  padding-bottom: 25px;

  box-shadow: 0px 2px 25px #c9c9c9;
  :hover {
    color: #ffbb00;
  }
}
.population {
  width: 27%;
  margin: 15px;
  background-color: rgb(133, 133, 133);
  border-radius: 35px;
  padding: 10px;
  padding-bottom: 25px;
  color: white;

  box-shadow: 0px 2px 25px #c9c9c9;
  :hover {
    color: #0098df;
  }
}
.critical_cases {
  width: 27%;
  margin: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  padding: 10px;
  padding-bottom: 25px;

  box-shadow: 0px 2px 25px #c9c9c9;
  :hover {
    color: #a9b325;
  }
}
.tests_cases {
  width: 27%;
  margin: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  padding: 10px;
  padding-bottom: 25px;

  box-shadow: 0px 2px 25px #c9c9c9;
  :hover {
    color: #2dc98d;
  }
}
</style>
