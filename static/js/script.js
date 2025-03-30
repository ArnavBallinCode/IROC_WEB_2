document.addEventListener("DOMContentLoaded", function () {
    const paramTypes = [
        'ATTITUDE', 'AHRS', 'AHRS2', 'BATTERY_STATUS', 'HEARTBEAT',
        'DISTANCE_SENSOR', 'GLOBAL_POSITION_INT', 'RANGEFINDER',
        'RAW_IMU', 'SCALED_IMU2'
    ];

    const container = document.getElementById("paramsContainer");

    // Create static boxes for each parameter
    paramTypes.forEach(param => {
        let paramBox = document.createElement("div");
        paramBox.classList.add("param");
        paramBox.id = `param-${param}`;
        paramBox.innerHTML = `
            <strong>${param}</strong>
            <table class="param-table">
                <tbody id="table-${param}"><tr><td>Loading...</td></tr></tbody>
            </table>
        `;
        container.appendChild(paramBox);
    });

    // Function to update table content without reloading
    function updateParams() {
        paramTypes.forEach(param => {
            fetch(`../params/${param}.json?timestamp=${new Date().getTime()}`)
                .then(response => response.json())
                .then(data => {
                    let tableBody = document.getElementById(`table-${param}`);
                    if (tableBody) {
                        tableBody.innerHTML = ''; // Clear old data
                        Object.entries(data).forEach(([key, value]) => {
                            let row = `<tr><th>${key}</th><td>${value}</td></tr>`;
                            tableBody.innerHTML += row;
                        });
                    }
                })
                .catch(error => {
                    console.error(`Error fetching ${param}:`, error);
                });
        });
    }

    // Auto-update every second
    setInterval(updateParams, 1000);
});
