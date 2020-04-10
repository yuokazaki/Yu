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
        >Home</a>
      </li>
      <li id="drawerMenuItem">
        <a
          href="#"
          @click="clickSmoothScroll()"
        >About Me</a>
      </li>
      <li id="drawerMenuItem">
        <a
          href="#"
          @click="clickSmoothScroll()"
        >Skill Sets</a>
      </li>
      <li id="drawerMenuItem">
        <a
          href="#"
          @click="clickSmoothScroll()"
        >Vision</a>
      </li>
      <li id="drawerMenuItem">
        <a
          href="#"
          @click="clickSmoothScroll()"
        >Custmize Item1</a>
      </li>
      <li id="drawerMenuItem">
        <a
          href="#"
          @click="clickSmoothScroll()"
        >Custmize Item2</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
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
  list-style-type: disc;/* リストの左側に黒丸 */
  margin-left: 40px;/* リストの左側に余白 */
  text-align: left;
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
