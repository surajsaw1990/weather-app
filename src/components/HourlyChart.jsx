import { useEffect, useRef } from 'react';
import {
  CategoryScale,
  Chart,
  Filler,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip
} from 'chart.js';

Chart.register(
  CategoryScale,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

function HourlyChart({ hourlyData, isDarkMode }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !hourlyData.length) {
      return undefined;
    }

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels: hourlyData.map((item) => item.timeLabel),
        datasets: [
          {
            label: 'Temperature',
            data: hourlyData.map((item) => item.temp),
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.18)',
            tension: 0.35,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: {
              color: isDarkMode ? '#e2e8f0' : '#334155'
            },
            grid: {
              color: isDarkMode ? 'rgba(148, 163, 184, 0.14)' : 'rgba(148, 163, 184, 0.2)'
            }
          },
          y: {
            ticks: {
              callback: (value) => `${value}\u00B0C`,
              color: isDarkMode ? '#e2e8f0' : '#334155'
            },
            grid: {
              color: isDarkMode ? 'rgba(148, 163, 184, 0.14)' : 'rgba(148, 163, 184, 0.2)'
            }
          }
        }
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [hourlyData, isDarkMode]);

  return (
    <section className="glass-panel rounded-[2rem] p-6 shadow-soft animate-floatIn">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
        Next 24 Hours
      </p>
      <h2 className="mt-2 text-2xl font-semibold">Temperature trend</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Forecast is displayed in 3-hour intervals from OpenWeatherMap data.
      </p>
      <div className="mt-6 w-full h-[250px] sm:h-[300px]">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </section>
  );
}

export default HourlyChart;
