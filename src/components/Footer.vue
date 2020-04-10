<template>
  <div id="footerSection">
    <div id="footerCopyright">
      a
    </div>
    <div id="footerScroll">
      a
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#footerSection {
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  text-align: center;
}

#footerCopyright {
  color: #fff;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12pt;
  text-shadow: 1px 1px 3px #000;
}

#footerScroll {
  height: auto;
}
</style>
