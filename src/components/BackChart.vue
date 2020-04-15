<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Back-End',
            data: [30, 20, 10, 30],
            backgroundColor: [
              'rgba(15, 136, 57, 0.5)',
            ],
            borderColor: [
              'rgba(15, 136, 57, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
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
