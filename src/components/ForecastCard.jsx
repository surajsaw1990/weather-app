import { motion } from "framer-motion";
import Card from "./ui/Card";
import { getWeatherIconUrl } from '../utils/formatters';

function ForecastCard({ item }) {
  return (
    <>
      <h1 style={{ color: "red" }}>TEST CHANGE</h1>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="text-center space-y-3 transition hover:-translate-y-1">
          <p className="text-sm font-medium tracking-tightest">
            {item.dayLabel}
          </p>

          <img
            src={getWeatherIconUrl(item.icon)}
            alt={item.description}
            className="mx-auto h-16 w-16"
          />

          <p className="text-sm text-gray-400">
            {item.description}
          </p>

          <p className="mt-2 text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {Math.round(item.temp)}{"\u00B0C"}
          </p>
        </Card>
      </motion.div>
    </>
  );
}

export default ForecastCard;
