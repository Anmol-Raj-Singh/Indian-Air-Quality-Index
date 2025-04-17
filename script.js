// State and City Data
const stateData = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Kakinada", "Rajahmundry", "Anantapur", "Kadapa"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro", "Bomdila", "Roing", "Tezu"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Arrah", "Begusarai", "Chhapra"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon", "Raigarh", "Jagdalpur"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Cuncolim"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh"],
    "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu", "Mandi", "Solan", "Palampur", "Dalhousie"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Ramgarh"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Dharwad", "Bijapur"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur"],
    "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul", "Chandel", "Senapati", "Tamenglong"],
    "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin", "Williamnagar", "Baghmara", "Resubelpara", "Ampati"],
    "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Mamit"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Phek", "Mon"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Pathankot", "Hoshiarpur"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Bhilwara", "Alwar"],
    "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo", "Singtam", "Jorethang", "Ravangla"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Erode"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Secunderabad", "Nalgonda"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar", "Belonia", "Ambassa", "Khowai"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Allahabad", "Ghaziabad", "Noida"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Nainital"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Darjeeling", "Malda", "Kharagpur"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi"],
    "Chandigarh": ["Chandigarh"],
    "Puducherry": ["Puducherry", "Karaikal", "Yanam", "Mahe"],
    "Andaman and Nicobar": ["Port Blair", "Car Nicobar", "Mayabunder", "Rangat"],
    "Dadra and Nagar Haveli": ["Silvassa", "Amli", "Dadra"],
    "Daman and Diu": ["Daman", "Diu"],
    "Lakshadweep": ["Kavaratti", "Agatti", "Amini", "Andrott"],
    "Ladakh": ["Leh", "Kargil"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Kathua", "Udhampur"]
};

// Generate random AQI data for a city
function generateAQIData(cityName) {
    const baseAQI = Math.floor(Math.random() * 400) + 20; // Random AQI between 20 and 420
    const pm25 = baseAQI * 0.5 + Math.random() * 20;
    const pm10 = baseAQI * 0.8 + Math.random() * 30;
    
    let level;
    if (baseAQI <= 50) level = "Good";
    else if (baseAQI <= 100) level = "Moderate";
    else if (baseAQI <= 200) level = "Poor";
    else if (baseAQI <= 300) level = "Very Poor";
    else level = "Severe";

    return {
        name: cityName,
        aqi: baseAQI,
        pm25: pm25.toFixed(1),
        pm10: pm10.toFixed(1),
        level: level,
        lastUpdated: new Date().toLocaleDateString()
    };
}

// Get health message based on AQI level
function getHealthMessage(level) {
    switch (level) {
        case "Good":
            return "Air quality is good. Perfect for outdoor activities!";
        case "Moderate":
            return "Air quality is acceptable. However, sensitive individuals should consider limiting prolonged outdoor exposure.";
        case "Poor":
            return "Members of sensitive groups may experience health effects. The general public is less likely to be affected.";
        case "Very Poor":
            return "Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects.";
        case "Severe":
            return "Health alert: everyone may experience more serious health effects. Avoid outdoor activities.";
        default:
            return "Select a city to see health recommendations.";
    }
}

// Get color based on AQI level
function getAQIColor(level) {
    switch (level) {
        case "Good":
            return "#4CAF50";
        case "Moderate":
            return "#FDD835";
        case "Poor":
            return "#FB8C00";
        case "Very Poor":
            return "#E53935";
        case "Severe":
            return "#B71C1C";
        default:
            return "#9E9E9E";
    }
}

// Helper: Set wind animation based on AQI
function setWindAnimation(aqi, level) {
    const svg = document.getElementById('wind-svg');
    if (!svg) return;
    // Get all wind paths
    const wind1 = svg.querySelector('.wind1');
    const wind2 = svg.querySelector('.wind2');
    const wind3 = svg.querySelector('.wind3');
    const wind4 = svg.querySelector('.wind4');
    const wind5 = svg.querySelector('.wind5');

    // Determine speed and color based on AQI
    let baseSpeed, color1, color2, color3, color4, color5, glow;
    if (aqi <= 50) { // Good
        baseSpeed = 6; // slow
        color1 = '#b2ebf2';
        color2 = '#b3e5fc';
        color3 = '#b2dfdb';
        color4 = '#c5e1a5';
        color5 = '#fffde7';
        glow = '0 0 16px #b2ebf2cc';
    } else if (aqi <= 100) { // Moderate
        baseSpeed = 4.5;
        color1 = '#4fc3f7';
        color2 = '#81d4fa';
        color3 = '#80cbc4';
        color4 = '#aed581';
        color5 = '#fff59d';
        glow = '0 0 18px #4fc3f7cc';
    } else if (aqi <= 200) { // Poor
        baseSpeed = 3.2;
        color1 = '#29b6f6';
        color2 = '#4dd0e1';
        color3 = '#26a69a';
        color4 = '#ffd54f';
        color5 = '#ffe082';
        glow = '0 0 22px #ffd54fcc';
    } else if (aqi <= 300) { // Very Poor
        baseSpeed = 2.2;
        color1 = '#0288d1';
        color2 = '#00bcd4';
        color3 = '#ffb300';
        color4 = '#ff7043';
        color5 = '#ffcc80';
        glow = '0 0 28px #ff7043cc';
    } else { // Severe
        baseSpeed = 1.2; // very fast
        color1 = '#d32f2f';
        color2 = '#f44336';
        color3 = '#ff9800';
        color4 = '#ffd600';
        color5 = '#fff176';
        glow = '0 0 36px #d32f2fcc';
    }
    // Set stroke colors
    wind1.setAttribute('stroke', color1);
    wind2.setAttribute('stroke', color2);
    wind3.setAttribute('stroke', color3);
    wind4.setAttribute('stroke', color4);
    wind5.setAttribute('stroke', color5);
    // Set glow
    wind1.style.filter = `blur(1.2px) drop-shadow(${glow})`;
    wind2.style.filter = `blur(1.2px) drop-shadow(${glow})`;
    wind3.style.filter = `blur(1.2px) drop-shadow(${glow})`;
    wind4.style.filter = `blur(1.2px) drop-shadow(${glow})`;
    wind5.style.filter = `blur(1.2px) drop-shadow(${glow})`;
    // Set animation speed
    wind1.style.animationDuration = baseSpeed + 's';
    wind2.style.animationDuration = (baseSpeed + 0.5) + 's';
    wind3.style.animationDuration = (baseSpeed + 1) + 's';
    wind4.style.animationDuration = (baseSpeed + 1.5) + 's';
    wind5.style.animationDuration = (baseSpeed + 2) + 's';
}

// Update the display with city data
function updateDisplay(cityName, stateName) {
    const data = generateAQIData(cityName);

    // Update city name and location info
    document.getElementById('selected-city').textContent = data.name;
    document.getElementById('location-info').textContent = stateName;
    document.getElementById('last-updated').textContent = `Last updated: ${data.lastUpdated}`;

    // Update AQI number and text
    const aqiNumber = document.getElementById('aqi-number');
    const aqiText = document.getElementById('aqi-text');
    aqiNumber.textContent = Math.round(data.aqi);
    aqiText.textContent = data.level;
    aqiNumber.style.color = getAQIColor(data.level);

    // Update pollutant values
    document.getElementById('pm25').textContent = data.pm25;
    document.getElementById('pm10').textContent = data.pm10;
    document.getElementById('aqi-level').textContent = data.level;

    // Update health message
    document.getElementById('health-message').textContent = getHealthMessage(data.level);

    // Set wind animation based on AQI
    setWindAnimation(data.aqi, data.level);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const stateSelect = document.getElementById('state-select');
    const citySelect = document.getElementById('city-select');

    // Populate states
    Object.keys(stateData).sort().forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    // Handle state selection
    stateSelect.addEventListener('change', () => {
        const selectedState = stateSelect.value;
        citySelect.innerHTML = '<option value="">Select City</option>';
        
        if (selectedState) {
            stateData[selectedState].sort().forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
            citySelect.disabled = false;
        } else {
            citySelect.disabled = true;
        }
    });

    // Handle city selection
    citySelect.addEventListener('change', () => {
        const selectedCity = citySelect.value;
        const selectedState = stateSelect.value;
        if (selectedCity) {
            updateDisplay(selectedCity, selectedState);
        }
    });

    // Chatbot elements
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const closeChatbot = document.querySelector('.close-chatbot');
    const chatInput = document.querySelector('.chatbot-input input');
    const sendButton = document.querySelector('.send-button');
    const chatMessages = document.querySelector('.chatbot-messages');

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.add('active');
    });

    closeChatbot.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });

    // Function to add a message to the chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to handle user input
    function handleUserInput() {
        const userInput = chatInput.value.trim();
        if (!userInput) return;

        // Add user message
        addMessage(userInput, true);
        chatInput.value = '';

        // Process user input and generate response
        const response = generateChatbotResponse(userInput);
        setTimeout(() => {
            addMessage(response);
        }, 500);
    }

    // Function to generate chatbot response
    function generateChatbotResponse(input) {
        const lowerInput = input.toLowerCase();
        const currentCity = document.getElementById('selected-city').textContent;
        const currentAQI = document.getElementById('aqi-number').textContent;
        const currentLevel = document.getElementById('aqi-level').textContent;

        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello! I'm your Air Quality Assistant. How can I help you today?";
        } else if (lowerInput.includes('help')) {
            return "I can help you with:\n- Current air quality information\n- Health recommendations\n- AQI levels explanation\n- City-specific air quality data\nJust ask me anything about air quality!";
        } else if (lowerInput.includes('aqi') || lowerInput.includes('air quality')) {
            if (currentCity !== 'Select a city') {
                return `The current AQI in ${currentCity} is ${currentAQI}, which is ${currentLevel}. ${getHealthMessage(currentLevel)}`;
            } else {
                return "Please select a city first to get air quality information.";
            }
        } else if (lowerInput.includes('health') || lowerInput.includes('safe')) {
            if (currentCity !== 'Select a city') {
                return getHealthMessage(currentLevel);
            } else {
                return "Please select a city first to get health recommendations.";
            }
        } else if (lowerInput.includes('levels') || lowerInput.includes('scale')) {
            return "AQI levels are categorized as:\n- Good (0-50): Perfect for outdoor activities\n- Moderate (51-100): Acceptable, but sensitive individuals should be cautious\n- Poor (101-200): May affect sensitive groups\n- Very Poor (201-300): Everyone may experience health effects\n- Severe (>300): Health alert, avoid outdoor activities";
        } else if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
            return "You're welcome! Feel free to ask if you need more information about air quality.";
        } else {
            return "I'm not sure I understand. You can ask me about:\n- Current air quality\n- Health recommendations\n- AQI levels\n- City-specific information";
        }
    }

    // Event listeners for chat input
    sendButton.addEventListener('click', handleUserInput);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // ML Training elements
    const trainingButton = document.getElementById('start-training');
    const currentEpoch = document.getElementById('current-epoch');
    const currentLoss = document.getElementById('current-loss');
    const currentAccuracy = document.getElementById('current-accuracy');
    const trainingGraph = document.getElementById('training-graph');

    // Initialize Chart.js
    const ctx = trainingGraph.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Training Loss',
                    data: [],
                    borderColor: '#4CAF50',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'Validation Loss',
                    data: [],
                    borderColor: '#F44336',
                    tension: 0.4,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Loss'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Epoch'
                    }
                }
            }
        }
    });

    // Simulate training process
    function simulateTraining() {
        let epoch = 0;
        const maxEpochs = 50;
        const trainingData = [];
        const validationData = [];
        
        trainingButton.disabled = true;
        trainingButton.textContent = 'Training...';

        const trainingInterval = setInterval(() => {
            if (epoch >= maxEpochs) {
                clearInterval(trainingInterval);
                trainingButton.disabled = false;
                trainingButton.textContent = 'Start Training';
                return;
            }

            // Generate simulated loss values
            const baseLoss = 2.0;
            const trainingLoss = baseLoss * Math.exp(-epoch / 10) + (Math.random() * 0.1);
            const validationLoss = baseLoss * Math.exp(-epoch / 12) + (Math.random() * 0.15);

            // Update chart
            chart.data.labels.push(epoch);
            chart.data.datasets[0].data.push(trainingLoss);
            chart.data.datasets[1].data.push(validationLoss);
            chart.update();

            // Update stats
            currentEpoch.textContent = epoch;
            currentLoss.textContent = trainingLoss.toFixed(4);
            currentAccuracy.textContent = `${Math.min(100, Math.round(100 * (1 - trainingLoss / baseLoss)))}%`;

            epoch++;
        }, 500);
    }

    // Add event listener for training button
    trainingButton.addEventListener('click', simulateTraining);

    // Prediction elements
    const predictionGraph = document.getElementById('prediction-graph');
    const avgPrediction = document.getElementById('avg-prediction');
    const predictionTrend = document.getElementById('prediction-trend');
    const predictionConfidence = document.getElementById('prediction-confidence');
    const predictionAlerts = document.getElementById('prediction-alerts');

    // Initialize prediction chart
    const predCtx = predictionGraph.getContext('2d');
    const predChart = new Chart(predCtx, {
        type: 'line',
        data: {
            labels: ['Today', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [
                {
                    label: 'Predicted AQI',
                    data: [],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Confidence Range',
                    data: [],
                    borderColor: 'rgba(76, 175, 80, 0.3)',
                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                    tension: 0.4,
                    fill: true,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'AQI'
                    }
                }
            }
        }
    });

    // Function to generate predictions based on current AQI
    function generatePredictions(currentAQI) {
        const baseAQI = currentAQI;
        const predictions = [];
        const confidenceRanges = [];
        
        // Generate predictions for next 7 days
        for (let i = 0; i < 7; i++) {
            // Simulate some variation in AQI
            const variation = (Math.random() - 0.5) * 50;
            const trend = i * 5; // Slight upward trend
            const prediction = Math.max(0, baseAQI + variation + trend);
            
            // Add some randomness to confidence range
            const confidence = 20 + Math.random() * 30;
            
            predictions.push(prediction);
            confidenceRanges.push(prediction + confidence);
        }

        return { predictions, confidenceRanges };
    }

    // Function to update prediction display
    function updatePredictions(currentAQI) {
        const { predictions, confidenceRanges } = generatePredictions(currentAQI);
        
        // Update chart
        predChart.data.datasets[0].data = predictions;
        predChart.data.datasets[1].data = confidenceRanges;
        predChart.update();

        // Calculate statistics
        const avg = predictions.reduce((a, b) => a + b, 0) / predictions.length;
        const trend = predictions[predictions.length - 1] - predictions[0];
        const confidence = 85 + Math.random() * 10; // Random confidence between 85-95%

        // Update stats
        avgPrediction.textContent = Math.round(avg);
        predictionTrend.textContent = trend > 0 ? 'Increasing' : trend < 0 ? 'Decreasing' : 'Stable';
        predictionConfidence.textContent = `${Math.round(confidence)}%`;

        // Generate alerts
        predictionAlerts.innerHTML = '';
        if (avg > 200) {
            addAlert('High AQI predicted for the next week. Consider limiting outdoor activities.', 'danger');
        } else if (avg > 100) {
            addAlert('Moderate to high AQI expected. Sensitive groups should take precautions.', 'warning');
        } else {
            addAlert('Good air quality expected for the next week.', 'info');
        }

        if (trend > 20) {
            addAlert('Significant increase in AQI predicted. Monitor air quality updates.', 'warning');
        }
    }

    // Function to add alert
    function addAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert-item ${type}`;
        alertDiv.textContent = message;
        predictionAlerts.appendChild(alertDiv);
    }

    // Update predictions when city is selected
    citySelect.addEventListener('change', () => {
        const selectedCity = citySelect.value;
        if (selectedCity) {
            const data = generateAQIData(selectedCity);
            updatePredictions(data.aqi);
        }
    });
}); 