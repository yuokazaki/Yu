
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
            data: [10, 20, 30, 40, 50, 30],
            backgroundColor: [
              'rgba(181, 26, 26, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
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
