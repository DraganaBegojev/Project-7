//alert

const alertMessages = document.getElementById('alert1');
const alertUsers = document.getElementById('alert2');
const bellIcon = document.getElementById('notify');

alertMessages.innerHTML = `
    <div class="alert-banner">
        <div class="new_message">Alert: 3 new messages</div>
        <div class="close">x</div>
    </div>`;
alertUsers.innerHTML = `
    <div class="alert-banner">
        <div class="new_message">Alert: 1 new user</div>
        <div class="close">x</div>
    </div>`;

// Function to toggle visibility of alerts
bellIcon.addEventListener('click', () => {
    const isAlertVisible = alertMessages.style.display === "block" || alertUsers.style.display === "block";
    alertMessages.style.display = isAlertVisible ? "none" : "block";
    alertUsers.style.display = isAlertVisible ? "none" : "block";
});

// Close individual alerts on clicking 'x'
alertMessages.addEventListener('click', e => {
    if (e.target.classList.contains("close")) {
        alertMessages.style.display = "none";
    }
});

alertUsers.addEventListener('click', e => {
    if (e.target.classList.contains("close")) {
        alertUsers.style.display = "none";
    }
});



// traffic

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    tension: 0.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


//  daily traffic

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
    
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//  mobile users

const mobileCanvas = document.getElementById("mobile-users");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
}

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// message

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});


