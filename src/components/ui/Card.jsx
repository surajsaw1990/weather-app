export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white/10 
        backdrop-blur-md 
        border border-white/20 
        rounded-2xl 
        shadow-sm 
        p-4 
        ${className}
      `}
    >
      {children}
    </div>
  );
}