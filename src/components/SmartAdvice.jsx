import React from "react";

const SmartAdvice = ({ temp, aqi }) => {
if (temp === undefined) return null;

const hour = new Date().getHours();

let adviceList = [];

// AQI priority
if (aqi > 120) {
adviceList.push("😷 Air quality is poor");
adviceList.push("🚫 Avoid long outdoor exposure");
}

// Hot weather
if (temp > 30) {
adviceList.push("🥵 It's hot outside");
adviceList.push("💧 Stay hydrated");
adviceList.push("😎 Use sunscreen");
}

// Cold weather
if (temp < 15) {
adviceList.push("🧥 It's cold");
adviceList.push("🔥 Wear warm clothes");
}

// Time based
if (hour < 12) {
adviceList.push("🌤️ Fresh morning, great start to the day");
} else if (hour < 18) {
adviceList.push("🌤️ Comfortable time for outdoor activities");
} else {
adviceList.push("🌙 Calm night, best time to relax");
}

// Fallback
if (adviceList.length === 0) {
adviceList.push("🙂 Weather looks fine, enjoy!");
}

return ( <div className="glass-panel rounded-[2rem] p-6 shadow-soft"> <p className="text-xs uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
Smart Advice </p>

  <div className="mt-2 space-y-1">
    {adviceList.map((item, index) => (
      <p key={index} className="text-sm font-medium">
        {item}
      </p>
    ))}
  </div>
</div>


);
};

export default SmartAdvice;
