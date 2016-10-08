window.onload = function () {
    alert("Umph");

        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Server Performance",
                fontSize: 20
            },
            animationEnabled: true,
            axisX: {
                title: "Server Load (TPS)",
                titleFontSize: 18

            },
            axisY: {
                title: "Response Time (sec)",
                titleFontSize: 16
            },
            legend: {
                verticalAlign: 'bottom',
                horizontalAlign: "center"
            },

            data: [
            {
                type: "scatter",
                markerType: "square",
                toolTipContent: "<span style='\"'color: rgba(25,102, 39,1);'\"'><strong>{name}</strong></span><br/><strong> Load</strong> {x} <br/><strong> Response</strong></span> {y}sec",

                name: "Server Pluto",
                showInLegend: true,
                dataPoints: [

                { x: 23, y: 4 },
                { x: 28, y: 5 },
                { x: 39, y: 9 },
                { x: 34, y: 8 },
                { x: 24, y: 3 },
                { x: 29, y: 7 },
                { x: 29, y: 5 },
                { x: 23, y: 6 },
                { x: 27, y: 7 },
                { x: 34, y: 11 },
                { x: 36, y: 9 },
                { x: 33, y: 5 },
                { x: 32, y: 8 },
                { x: 21, y: 2 }

                ]
            },
            {
                type: "scatter",
                name: "Server Mars",
                markerType: "triangle",
                showInLegend: true,
                toolTipContent: "<span style='\"'color: rgba(25,102, 39,1);'\"'><strong>{name}</strong></span><br/><strong> Load</strong> {x} <br/><strong> Response</strong></span> {y}sec",

                dataPoints: [

                { x: 24, y: 2 },
                { x: 27, y: 3 },
                { x: 35, y: 7 },
                { x: 32, y: 6 },
                { x: 29, y: 4 },
                { x: 23, y: 5 },
                { x: 24, y: 3 },
                { x: 26, y: 4 },
                { x: 24, y: 5 },
                { x: 33, y: 7 },
                { x: 34, y: 6 },
                { x: 30, y: 4 },
                { x: 37, y: 8 },
                { x: 24, y: 2 }

                ]
            }
            ],
            legend: {
                cursor: "pointer",
                itemclick: function (e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    }
                    else {
                        e.dataSeries.visible = true;
                    }
                    chart.render();
                }
            }
        });

        chart.render();

        var chart2 = new CanvasJS.Chart("chartContainer2",
			{
				title: {
					text: "Oil Reserves and Production "
				},
				axisY: {
					stripLines: [{
						value: 143650,
						label: "Average",
						showOnTop: true
					}
					]
				},

				data: [
				{
					type: "bar",

					dataPoints: [
						{ x: 10, y: 267017, label: "Saudi Arabia" },
						{ x: 20, y: 116000, label: "Russia" },
						{ x: 30, y: 20682, label: "US" },
						{ x: 40, y: 154580, label: "Iran" },
						{ x: 50, y: 20350, label: "China" },
						{ x: 60, y: 175200, label: "Canda" },
						{ x: 70, y: 97800, label: "UAE" },
						{ x: 80, y: 297571, label: "Venezuela" }
					]
				}
				]
			});

			chart2.render();
    }
