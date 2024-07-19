import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
    useEffect(() => {
        // Function to destroy chart if it already exists
        const destroyChart = (chartId) => {
            const chartStatus = Chart.getChart(chartId); // <canvas> id
            if (chartStatus !== undefined) {
                chartStatus.destroy();
            }
        };

        // Destroy existing charts before reinitializing
        destroyChart("chart1");
        destroyChart("chart2");
        destroyChart("chart3");
        destroyChart("chart4");
        destroyChart("chart5");
        destroyChart("chart6");
        destroyChart("chart7");

        // First Doughnut Chart
        new Chart("chart1", {
            type: "doughnut",
            data: {
                labels: ["Drawer", "Constructor", "Mechanic", "Carpenter", "Blacksmith"],
                datasets: [{
                    label: "Amount of workers",
                    backgroundColor: ["#66ff66", "#00ffcc", "#b3b3b3", "#ffbf80", "#6666ff"],
                    data: [55, 49, 44, 24, 190]
                }]
            },
            options: {
                title: { display: true, text: 'Professions of All Job Seekers' }
            }
        });

        // First Bar Chart
        new Chart("chart2", {
            type: "bar",
            data: {
                labels: ["Laayoune", "Agadir", "Guelmim", "Dakhla", "Marrakesh", "Tangier"],
                datasets: [{
                    label: "City",
                    backgroundColor: "#00ccff",
                    data: [55, 49, 44, 24, 15, 60]
                }]
            },
            options: {
                legend: { display: false },
                title: { display: true, text: 'Cities of All Job Seekers' },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Second Doughnut Chart
        new Chart("chart3", {
            type: "doughnut",
            data: {
                labels: ["Drawer", "Constructor", "Mechanic", "Carpenter", "Blacksmith"],
                datasets: [{
                    label: "Amount of jobs",
                    backgroundColor: ["#66ff66", "#00ffcc", "#b3b3b3", "#ffbf80", "#6666ff"],
                    data: [30, 80, 60, 14, 50]
                }]
            },
            options: {
                title: { display: true, text: 'Professions of All Job Seekers' }
            }
        });

        // Second Bar Chart
        new Chart("chart4", {
            type: "bar",
            data: {
                labels: ["Laayoune", "Agadir", "Guelmim", "Dakhla", "Marrakesh", "Tangier"],
                datasets: [{
                    label: "City",
                    backgroundColor: "#00ccff",
                    data: [20, 20, 78, 10, 50, 24]
                }]
            },
            options: {
                legend: { display: false },
                title: { display: true, text: 'Cities of All Job Seekers' },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // First Line Chart
        new Chart("chart5", {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: "Registered clients progress",
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "#0287CD",
                    borderColor: "#0099ff",
                    data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
                }]
            },
            options: {
                legend: { display: true },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Second Line Chart
        new Chart("chart6", {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: "Registered seekers progress",
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "#0287CD",
                    borderColor: "#0099ff",
                    data: [1, 20, 2, 15, 12, 19, 2, 3, 6, 8, 10]
                }]
            },
            options: {
                legend: { display: true },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });

        // Third Line Chart
        new Chart("chart7", {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: "Job Advancements",
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "#0287CD",
                    borderColor: "#0099ff",
                    data: [6, 4, 3, 2, 5, 8, 12, 15, 10, 9, 12]
                }]
            },
            options: {
                legend: { display: true },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }, []);

    return (
        <div className="dashboard">
            <div className="row">
                <div className="chart-container">
                    <canvas id="chart4"></canvas>
                </div>
                <div className="chart-container">
                    <canvas id="chart2"></canvas>
                </div>
            </div>
            <div className="row">
                <div className="chart-container">
                    <canvas id="chart3"></canvas>
                </div>
                <div className="chart-container">
                    <canvas id="chart1"></canvas>
                </div>
            </div>
            <div className="row">
                <div className="chart-container">
                    <canvas id="chart5"></canvas>
                </div>
                <div className="chart-container">
                    <canvas id="chart6"></canvas>
                </div>
            </div>
            <div className="row">
                <div className="chart-container">
                    <canvas id="chart7"></canvas>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
