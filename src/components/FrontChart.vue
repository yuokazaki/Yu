
<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'JavScript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Flont-End',
            data: [5, 5, 2, 2, 3],
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
    this.renderChart(this.data, this.options)
  }
}
</script>
