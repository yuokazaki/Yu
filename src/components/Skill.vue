<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>

    <div id="skillExplain">
      <p>
        skillの説明だああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
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
            @click="frontChange"
          >Front-end</span>
        </li>
        <li>
          <span
            id="back"
            @click="backChange"
          >Back-end</span>
        </li>
        <li>
          <span
            id="dev"
            @click="devChange"
          >DevOps</span>
        </li>
      </ul>
    </div>

    <div id="skillList">
      <ul
        id="frontEnd"
        :class="{'front-change': frontC}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="backEnd"
        :class="{'back-change': backC}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devOps"
        :class="{'dev-change': devC}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>

    <div v-if="frontChange">
      <FrontChart />
    </div>
    <div v-if="backChange">
      <BackChart />
    </div>
    <div v-if="devChange">
      <DevChart />
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
      frontChange: true,
      backChange: true,
      devChange: true  //とりあえずtrueで表示しています
    }
  },

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
    text-shadow: 1px 1px 3px #000;
    padding: 30px;
  }

  #skillExplain {
    color: #707070;
    font-family: 'Noto Sans', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    font-size: 12pt;
    word-break: break-all;
    line-height: 1.7;
    margin: auto;
    width: 60%;
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
    padding: 20px 0;
    text-decoration: none;
  }

  #gitHubLink:hover {
    text-decoration: underline;
  }

  #skillCategories {
    /* display: inline-block;
      background: linear-gradient(#b51a1a, #0f8839, #571083);
      opacity: 75%; */
    padding: 20px 0;

    #front {
      color: #b51a1a;
      font-size: 20px;
      cursor: pointer;
    }

    #back {
      color: #0f8839;
      font-size: 20px;
      cursor: pointer;
    }

    #dev {
      color: #571083;
      font-size: 20px;
      cursor: pointer;
    }
  }

  #skillList {
    /* background: linear-gradient(#b51a1a, #0f8839, #571083);
      opacity: 75%;
      display: inline-block; */
    width: auto;
    font-size: 18px;
    border-bottom: 2px solid #f3f3f3;

    li {
      display: inline-block;
    }

    #frontEnd {
      color: #b51a1a;
      font-size: 20px;
    }

    #backEnd {
      color: #0f8839;
      font-size: 20px;
    }

    #devOps {
      color: #571083;
      font-size: 20px;
    }
  }
}
</style>
