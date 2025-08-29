import { useState, useEffect } from 'react';

interface ClockProps {
  className?: string;
}

const Clock: React.FC<ClockProps> = ({ className = '' }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcTime = now.toISOString().slice(0, 19).replace('T', ' ');
      setCurrentTime(`${utcTime} UTC`);
    };

    // Update immediately
    updateTime();

    // Set up interval to update every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`clock ${className}`}>
      <span className="clock-label">Hora actual:</span>
      <span className="clock-time">{currentTime}</span>
    </div>
  );
};

export default Clock;