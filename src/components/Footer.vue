<template>
  <div id="footerSection">
    <a
      href="#app"
      @click="clickSmoothScroll()"
    >
      <img
        id="footerScroll"
        src="../assets//image/footerButton.png"
      >
    </a>
    <div id="footerCopyright">
      &copy; Seattleconsulting
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#hoge'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);

#footerSection {
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: 50px;
  text-align: center;
}

#footerScroll {
  width: 25px;
  height: 25px;
  border: 1px solid #06c1e6;
  border-radius: 50%;
  top: -10px;
  position: relative;
}

#footerCopyright {
  color: #fff;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 12pt;
  text-shadow: 1px 1px 3px #000;
  top: -5px;
  position: relative;
}
</style>
