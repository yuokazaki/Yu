<template>
  <div id="drawerSection">
    <img id="drawerButton" src="">
      <ul id="drawerMenuSection">
        <a href="#" @click="clickSmoothScroll()"><li id="drawerMenuItem">Home</li></a>
        <a href="#" @click="clickSmoothScroll()"><li id="drawerMenuItem">About Me</li></a>
        <a href="#" @click="clickSmoothScroll()"><li id="drawerMenuItem">Skill Sets</li></a>
        <a href="#" @click="clickSmoothScroll()"><li id="drawerMenuItem">Vision</li></a>
        <a href="#" @click="clickSmoothScroll()"><li id="drawerMenuItem">Customize Item1</li></a>
        <a href="#" @click="clickSmoothScroll()"><li id="drawerMenuItem">Customize Item2</li></a>
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
  background-color: #F3F3F3;
  width: 100%;
  height: auto;
}

#drawerMenuSection {
  background-color: #ffffff;
  width: 100%;
  height: auto;
}

#drawerMenuItem {
  background-color: #ffffff;
  width: 100%;
  height: 50px;
}

#drawerMenuItemLink {
  color: #707070;
  font-family: 'Noto Sans';
  font-size: 12pt;
  word-wrap: none;
}
</style>