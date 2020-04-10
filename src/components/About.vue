<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      About Me
    </div>
    <div id="aboutExplain">
      <p>高知県出身のエンジニア</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#aboutSection {
  background-color: #f5f5f5;
  width: 100%;
  height: 300px;
  padding: 10px;
  text-align: center;
}

#aboutTitle {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 1px 1px 3px #000;
}

#aboutExplain {
  color: #707070;
  word-wrap: break-word;
  line-height: 0.25em;
  padding: 20px;
}
</style>
