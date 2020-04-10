<template>
  <div id="drawerSection">
    <img
      id="drawerButton"
      src=""
    >
    <ul id="drawerMenuSection">
      <li id="drawerMenuItem">
        <a
          href="#"
          @click="clickSmoothScroll()"
        >・Home</a>
      </li>
      <a
        href="#"
        @click="clickSmoothScroll()"
      ><li id="drawerMenuItem">About Me</li></a>
      <a
        href="#"
        @click="clickSmoothScroll()"
      ><li id="drawerMenuItem">Skill Sets</li></a>
      <a
        href="#"
        @click="clickSmoothScroll()"
      ><li id="drawerMenuItem">Vision</li></a>
      <a
        href="#"
        @click="clickSmoothScroll()"
      ><li id="drawerMenuItem">Customize Item1</li></a>
      <a
        href="#"
        @click="clickSmoothScroll()"
      ><li id="drawerMenuItem">Customize Item2</li></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg:String
  }
}
</script>

<style>
@import url(https://www.google.com/get/noto/);

#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
}

#drawerMenuSection {
  background-color: #fff;
  width: 100%;
  height: auto;
}

#drawerMenuItem {
  background-color: #fff;
  width: 100%;
  height: 50px;
}

#drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12pt;
  word-wrap: none;
}
</style>
