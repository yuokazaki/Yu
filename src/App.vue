<template>
  <div
    id="app"
    class="wrap"
  >
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import { mapActions,mapGetters } from 'vuex'


export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },

  data() {
    return {
      category: 'front-end',
    };
  },

  computed: {
    ...mapGetters({
      get: 'getSkills',
    }),
  },

  mounted() {
    this.$store.dispatch('updateSkillCategories')
  },

  created () {
    this.updateSkillCategories();
  },

  methods: {
    ...mapActions(['updateSkillCategories']),

    getSkill() {
      this.get(this.category);
    },

    async test() {
      return await this.updateSkillCategories();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

.wrap {
  overflow: hidden;
}
</style>
