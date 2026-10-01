import { useEffect, useState } from 'react';

interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
  shouldAnimate: boolean;
  
}

const AnimatedProgressBar = ({ label, percentage, shouldAnimate }: AnimatedProgressBarProps) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);

const getColorByPercentage = (percentage: number): string => {
  if (percentage >= 90) return '#2E7D32';       // Deep Green - Excellent
  if (percentage >= 80) return '#EF6C00';       // Burnt Orange - Very Good
  if (percentage >= 70) return '#FBC02D';       // Golden Yellow - Good
  if (percentage >= 60) return '#1976D2';       // Corporate Blue - Fair
  if (percentage >= 50) return '#6A1B9A';       // Deep Purple - Needs Improvement
  return '#616161';                             // Neutral Gray - Low
};
  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setAnimatedWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, percentage]);

  // const getColorClass = () => {
  //   switch (color) {
  //     case 'high':
  //       return 'bg-skill-high';
  //     case 'medium':
  //       return 'bg-skill-medium';
  //     case 'low':
  //       return 'bg-skill-low';
  //     default:
  //       return 'bg-skill-high';
  //   }
  // };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out } `}
          style={{ width: `${animatedWidth}%`,backgroundColor: getColorByPercentage(percentage), }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;