//const ctx = document.getElementById('myChart1').getContext("2d");
const mylabels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
const myDatas = [325, 343, 325, 315, 400, 275, 265, 255, 275];

const myArray = [1, 2, 3, 4, 5];
const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chartJS(mainArray, chartID) {

    var id = chartID + '1';

    const ctx = document.getElementById(id).getContext("2d");





    for (var i = 1; i <= mainArray.length; i++) {
        /*for*/




        function decreaseChart(labels, data, divArray) {
            let gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(239,70,111,1)');
            gradient.addColorStop(1, 'rgba(255,255,255,.3)');

            if (i >= 3) {
                gradient.addColorStop(0, 'rgba(69,178,107,1)');
                gradient.addColorStop(1, 'rgba(255,255,255,.3)');
            }

            /*data hissesi*/
            const dataDecrease = {
                labels,
                datasets: [
                    {
                        data: data,
                        label: "",
                        backgroundColor: gradient,
                        borderColor: (i <= 2) ? 'rgb(255,0,0)' : 'rgb(0,255,0)',
                        tension: 0.4,
                        pointStyle: 'dash',
                        fill: true
                    }
                ]
            };


            /* config hissesi */

            const configDecrease = {

                type: 'line',
                data: dataDecrease,
               
                options: {

                    // elements: {
                    //     point:{
                    //         radius: 0
                    //     }
                    // },
                    maintainAspectRatio: true,
                    resizeDelay: 0,
                    responsive: true,
                    aspectRatio: 2,

                    interaction: {

                        intersect: false
                    },
                    plugins: {

                        legend: false
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            display: false

                        },
                        y: {
                            display: false
                        }

                    }
                }
            };

            /*******/
            new Chart(document.getElementById(chartID + i).getContext("2d"), configDecrease);

        };

        decreaseChart(mylabels, myDatas, mainArray);

        /*endFor*/
    };
}

