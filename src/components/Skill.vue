<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="SkillExplain">
      skillの説明
    </div>
    <a
      id="gitHubLink"
      href="https://github.com/yuuokazaki"
    >GitHub：https://github.com/yuuokazaki</a>
    <label id="gitHubLabel" />
    <a id="skillCategories" />
    <div id="skillList">
      skillList
    </div>
    <div id="skillGraph">
      Graph
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    msg:String, Array
  }
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#skillSection {
  background-color: #fff;
  width: 100%;
  height: auto;
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
  word-wrap: break-word;
  line-height: 0.25em;
}

#gitHubLabel {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12pt;
}

#gitHubLink {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12pt;
}

#skillCategories {
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
