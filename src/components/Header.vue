<template>
  <div id="headerSection">
    <div id="nav-drawer">
      <input
        id="nav-input"
        type="checkbox"
        class="nav-unshown"
      >
      <label
        id="nav-open"
        for="nav-input"
      ><span /></label>
      <label
        id="nav-close"
        class="nav-unshown"
        for="nav-input"
      />
      <div id="nav-content">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue"

export default {
  name: "Header",
  components: {
    Menu
    }
  }
</script>

<style scoped>
#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: auto;
  padding: 10px;
  position: fixed;
  top: 0;
}

#headerButton {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto;
}

#nav-drawer {
  position: relative;
}

.nav-unshown {
  display: none;
}

#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}

#nav-open span,
#nav-open span::before,
#nav-open span::after {
  position: absolute;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
}

#nav-open span::before {
  bottom: -8px;
}

#nav-open span::after {
  bottom: -16px;
}

#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 90%;
  max-width: 330px;
  height: 100%;
  background: #fff;
  transition: 0.3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
}

#nav-input:checked ~ #nav-close {
  display: block;
  opacity: 0.5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
}
</style>
