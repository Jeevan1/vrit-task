import { useEffect, useState } from 'react';

const getRandomIndexes = (count: number, max: number) => {
  const indexes = new Set<number>();
  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * max));
  }
  return Array.from(indexes);
};

const VideoTask = () => {
  const [highlightedIndexes, setHighlightedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const initialIndexes = getRandomIndexes(9, 160);
    setHighlightedIndexes(initialIndexes);
    const interval = setInterval(() => {
      const newIndexes = getRandomIndexes(9, 160);
      setHighlightedIndexes(newIndexes);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 flex min-h-screen items-center justify-center">
      <div className="flex flex-wrap">
        {Array(160)
          .fill(0)
          .map((_, index) => {
            const isHighlighted = highlightedIndexes.includes(index);

            return (
              <div
                key={index}
                className={`flex h-20 min-w-16 flex-1 items-center justify-center border border-gray-200 transition-colors duration-500 ${
                  isHighlighted ? 'bg-blue-500' : 'bg-white'
                }`}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default VideoTask;
