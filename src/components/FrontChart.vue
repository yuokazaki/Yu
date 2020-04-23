
<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Flont-End',
            data: [],
            backgroundColor: [
              'rgba(181, 26, 26, 0.5)',
            ],
            borderColor: [
              'rgba(181, 26, 26, 2)',
              'rgba(181, 26, 26, 2)',
              'rgba(181, 26, 26, 2)',
              'rgba(181, 26, 26, 2)',
              'rgba(181, 26, 26, 2)',
            ],
            borderWidth: 1
          }
        ]
      },
		options:{
			scale:{
				ticks:{
					beginAtZero:true,
					max:5,
					min:0
				}
      }
    }
        }
  },
  mounted () {
    this.getSkills()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      const frontSkillInfo = this.$store.getters.getSkills('front-end')
      frontSkillInfo.skills.forEach((skill) => {
        this.data.labels.push(skill.name)
        this.data.datasets[0].data.push(skill.score)
      })
    },
  }
}
</script>
