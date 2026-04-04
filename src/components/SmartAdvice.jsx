import React from "react";

const SmartAdvice = ({ temp, aqi }) => {
if (temp === undefined) return null;

let advice = "🙂 Enjoy your day!";

if (temp > 30) {
advice = "🥵 Stay Cool & Hydrated 💧";
}

if (aqi > 120) {
advice = "😷 Air quality is not good, be careful";
}

return ( <div className="glass-panel rounded-[2rem] p-6 shadow-soft"> <p className="text-xs uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
Smart Advice </p>

```
  <h3 className="mt-2 text-lg font-semibold">
    {advice}
  </h3>
</div>

);
};

export default SmartAdvice;
