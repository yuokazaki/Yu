<template>
  <div id="visionSection">
    <div id="visionTitle">
      Vision
    </div>
    <div id="visionExplain">
      explain aaaaaa
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vision',
  props: {
    msg:String
  }
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#visionSection {
  background: linear-gradient(#f5f5f5);
  width: 100%;
  height: auto;
  text-align: center;
}

#visionTitle {
  color: #20879f;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 1px 1px 3px #000;
}

#visionExplain {
  color: #707070;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12pt;
  word-wrap: break-word;
  line-height: 0.25em;
}
</style>
