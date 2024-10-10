// Alert Banner

const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
        <div class="new_message">Alert: Update available! </div>
        <div class="close">x</div>
        `;


alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("close")) {
        alertBanner.style.opacity = "0";
        setTimeout(() => alertBanner.style.display = "none", 500); // delay for fade-out effect
    }
});


// Drawer
const drawerMessages = document.getElementById('notification-1');
const drawerUsers = document.getElementById('notification-2');
const bellIcon = document.getElementById('notify');
const drawer = document.getElementById('drawer');


// Content for notifications
drawerMessages.innerHTML = `
    <div class="new_message">3 new messages</div>
    <div class="close">x</div>`;
drawerUsers.innerHTML = `
    <div class="new_message">1 new user</div>
    <div class="close">x</div>`;

// Toggle drawer visibility on bell icon click
bellIcon.addEventListener('click', () => {
    if (drawer.style.display === "none") {
        // Show drawer and reset notifications
        drawer.style.display = "block";
        drawerMessages.style.display = "flex";
        drawerUsers.style.display = "flex";
        updateBorders(); // Call to update borders when drawer is shown
    } else {
        // Hide drawer
        drawer.style.display = "none";
    }
});

// Close individual notifications and check if all are closed
function closeNotification(notification) {
    notification.addEventListener('click', (e) => {
        if (e.target.classList.contains("close")) {
            notification.style.display = "none"; // Hide the notification
            updateBorders(); // Update borders when a notification is closed
            checkDrawerStatus(); // Check if all notifications are closed
        }
    });
}


// Update borders for notifications
function updateBorders() {
    const notifications = document.querySelectorAll('.notification'); // Select all notifications
    let lastVisibleIndex = -1; // Track the last visible notification index

    // Find the last visible notification index
    notifications.forEach((notification, index) => {
        if (notification.style.display !== "none") {
            lastVisibleIndex = index; // Update to the current index if visible
        }
    });

    // Set borders for notifications
    notifications.forEach((notification, index) => {
        if (index < lastVisibleIndex) {
            notification.style.borderBottom = '1px solid #6b64c9'; // Add border for visible notifications
        } else {
            notification.style.borderBottom = 'none'; // Remove border for the last visible notification
        }
    });
}

// Check if all notifications are hidden
function checkDrawerStatus() {
    const allNotificationsClosed = 
        drawerMessages.style.display === "none" && 
        drawerUsers.style.display === "none";
    
    if (allNotificationsClosed) {
        drawer.style.display = "none"; // Hide the drawer if all notifications are closed
    }
}

// Attach close notification event listeners
closeNotification(drawerMessages);
closeNotification(drawerUsers);

// Initial call to set up borders
updateBorders();


// traffic - hourly

const trafficCanvas = document.getElementById("traffic-chart");

const trafficData = {
    hourly: {
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
        datasets: [{
        label: 'Traffic',
        data: [30, 50, 40, 60, 80, 75, 90, 60],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(116, 119, 191, 1)',
        borderWidth: 1
        }]
    },
    daily: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
        label: 'Traffic',
        data: [75, 100, 150, 125, 225, 200, 100],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(116, 119, 191, 1)',
        borderWidth: 1
        }]
    },
     weekly: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        label: 'Traffic',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(116, 119, 191, 1)',
        borderWidth: 1
        }]
    },
    monthly: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
        label: 'Traffic',
        data: [2000, 2400, 1800, 2200, 2800, 3200, 3000, 2600, 2400, 2800, 2900, 3000],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(116, 119, 191, 1)',
        borderWidth: 1
        }]
    }
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
    data: trafficData.weekly,
    options: trafficOptions
});

function updateChart(newData) {
    trafficChart.data = newData;  // Update the chart's data
    trafficChart.update();        // Re-render the chart
  }

const tabs = document.querySelectorAll('.traffic-nav-link');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const dataType = e.target.dataset.type; 
        updateChart(trafficData[dataType]);
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
    });
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
const sendMessage = document.getElementById("send");

sendMessage.addEventListener('click', (e) => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
        e.preventDefault();
        } else if (user.value === "") {
        alert("Please fill out user field before sending");
        e.preventDefault();
        } else if (message.value === "") {
        alert("Please fill out message field before sending");
        e.preventDefault();
        } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

// Settings

document.addEventListener('DOMContentLoaded', function () {
    const subscribeToggle = document.getElementById('subscribe');
    const publicToggle = document.getElementById('public');
    const timezoneSelect = document.getElementById('timezone');
    const saveButton = document.getElementById('save');
    const cancelButton = document.getElementById("cancel");

    // Load settings from localStorage on page load
    function loadSettings() {
        const savedSubscribe = localStorage.getItem('subscribe');
        const savedPublic = localStorage.getItem('public');
        const savedTimezone = localStorage.getItem('timezone');

        subscribeToggle.checked = savedSubscribe !== null ? savedSubscribe === "true" : true; // default to checked
        publicToggle.checked = savedPublic !== null ? savedPublic === "true" : true; // default to checked
        timezoneSelect.value = savedTimezone || ""; // default to "Select a Timezone"
}

    // Save settings to localstorage

    function saveSettings() {
        localStorage.setItem('subscribe', subscribeToggle.checked);
        localStorage.setItem('public', publicToggle.checked);
        localStorage.setItem('timezone', timezoneSelect.value);
        alert('Settings saved!');
    }

    // Reset settings to default and clear localstorage

    function resetSettings() {
        localStorage.removeItem('subscribe');
        localStorage.removeItem("public");
        localStorage.removeItem("timezone");

        subscribeToggle.checked = true; // default to checked
        publicToggle.checked = true; // default to checked
        timezoneSelect.selectedIndex = 0; // reset to "Select a Timezone"
    }

    // Event listeners for Save and Cancel buttons
    saveButton.addEventListener('click', saveSettings);
    cancelButton.addEventListener('click', resetSettings);


    // Initialize settings on load
    loadSettings();

});



