<template>
  <div id="drawerSection">
    <span id="headerButton"><img
      src="../assets/image/drawerBatsu.png"
    ></span>
    <ul id="drawerMenuSection">
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#app"
          @click="clickSmoothScroll()"
        >Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#aboutSection"
          @click="clickSmoothScroll()"
        >About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#skillSection"
          @click="clickSmoothScroll()"
        >Skill Sets</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#visionSection"
          @click="clickSmoothScroll()"
        >Vision</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#"
          @click="clickSmoothScroll()"
        >Custmize Item1</a>
      </li>
      <li id="drawerMenuItem">
        <a
          id="drawerMenuItemLink"
          href="#"
          @click="clickSmoothScroll()"
        >Custmize Item2</a>
      </li>
    </ul>
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

<style lang="scss" scoped>
@import url(https://www.google.com/get/noto/);

#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: 50px;

  img {
    float: right;
    width: 30px;
    height: 30px;
  }

  #drawerButoon {
    background-color: #f3f3f3;
    width: 100%;
    height: 50px;
    position: fixed;
    max-width: 768px;
    top: 0;
    left: 0;
  }

  #drawerMenuSection,
  #drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: 0 auto;
  }

  #drawerMenuSection {
    margin-top: 10px;
  }

  #drawerMenuItem {
    height: 50px;
    border-bottom: 0.2px solid #707070;
  }

  #drawerMenuItemLink {
    font-family: 'Noto Sans', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #707070;
    font-size: 12px;
    border-bottom: 2px solid #fff;
    display: block;
    position: relative;
    text-decoration: none;
    top: 10px;
    padding: 10px;
  }
}
</style>
