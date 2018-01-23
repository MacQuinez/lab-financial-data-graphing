const dates = [];
const datesData = [];
let keyData = [];
let keyValues = [];
axios
  .get('http://api.coindesk.com/v1/bpi/historical/close.json')
  .then(function(response) {
    console.log(response.data.bpi);
    keyData = Object.keys(response.data.bpi);
    keyValues = Object.values(response.data.bpi);
    console.log(keyValues);
    for (let i = 0; i < response.data.bpi.length; i++) {
      dates.push(response.data.bpi[i]);
    }
    console.log(dates);
  })
  .catch(function(error) {
    console.log(error);
  });

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: keyData,
    datasets: [
      {
        label: '# of Votes',
        data: keyValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
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
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
