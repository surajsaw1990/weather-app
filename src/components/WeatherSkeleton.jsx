import React from "react";
import "./skeleton.css";

const WeatherSkeleton = () => {
return ( <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6 w-full">

  {/* LEFT MAIN CARD */}
  <section className="space-y-6 lg:col-span-2 w-full">

    {/* Weather Card Skeleton */}
    <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
      <div className="h-6 w-32 skeleton rounded mb-4"></div>
      <div className="h-12 w-40 skeleton rounded mb-4"></div>
      <div className="h-4 w-24 skeleton rounded"></div>
    </div>

    {/* Hourly Chart Skeleton */}
    <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
      <div className="h-6 w-40 skeleton rounded mb-4"></div>
      <div className="h-32 w-full skeleton rounded"></div>
    </div>

  </section>

  {/* RIGHT SIDE CARDS */}
  <aside className="space-y-6 w-full">

    {/* Smart Advice */}
    <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
      <div className="h-4 w-28 skeleton rounded mb-3"></div>
      <div className="h-3 w-40 skeleton rounded mb-2"></div>
      <div className="h-3 w-32 skeleton rounded"></div>
    </div>

    {/* Wear Suggestion */}
    <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
      <div className="h-4 w-32 skeleton rounded mb-3"></div>
      <div className="h-3 w-40 skeleton rounded mb-2"></div>
      <div className="h-3 w-36 skeleton rounded"></div>
    </div>

    {/* AQI */}
    <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
      <div className="h-4 w-20 skeleton rounded mb-3"></div>
      <div className="h-6 w-16 skeleton rounded"></div>
    </div>

  </aside>

</div>

);
};

export default WeatherSkeleton;
