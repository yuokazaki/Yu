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

    <label id="gitHubLabel" />

    <a
      id="gitHubLink"
      href="https://github.com/yuuokazaki"
      target="_blank"
    >GitHub：https://github.com/yuuokazaki</a>

    <a
      id="skillCategories"
      href="#"
    ><p>Front-end</p></a>
    <a
      id="skillCategories"
      href="#"
    ><p>Back-end</p></a>
    <a
      id="skillCategories"
      href="#"
    ><p>DevOps</p></a>

    <div id="skillList">
      Html
    </div>

    <div id="skillGraph">
      <h1>棒グラフと線グラフ</h1>
      <chart />
    </div>
  </div>
</template>

<script>
import Chart from '../components/Chart';

export default {
  components: {
    Chart
  },
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#skillSection {
  background-color: #fff;
  width: 100%;
  height: auto;
  padding: 10px;
  text-align: center;
}

#skillTitle {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 1px 1px 3px #000;
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

#gitHubLabel {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12pt;
  padding: 20px;
}

#gitHubLink {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12pt;
  text-decoration: none;
}

#gitHubLink:hover {
  text-decoration: underline;
}

#skillCategories {
  display: inline-block;
  background: linear-gradient(#b51a1a, #0f8839, #571083);
  opacity: 75%;
}

#skillList {
  background: linear-gradient(#b51a1a, #0f8839, #571083);
  opacity: 75%;
  display: inline-block;
  height: 30px;
}

#skillGraph {
  background: linear-gradient(#b51a1a, #0f8839, #571083);
  opacity: 75%;
}
</style>
