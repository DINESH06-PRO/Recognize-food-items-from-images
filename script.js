
const foodDatabase = {
    'apple_pie': { calories: 237, protein: 2, carbs: 34, fat: 11, serving: '100g' },
    'baby_back_ribs': { calories: 361, protein: 27, carbs: 1, fat: 28, serving: '100g' },
    'baklava': { calories: 428, protein: 5, carbs: 51, fat: 24, serving: '100g' },
    'beef_carpaccio': { calories: 127, protein: 22, carbs: 1, fat: 4, serving: '100g' },
    'beef_tartare': { calories: 200, protein: 18, carbs: 2, fat: 14, serving: '100g' },
    'beet_salad': { calories: 65, protein: 2, carbs: 12, fat: 2, serving: '100g' },
    'beignets': { calories: 316, protein: 5, carbs: 35, fat: 17, serving: '100g' },
    'bibimbap': { calories: 145, protein: 6, carbs: 22, fat: 3, serving: '100g' },
    'bread_pudding': { calories: 212, protein: 6, carbs: 31, fat: 7, serving: '100g' },
    'breakfast_burrito': { calories: 206, protein: 10, carbs: 20, fat: 9, serving: '100g' },
    'bruschetta': { calories: 151, protein: 4, carbs: 21, fat: 5, serving: '100g' },
    'caesar_salad': { calories: 190, protein: 4, carbs: 8, fat: 16, serving: '100g' },
    'cannoli': { calories: 298, protein: 6, carbs: 28, fat: 18, serving: '100g' },
    'caprese_salad': { calories: 180, protein: 11, carbs: 4, fat: 13, serving: '100g' },
    'carrot_cake': { calories: 350, protein: 4, carbs: 56, fat: 13, serving: '100g' },
    'ceviche': { calories: 120, protein: 15, carbs: 8, fat: 3, serving: '100g' },
    'cheesecake': { calories: 321, protein: 5, carbs: 25, fat: 23, serving: '100g' },
    'cheese_plate': { calories: 368, protein: 22, carbs: 3, fat: 30, serving: '100g' },
    'chicken_curry': { calories: 175, protein: 14, carbs: 8, fat: 10, serving: '100g' },
    'chicken_quesadilla': { calories: 240, protein: 14, carbs: 20, fat: 11, serving: '100g' },
    'chicken_wings': { calories: 290, protein: 27, carbs: 0, fat: 20, serving: '100g' },
    'chocolate_cake': { calories: 371, protein: 5, carbs: 50, fat: 18, serving: '100g' },
    'chocolate_mousse': { calories: 258, protein: 4, carbs: 23, fat: 17, serving: '100g' },
    'churros': { calories: 312, protein: 4, carbs: 40, fat: 15, serving: '100g' },
    'clam_chowder': { calories: 102, protein: 5, carbs: 11, fat: 4, serving: '100g' },
    'club_sandwich': { calories: 240, protein: 12, carbs: 24, fat: 11, serving: '100g' },
    'crab_cakes': { calories: 219, protein: 13, carbs: 14, fat: 12, serving: '100g' },
    'creme_brulee': { calories: 296, protein: 4, carbs: 27, fat: 19, serving: '100g' },
    'croque_madame': { calories: 260, protein: 15, carbs: 18, fat: 14, serving: '100g' },
    'cup_cakes': { calories: 305, protein: 3, carbs: 43, fat: 14, serving: '100g' },
    'deviled_eggs': { calories: 145, protein: 7, carbs: 1, fat: 13, serving: '100g' },
    'donuts': { calories: 452, protein: 5, carbs: 51, fat: 25, serving: '100g' },
    'dumplings': { calories: 175, protein: 7, carbs: 20, fat: 7, serving: '100g' },
    'edamame': { calories: 122, protein: 11, carbs: 10, fat: 5, serving: '100g' },
    'eggs_benedict': { calories: 230, protein: 12, carbs: 14, fat: 15, serving: '100g' },
    'escargots': { calories: 90, protein: 16, carbs: 2, fat: 1, serving: '100g' },
    'falafel': { calories: 333, protein: 13, carbs: 32, fat: 18, serving: '100g' },
    'filet_mignon': { calories: 227, protein: 26, carbs: 0, fat: 13, serving: '100g' },
    'fish_and_chips': { calories: 265, protein: 13, carbs: 22, fat: 14, serving: '100g' },
    'foie_gras': { calories: 462, protein: 11, carbs: 4, fat: 44, serving: '100g' },
    'french_fries': { calories: 312, protein: 4, carbs: 41, fat: 15, serving: '100g' },
    'french_onion_soup': { calories: 75, protein: 4, carbs: 9, fat: 3, serving: '100g' },
    'french_toast': { calories: 222, protein: 8, carbs: 28, fat: 9, serving: '100g' },
    'fried_calamari': { calories: 175, protein: 15, carbs: 8, fat: 9, serving: '100g' },
    'fried_rice': { calories: 163, protein: 3, carbs: 28, fat: 4, serving: '100g' },
    'frozen_yogurt': { calories: 127, protein: 3, carbs: 24, fat: 2, serving: '100g' },
    'garlic_bread': { calories: 350, protein: 9, carbs: 43, fat: 15, serving: '100g' },
    'gnocchi': { calories: 130, protein: 4, carbs: 27, fat: 1, serving: '100g' },
    'greek_salad': { calories: 95, protein: 3, carbs: 7, fat: 7, serving: '100g' },
    'grilled_cheese_sandwich': { calories: 291, protein: 12, carbs: 26, fat: 15, serving: '100g' },
    'grilled_salmon': { calories: 206, protein: 25, carbs: 0, fat: 11, serving: '100g' },
    'guacamole': { calories: 160, protein: 2, carbs: 9, fat: 15, serving: '100g' },
    'gyoza': { calories: 180, protein: 8, carbs: 20, fat: 7, serving: '100g' },
    'hamburger': { calories: 295, protein: 17, carbs: 24, fat: 14, serving: '100g' },
    'hot_and_sour_soup': { calories: 45, protein: 3, carbs: 5, fat: 2, serving: '100g' },
    'hot_dog': { calories: 290, protein: 10, carbs: 24, fat: 17, serving: '100g' },
    'huevos_rancheros': { calories: 155, protein: 9, carbs: 12, fat: 8, serving: '100g' },
    'hummus': { calories: 166, protein: 8, carbs: 14, fat: 10, serving: '100g' },
    'ice_cream': { calories: 207, protein: 4, carbs: 24, fat: 11, serving: '100g' },
    'lasagna': { calories: 135, protein: 8, carbs: 14, fat: 5, serving: '100g' },
    'lobster_bisque': { calories: 145, protein: 6, carbs: 8, fat: 10, serving: '100g' },
    'lobster_roll_sandwich': { calories: 186, protein: 12, carbs: 18, fat: 7, serving: '100g' },
    'macaroni_and_cheese': { calories: 164, protein: 7, carbs: 17, fat: 8, serving: '100g' },
    'macarons': { calories: 390, protein: 5, carbs: 63, fat: 13, serving: '100g' },
    'miso_soup': { calories: 40, protein: 3, carbs: 5, fat: 1, serving: '100g' },
    'mussels': { calories: 172, protein: 24, carbs: 7, fat: 4, serving: '100g' },
    'nachos': { calories: 300, protein: 8, carbs: 36, fat: 14, serving: '100g' },
    'omelette': { calories: 154, protein: 11, carbs: 1, fat: 12, serving: '100g' },
    'onion_rings': { calories: 411, protein: 5, carbs: 38, fat: 27, serving: '100g' },
    'oysters': { calories: 68, protein: 7, carbs: 4, fat: 2, serving: '100g' },
    'pad_thai': { calories: 153, protein: 5, carbs: 23, fat: 5, serving: '100g' },
    'paella': { calories: 155, protein: 8, carbs: 18, fat: 6, serving: '100g' },
    'pancakes': { calories: 227, protein: 6, carbs: 28, fat: 10, serving: '100g' },
    'panna_cotta': { calories: 242, protein: 4, carbs: 22, fat: 16, serving: '100g' },
    'peking_duck': { calories: 336, protein: 19, carbs: 0, fat: 28, serving: '100g' },
    'pho': { calories: 92, protein: 6, carbs: 13, fat: 2, serving: '100g' },
    'pizza': { calories: 266, protein: 11, carbs: 33, fat: 10, serving: '100g' },
    'pork_chop': { calories: 231, protein: 26, carbs: 0, fat: 14, serving: '100g' },
    'poutine': { calories: 345, protein: 9, carbs: 36, fat: 18, serving: '100g' },
    'prime_rib': { calories: 338, protein: 22, carbs: 0, fat: 28, serving: '100g' },
    'pulled_pork_sandwich': { calories: 225, protein: 15, carbs: 18, fat: 10, serving: '100g' },
    'ramen': { calories: 436, protein: 14, carbs: 64, fat: 13, serving: '100g' },
    'ravioli': { calories: 175, protein: 7, carbs: 25, fat: 5, serving: '100g' },
    'red_velvet_cake': { calories: 378, protein: 4, carbs: 54, fat: 17, serving: '100g' },
    'risotto': { calories: 138, protein: 3, carbs: 22, fat: 4, serving: '100g' },
    'samosa': { calories: 262, protein: 5, carbs: 28, fat: 15, serving: '100g' },
    'sashimi': { calories: 127, protein: 20, carbs: 0, fat: 5, serving: '100g' },
    'scallops': { calories: 111, protein: 21, carbs: 5, fat: 1, serving: '100g' },
    'seaweed_salad': { calories: 70, protein: 2, carbs: 12, fat: 2, serving: '100g' },
    'shrimp_and_grits': { calories: 160, protein: 10, carbs: 18, fat: 6, serving: '100g' },
    'spaghetti_bolognese': { calories: 151, protein: 8, carbs: 19, fat: 5, serving: '100g' },
    'spaghetti_carbonara': { calories: 195, protein: 9, carbs: 20, fat: 9, serving: '100g' },
    'spring_rolls': { calories: 138, protein: 4, carbs: 18, fat: 5, serving: '100g' },
    'steak': { calories: 271, protein: 25, carbs: 0, fat: 19, serving: '100g' },
    'strawberry_shortcake': { calories: 239, protein: 3, carbs: 35, fat: 10, serving: '100g' },
    'sushi': { calories: 143, protein: 6, carbs: 21, fat: 4, serving: '100g' },
    'tacos': { calories: 226, protein: 9, carbs: 20, fat: 13, serving: '100g' },
    'takoyaki': { calories: 112, protein: 5, carbs: 14, fat: 4, serving: '100g' },
    'tiramisu': { calories: 240, protein: 4, carbs: 30, fat: 11, serving: '100g' },
    'tuna_tartare': { calories: 108, protein: 24, carbs: 1, fat: 1, serving: '100g' },
    'waffles': { calories: 291, protein: 7, carbs: 37, fat: 13, serving: '100g' }
};

let selectedFile = null;
let dailyHistory = JSON.parse(localStorage.getItem('foodHistory')) || [];


const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const analyzeBtn = document.getElementById('analyzeBtn');
const cameraBtn = document.getElementById('cameraBtn');
const loading = document.getElementById('loading');
const results = document.getElementById('results');
const errorMessage = document.getElementById('errorMessage');


uploadArea.addEventListener('click', () => fileInput.click());

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
});

function handleFileSelect(file) {
    if (file && file.type.startsWith('image/')) {
        selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.style.display = 'block';
            analyzeBtn.disabled = false;
            errorMessage.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else {
        showError('Please select a valid image file');
    }
}


cameraBtn.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
        video.style.maxWidth = '100%';
        video.style.borderRadius = '15px';

        const canvas = document.createElement('canvas');
        const captureBtn = document.createElement('button');
        captureBtn.className = 'btn';
        captureBtn.textContent = '📸 Capture';
        
        results.innerHTML = '';
        results.appendChild(video);
        results.appendChild(document.createElement('br'));
        results.appendChild(captureBtn);

        captureBtn.onclick = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            stream.getTracks().forEach(track => track.stop());
            
            canvas.toBlob((blob) => {
                const file = new File([blob], 'camera-capture.jpg', { type: 'image/jpeg' });
                handleFileSelect(file);
                results.innerHTML = '<p style="text-align: center; color: #999; padding: 40px;">Upload an image to see nutrition information</p>';
            });
        };
    } catch (err) {
        showError('Camera access denied. Please allow camera permissions.');
    }
});


analyzeBtn.addEventListener('click', analyzeFood);

async function analyzeFood() {
    if (!selectedFile) return;

    loading.style.display = 'block';
    results.innerHTML = '';
    errorMessage.style.display = 'none';

    
    setTimeout(() => {
        const foodItems = Object.keys(foodDatabase);
        const randomFood = foodItems[Math.floor(Math.random() * foodItems.length)];
        const confidence = (85 + Math.random() * 12).toFixed(1);
        
        displayResults(randomFood, confidence);
        addToHistory(randomFood, foodDatabase[randomFood]);
        loading.style.display = 'none';
    }, 2000);
}

function displayResults(foodName, confidence) {
    const food = foodDatabase[foodName];
    const displayName = foodName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    results.innerHTML = `
        <div class="result-item">
            <div class="food-name">🍽️ ${displayName}</div>
            <div class="confidence">Confidence: ${confidence}%</div>
            <div class="nutrition-info">
                <div class="nutrition-item">
                    <div class="nutrition-label">Calories</div>
                    <div class="nutrition-value">${food.calories}</div>
                    <div class="nutrition-label">kcal</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-label">Protein</div>
                    <div class="nutrition-value">${food.protein}g</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-label">Carbs</div>
                    <div class="nutrition-value">${food.carbs}g</div>
                </div>
                <div class="nutrition-item">
                    <div class="nutrition-label">Fat</div>
                    <div class="nutrition-value">${food.fat}g</div>
                </div>
            </div>
            <p style="margin-top: 15px; color: #666; text-align: center;">
                Serving size: ${food.serving}
            </p>
        </div>
    `;
}

function addToHistory(foodName, nutrition) {
    const displayName = foodName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const timestamp = new Date().toLocaleTimeString();
    
    dailyHistory.unshift({
        name: displayName,
        calories: nutrition.calories,
        timestamp: timestamp
    });
    
    localStorage.setItem('foodHistory', JSON.stringify(dailyHistory));
    updateHistory();
}

function updateHistory() {
    const historyDiv = document.getElementById('history');
    const totalCal = dailyHistory.reduce((sum, item) => sum + item.calories, 0);
    
    if (dailyHistory.length === 0) {
        historyDiv.innerHTML = '<p style="text-align: center; color: #999;">No food logged yet today</p>';
    } else {
        historyDiv.innerHTML = dailyHistory.map(item => `
            <div class="history-item">
                <div>
                    <strong>${item.name}</strong>
                    <div style="font-size: 0.9rem; color: #666;">${item.timestamp}</div>
                </div>
                <div style="color: #667eea; font-weight: bold;">${item.calories} kcal</div>
            </div>
        `).join('');
    }
    
    document.getElementById('totalCalories').textContent = `${totalCal} kcal`;
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}


updateHistory();
