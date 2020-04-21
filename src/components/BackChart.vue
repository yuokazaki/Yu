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
            data: [3, 2, 1, 3],
            backgroundColor: [
              'rgba(15, 136, 57, 0.5)',
            ],
            borderColor: [
              'rgba(15, 136, 57, 2)',
              'rgba(15, 136, 57, 2)',
              'rgba(15, 136, 57, 2)',
              'rgba(15, 136, 57, 2)',
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
