import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface PixelProgressProps {
  onComplete?: () => void;
  duration?: number;
  showMagicText?: boolean;
}

const PixelProgress = ({ onComplete, duration = 3000, showMagicText = true }: PixelProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Загружаем магию...');
  const [isComplete, setIsComplete] = useState(false);

  const magicTexts = [
    'Загружаем магию...',
    'Создаём портал...',
    'Шифруем заклинания...',
    'Связываемся с серверами...',
    'Активируем защиту...',
    'Магия готова! ✨'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (duration / 50));
        
        // Обновляем текст в зависимости от прогресса
        if (showMagicText) {
          const textIndex = Math.floor((newProgress / 100) * (magicTexts.length - 1));
          setCurrentText(magicTexts[Math.min(textIndex, magicTexts.length - 1)]);
        }
        
        if (newProgress >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete, showMagicText]);

  return (
    <div className="w-full max-w-md mx-auto">
      {showMagicText && (
        <div className="mb-4 text-center">
          <p className="font-pixel text-xs text-purple-200 mb-2">{currentText}</p>
          <div className="flex justify-center items-center space-x-2">
            <Icon 
              name="Sparkles" 
              className={`text-purple-400 ${isComplete ? 'animate-bounce' : 'animate-pulse'}`} 
              size={16} 
            />
            <Icon 
              name="Zap" 
              className={`text-yellow-400 ${progress > 50 ? 'animate-pulse' : 'opacity-30'}`} 
              size={16} 
            />
            <Icon 
              name="Shield" 
              className={`text-green-400 ${progress > 80 ? 'animate-pulse' : 'opacity-30'}`} 
              size={16} 
            />
          </div>
        </div>
      )}
      
      {/* Пиксельная рамка progress bar */}
      <div className="relative">
        {/* Внешняя пиксельная рамка */}
        <div className="relative bg-black border-2 border-white p-1" 
             style={{
               clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
             }}>
          
          {/* Внутренняя область progress bar */}
          <div className="relative h-6 bg-gray-800 overflow-hidden"
               style={{
                 clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 2px, 100% 100%, 2px 100%, 0 calc(100% - 2px))'
               }}>
            
            {/* Заполнение progress bar */}
            <div 
              className={`h-full transition-all duration-200 ease-out ${
                isComplete 
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400' 
                  : 'bg-gradient-to-r from-purple-600 to-purple-400'
              }`}
              style={{ 
                width: `${progress}%`,
                clipPath: 'polygon(0 0, calc(100% - 1px) 0, 100% 1px, 100% 100%, 1px 100%, 0 calc(100% - 1px))'
              }}
            >
              {/* Пиксельный блеск */}
              <div className="h-full w-full relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"
                  style={{
                    transform: `translateX(-100%)`,
                    animation: progress > 0 && progress < 100 
                      ? 'pixelShine 1.5s infinite linear' 
                      : 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Процент */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-pixel text-xs text-white drop-shadow-lg">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>
      
      {/* Пиксельные искры */}
      {progress > 0 && (
        <div className="flex justify-center mt-3 space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 bg-purple-400 ${
                progress > (i + 1) * 20 ? 'animate-pulse' : 'opacity-30'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PixelProgress;