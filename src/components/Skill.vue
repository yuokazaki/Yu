<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain">
      <p>
        まだまだ経験が足りないですが、スキルをまとめました。全体的に浅く広くです。自分一人で制作した事があるのは、LP（HTML,CSS)です。今回ポートフォリオの作成で、フロントエンドのスキルがかなり身につきました。また、フレームワークを使った開発や、git・gitHubの使い方も学ぶ事ができました。バックエンドでの開発経験はありません。JavaやRubyの言語を、少し触りました。
      </p>
    </div>
    <label id="gitHubLabel">
      GitHub：
      <a
        id="gitHubLink"
        href="https://github.com/yuuokazaki"
        target="_blank"
      >https://github.com/yuuokazaki</a>
    </label>
    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="setCurrentChart('front')"
          >Front-end</span>
        </li>
        <li>
          <span
            id="back"
            @click="setCurrentChart('back')"
          >Back-end</span>
        </li>
        <li>
          <span
            id="dev"
            @click="setCurrentChart('dev')"
          >DevOps</span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="frontEnd"
        :class="{'front-change': isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="backEnd"
        :class="{'back-change': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devOps"
        :class="{'dev-change': isDevActive}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div id="skillGraph">
      <div v-if="isFrontActive">
        <FrontChart />
      </div>
      <div v-if="isBackActive">
        <BackChart />
      </div>
      <div v-if="isDevActive">
        <DevChart />
      </div>
    </div>
  </div>
</template>

<script>
import FrontChart from '../components/FrontChart.vue';
import BackChart from '../components/BackChart.vue';
import DevChart from '../components/DevChart.vue';

export default {
  components: {
    FrontChart,
    BackChart,
    DevChart
  },
  data(){
    return {
      currentChart: 'front'
    }
  },
  computed: {
    isFrontActive() {
      return this.currentChart=='front';
    },
    isBackActive() {
      return this.currentChart=='back';
    },
    isDevActive() {
      return this.currentChart=='dev';
    }
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(https://www.google.com/get/noto/);

#skillSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 10px;
  text-align: center;

  #skillTitle {
    color: #20879f;
    font-family: 'Noto Sans', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    font-size: 18pt;
    text-shadow: 1px 1px 3px gray;
    padding: 30px;
  }

  #skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 12pt;
    word-break: break-all;
    text-align: left;
    line-height: 1.7;
    margin: auto;
    width: 50%;
    padding: 20px;
  }

  #gitHubLabel,
  #gitHubLink {
    color: #20879f;
    font-family: 'Noto Sans', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    font-size: 12pt;
    display: inline-block;
    padding: 20px 0;
    text-decoration: none;

    #gitHubLink:hover {
      text-decoration: underline;
    }
  }

  #skillCategories {
    padding: 20px 0;

    li {
      display: inline-block;
      margin: 0 10px;
    }

    #front {
      color: #b51a1a;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }

    #back {
      color: #0f8839;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }

    #dev {
      color: #571083;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  #skillList {
    width: auto;
    font-size: 18px;
    border-bottom: 2px solid #f3f3f3;
    padding: 10px 0 50px 0;

    li {
      display: inline-block;
      margin: 10px 10px;
    }

    .front-change li {
      background-color: rgba(181, 26, 26, 0.4);
    }

    .back-change li {
      background-color: rgba(15, 136, 57, 0.4);
    }

    .dev-change li {
      background-color: rgba(87, 16, 131, 0.4);
    }

    #frontEnd li {
      color: rgba(181, 26, 26, 0.75);
      height: 30px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
    }

    #backEnd li {
      color: rgba(15, 136, 57, 0.75);
      height: 30px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
    }

    #devOps li {
      color: rgba(87, 16, 131, 0.75);
      height: 30px;
      font-weight: bold;
      padding: 12px 20px 2px 20px;
      box-shadow: 0 0 8px gray;
    }
  }

  #skillGraph {
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 30px;
  }
}
</style>
