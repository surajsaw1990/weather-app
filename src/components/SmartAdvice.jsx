import React from "react";

const SmartAdvice = ({ temp, aqi, condition }) => {
if (temp === undefined) return null;

const hour = new Date().getHours();
const weather = (condition || "").toLowerCase();

let adviceList = [];

const isRainy =
weather.includes("rain") ||
weather.includes("drizzle") ||
weather.includes("thunderstorm");

const isSnowy = weather.includes("snow");

const isFoggy =
weather.includes("mist") ||
weather.includes("fog") ||
weather.includes("haze") ||
weather.includes("smoke");

// 1) Highest priority: risky air quality
if (aqi > 150) {
adviceList.push("😷 Poor air quality");
adviceList.push("🚫 Avoid outdoor activity");
} else if (aqi > 100) {
adviceList.push("🌫️ Air quality is not ideal");
adviceList.push("😷 Limit long outdoor exposure");
}

// 2) Weather condition priority
if (isRainy) {
adviceList.push("🌧️ Rain expected");
adviceList.push("☔ Carry an umbrella");
} else if (isSnowy) {
adviceList.push("❄️ Snowy conditions");
adviceList.push("🧥 Wear warm layers");
} else if (isFoggy) {
adviceList.push("🌫️ Low visibility outside");
adviceList.push("⚠️ Travel carefully");
}

// 3) Temperature priority
if (temp >= 36) {
adviceList.push("🥵 Extreme heat outside");
adviceList.push("💧 Stay hydrated");
} else if (temp >= 31) {
adviceList.push("☀️ Hot weather outside");
adviceList.push("😎 Use sunscreen");
} else if (temp <= 12) {
adviceList.push("🧥 Cold weather");
adviceList.push("🔥 Wear warm clothes");
} else if (temp >= 24 && temp < 31 && !isRainy && aqi <= 100) {
adviceList.push("🌤️ Pleasant weather");
}

// 4) Time-based advice only when weather is not risky
const riskyForOutdoors =
aqi > 100 || temp >= 31 || temp <= 12 || isRainy || isSnowy || isFoggy;

if (!riskyForOutdoors) {
if (hour >= 5 && hour < 11) {
adviceList.push("🌤️ Fresh morning, great start");
} else if (hour >= 11 && hour < 17) {
adviceList.push("☀️ Good time to stay active");
} else if (hour >= 17 && hour < 20) {
adviceList.push("🌆 Nice evening to step outside");
} else {
adviceList.push("🌙 Calm night, time to relax");
}
} else {
if (hour >= 20 || hour < 5) {
adviceList.push("🌙 Better to relax indoors tonight");
}
}

// 5) Remove duplicates and keep it clean
adviceList = [...new Set(adviceList)].slice(0, 3);

// 6) Safe fallback
if (adviceList.length === 0) {
adviceList = ["🙂 Weather looks comfortable right now"];
}

return ( <div className="glass-panel rounded-[2rem] p-6 shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"> <p className="text-xs uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
Smart Advice </p>

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
