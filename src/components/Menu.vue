<template>
  <div id="drawerSection">
    <div id="drawerBatsuButton">
      <label for="nav-input">
        <img
          id="drawerClose"
          src="../assets/image/drawerBatsu.png"
        >
      </label>
    </div>
    <ul
      id="drawerMenuSection"
      style="list-style: disc;"
    >
      <li @click="closeMenu">
        ・<a href="#app">Home</a>
      </li>
      <li @click="closeMenu">
        ・<a href="#aboutSection">About Me</a>
      </li>
      <li @click="closeMenu">
        ・<a href="#skillSection">Skill Set</a>
      </li>
      <li @click="closeMenu">
        ・<a href="#visionSection">Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit('close')
    },
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
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
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto;

  #drawerBatsuButton {
    text-align: right;
    padding: 10px 10px;
    background: #f3f3f3;

    img {
      width: 25px;
      height: 25px;
      background: #f3f3f3;
    }
  }

  #drawerMenuSection {
    background-color: #fff;
    width: 100%;
    height: auto;

    li {
      color: #a8a3a3;
      font-weight: bold;
      display: block;
      border-top: solid 1px #f3f3f3;
      border-bottom: solid 1px #f3f3f3;
      padding: 10px 100px 10px 5px;
      font-size: 25px;
      white-space: nowrap;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
