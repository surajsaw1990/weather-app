export const getWearSuggestion = (temperature, aqi = 0) => {
// Hot weather
if (temperature >= 30) {
return {
title: "Stay Cool & Hydrated 💧",
description:
"Avoid peak heat, use sunscreen 😎 and drink plenty of water."
};
}

// Comfortable outdoor weather
if (temperature >= 20 && temperature < 30 && aqi < 100) {
return {
title: "Perfect Day Outdoors 🌿",
description:
"Great time for workouts, walking or outdoor activities."
};
}

// Mild weather
if (temperature >= 15 && temperature < 20) {
return {
title: "Light Layers Recommended 👕",
description:
"A light jacket or full-sleeve shirt will keep you comfortable."
};
}

// Cold weather
if (temperature >= 10 && temperature < 15) {
return {
title: "Bring a Jacket 🧥",
description:
"Wear a sweater or jacket to stay warm, especially in the evening."
};
}

// Very cold
if (temperature < 10) {
return {
title: "Bundle Up ❄️",
description:
"Wear warm layers, a coat, and cover yourself properly."
};
}

// Bad AQI
if (aqi > 120) {
return {
title: "Air Quality Alert 😷",
description:
"Avoid long outdoor exposure and consider wearing a mask."
};
}

// Default
return {
title: "Comfortable Weather 🙂",
description:
"You’re good to go! Light and comfortable clothing is fine."
};
};

