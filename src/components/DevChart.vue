<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'DevChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'DevOps',
            data: [20, 20, 30, 40, 20],
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
					max:50,
					min:0
				}
      }
    }
        }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
