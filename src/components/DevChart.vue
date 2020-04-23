<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'DevOps',
            data: [],
            backgroundColor: [
              'rgba(87, 16, 131, 0.5)',
            ],
            borderColor: [
              'rgba(87, 16, 131, 2)',
              'rgba(87, 16, 131, 2)',
              'rgba(87, 16, 131, 2)',
              'rgba(87, 16, 131, 2)',
              'rgba(87, 16, 131, 2)',
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
      const frontSkillInfo = this.$store.getters.getSkills('devops')
      frontSkillInfo.skills.forEach((skill) => {
        this.data.labels.push(skill.name)
        this.data.datasets[0].data.push(skill.score)
      })
    },
  }
}
</script>
