import React from "react";

const DailyBrief = ({ weather, aqi }) => {
if (!weather) return null;

const temp = weather?.main?.temp ? Math.round(weather.main.temp) : "--";
const city = weather?.name || "Your City";
const aqiValue = aqi || "--";

let advice = [];

if (temp !== "--" && temp > 32) advice.push("🔥 Avoid going out in afternoon");
if (aqiValue !== "--" && aqiValue > 150) advice.push("😷 Wear a mask outside");
if (temp !== "--" && temp > 25) advice.push("💧 Drink more water");
if (temp !== "--" && temp > 28) advice.push("😎 Use sunscreen");

const getGreeting = () => {
const hour = new Date().getHours();
if (hour < 12) return "Good Morning ☀️";
if (hour < 18) return "Good Afternoon 🌤️";
return "Good Evening 🌙";
};

return (
<div style={{
background: "linear-gradient(135deg, #1e3c72, #2a5298)",
color: "white",
padding: "20px",
borderRadius: "15px",
marginBottom: "20px",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
}}>
<h2 style={{ marginBottom: "10px" }}>
{getGreeting()} </h2>

```
  <p><strong>{city}</strong></p>
  <p>🌡️ {temp}°C</p>
  <p>🌫️ AQI: {aqiValue}</p>

  <div style={{ marginTop: "10px" }}>
    {advice.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
</div>

);
};

export default DailyBrief;
