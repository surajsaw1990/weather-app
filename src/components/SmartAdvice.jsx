import React from "react";

const SmartAdvice = ({ temp, aqi }) => {
if (temp === undefined) return null;

const hour = new Date().getHours();

let adviceList = [];

// 🕒 TIME FIRST (fix priority)
if (hour >= 6 && hour < 12) {
adviceList.push("🌤️ Fresh morning, great start");
} else if (hour >= 12 && hour < 18) {
adviceList.push("🚶 Comfortable time for outdoors");
} else {
adviceList.push("🌙 Calm night, best time to relax");
}

// 🌡️ Temperature logic
if (temp >= 30) {
adviceList.push("🥵 Hot weather outside");
adviceList.push("💧 Stay hydrated");
adviceList.push("😎 Use sunscreen");
} else if (temp >= 24) {
adviceList.push("🌤️ Pleasant weather");
} else if (temp < 15) {
adviceList.push("🧥 Cold weather");
adviceList.push("🔥 Wear warm clothes");
}

// 🌫️ AQI logic
if (aqi > 120) {
adviceList.push("😷 Poor air quality");
} else if (aqi > 80) {
adviceList.push("🌫️ Slight pollution, be cautious");
}

// 🎯 LIMIT (max 3 lines = premium clean)
adviceList = adviceList.slice(0, 3);

return ( <div className="glass-panel rounded-[2rem] p-6 shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"> 
    <p className="text-xs uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
        Smart Advice
    </p>

  <div className="mt-2 space-y-1">
    {adviceList.map((item, index) => (
      <p key={index} className="text-sm text-slate-700 dark:text-slate-300">
        {item}
      </p>
    ))}
  </div>
</div>

);
};

export default SmartAdvice;
