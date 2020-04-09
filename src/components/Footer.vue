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
  props: {
    msg:String
  }
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#footerSection {
  background: linear-gradient(#80E1F7, #06C1E6); 
  width: 100%;
  height: auto;
  text-align: center;
}

#footerCopyright {
  color: #ffffff;
  font-family: 'Noto Sans';
  font-weight: bold;
  font-size: 12pt;
  text-shadow:1px 1px 3px #000000;
}

#footerScroll {
  height: auto; 
}
</style>