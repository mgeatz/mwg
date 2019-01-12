import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
            "Building full stack web applications",
            "Hanging with Lindsay, Gavin and Mila",
            "MBA & entrepreneurial things",
            "Dreaming about business strategy"
          ],
          datasets: [{
            label: '',
            data: [40, 20, 27, 13],
            backgroundColor: [
              'rgba(54, 162, 235, 0.9)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(54, 162, 235, 0.3)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          elements: {
            line: {
              backgroundColor: 'transparent'
            }
          },
          legend: {
            display: true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              },
              gridLines: {
                display:false,
                drawOnChartArea: false
              }
            }]
          }
        }
      });
    })

  }

}
