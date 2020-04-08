<template>
  <div id="headerSection">
    <button @click="toggle" class="btn btn-success"><img src ="../assets/css/button.png" id="headerButton"></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";

export default {
  name: "Header",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>

<style scoped>
#headerSection {
  background-color: #F3F3F3;
  width: 100%;
  height: auto;
}

#headerButton img {
width: 100px;
height: 100px;
  background-color: #F3F3F3;
}



