import { useState } from 'react';
import StatsCard from '../ui/task3/StatsCard';
import data from '../../data.json';

const TaskThree = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-10 min-h-screen">
      <div className="max-w-7xl space-y-2">
        <h2 className="text-lg font-semibold md:text-2xl">
          Explore our classes and master trending skills!
        </h2>
        <h1 className="text-xl font-bold sm:text-2xl md:text-[32px]">
          Dive Into{' '}
          <span className="text-secondary">What’s Hot Right Now!</span> 🔥
        </h1>
        <div className="mt-6 flex w-full flex-col flex-wrap gap-8 transition-all duration-300 ease-in-out md:flex-row lg:flex-nowrap">
          {data.taskthree.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                className={`w-full cursor-pointer overflow-hidden rounded-3xl transition-[width] duration-700 ease-in-out ${
                  isActive ? 'lg:w-1/2' : 'lg:w-1/4'
                }`}
                onClick={() => setActive(index)}
              >
                <StatsCard active={isActive} data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskThree;
