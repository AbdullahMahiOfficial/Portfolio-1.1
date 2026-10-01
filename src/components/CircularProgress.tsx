import { useEffect, useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  label: string;
  shouldAnimate: boolean;

}

const CircularProgress = ({ percentage, label, shouldAnimate }: CircularProgressProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, percentage]);

  	const getColor = () => {
  if (percentage >= 91) return '#2E7D32';       // Deep Green - Excellent
  if (percentage >= 81) return '#EF6C00';       // Burnt Orange - Very Good
  if (percentage >= 71) return '#FBC02D';       // Golden Yellow - Good
  if (percentage >= 61) return '#1976D2';       // Corporate Blue - Fair
  if (percentage >= 51) return '#6A1B9A';       // Deep Purple - Needs Improvement
  return '#616161';                             // Neutral Gray - Low
	};

  // const getColor = () => {
  //   if (percentage === 100) return '#10B981'; // Green
  //   if (percentage >= 70) return '#F59E0B'; // Yellow
  //   return '#EF4444'; // Red
  // };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={getColor()}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-foreground">{animatedPercentage}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-foreground">{label}</span>
    </div>
  );
};

export default CircularProgress;