document.addEventListener("DOMContentLoaded", function () {
    const paramTypes = [
        'LOCAL_POSITION_NED', // Ensure this appears first
        'ATTITUDE', 'AHRS', 'AHRS2', 'BATTERY_STATUS', 'HEARTBEAT',
        'DISTANCE_SENSOR', 'GLOBAL_POSITION_INT', 'RANGEFINDER',
        'RAW_IMU', 'SCALED_IMU2'
    ];

    const container = document.getElementById("paramsContainer");
    const localPositionBox = document.getElementById("param-LOCAL_POSITION_NED");

    // Function to create parameter boxes
    function createParamBox(param) {
        let paramBox = document.createElement("div");
        paramBox.classList.add("param");
        paramBox.id = `param-${param}`;
        paramBox.innerHTML = `
            <strong>${param}</strong>
            <table class="param-table">
                <tbody id="table-${param}"><tr><td>Loading...</td></tr></tbody>
            </table>
        `;
        return paramBox;
    }

    // Append LOCAL_POSITION_NED separately at the top
    if (localPositionBox) {
        localPositionBox.innerHTML = `
            <strong>LOCAL_POSITION_NED</strong>
            <table class="param-table">
                <tbody id="table-LOCAL_POSITION_NED"><tr><td>Loading...</td></tr></tbody>
            </table>
        `;
    }

    // Append other parameters
    paramTypes.slice(1).forEach(param => {
        let paramBox = createParamBox(param);
        container.appendChild(paramBox);
    });

    // Function to update tables without reloading
    function updateParams() {
        paramTypes.forEach(param => {
            fetch(`../params/${param}.json?timestamp=${new Date().getTime()}`)
                .then(response => response.json())
                .then(data => {
                    let tableBody = document.getElementById(`table-${param}`);
                    if (tableBody) {
                        tableBody.innerHTML = ''; // Clear old data
                        Object.entries(data).forEach(([key, value]) => {
                            if (key !== "mavpackettype") { // Exclude mavpackettype field
                                let row = `<tr><th>${key}</th><td>${value}</td></tr>`;
                                tableBody.innerHTML += row;
                            }
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


