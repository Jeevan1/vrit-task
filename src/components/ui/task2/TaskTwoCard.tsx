import { useState } from 'react';
import type { TaskTwo } from '../../../types';

const TaskTwoCard = ({ item, isEven }: { item: TaskTwo; isEven: boolean }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="absolute inset-0 min-h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      {
        <div>
          <div className="absolute inset-0 z-50 flex h-full w-full justify-baseline overflow-hidden">
            <h1
              className={`absolute top-6 right-18 left-18 text-xl font-semibold text-white ${
                isEven ? 'text-right' : 'text-left'
              }`}
            >
              {item.slides[active]?.title}
            </h1>
            <div className="mt-8 flex justify-center">
              <img
                src={item.slides[active]?.image}
                alt={item.title}
                className="aspect-video object-contain"
              />
            </div>
          </div>
        </div>
      }
      <div
        className="h-full w-full"
        style={{
          backgroundColor: item.color,
          clipPath: `polygon( 94.595% 0%,94.595% 0%,95.471% 0.123%,96.303% 0.478%,97.079% 1.047%,97.787% 1.811%,98.417% 2.749%,98.957% 3.842%,99.397% 5.072%,99.724% 6.418%,99.929% 7.862%,100% 9.384%,100% 28.688%,100% 28.688%,99.938% 29.658%,99.763% 30.557%,99.488% 31.377%,99.128% 32.112%,98.695% 32.753%,98.205% 33.295%,97.671% 33.728%,97.107% 34.047%,96.527% 34.244%,95.946% 34.311%,95.946% 34.311%,94.494% 34.514%,93.116% 35.103%,91.832% 36.046%,90.659% 37.31%,89.615% 38.863%,88.721% 40.674%,87.993% 42.711%,87.45% 44.941%,87.11% 47.332%,86.993% 49.853%,86.993% 49.853%,87.11% 52.374%,87.45% 54.766%,87.993% 56.996%,88.721% 59.033%,89.615% 60.844%,90.659% 62.397%,91.832% 63.661%,93.116% 64.604%,94.494% 65.192%,95.946% 65.396%,95.946% 65.396%,96.527% 65.463%,97.107% 65.66%,97.671% 65.978%,98.205% 66.412%,98.695% 66.953%,99.128% 67.595%,99.488% 68.329%,99.763% 69.15%,99.938% 70.048%,100% 71.018%,100% 90.616%,100% 90.616%,99.929% 92.138%,99.724% 93.582%,99.397% 94.928%,98.957% 96.158%,98.417% 97.251%,97.787% 98.189%,97.079% 98.953%,96.303% 99.522%,95.471% 99.877%,94.595% 100%,5.405% 100%,5.405% 100%,4.529% 99.877%,3.697% 99.522%,2.921% 98.953%,2.213% 98.189%,1.583% 97.251%,1.043% 96.158%,0.603% 94.928%,0.276% 93.582%,0.071% 92.138%,0% 90.616%,0% 71.018%,0% 71.018%,0.062% 70.048%,0.237% 69.15%,0.512% 68.329%,0.872% 67.595%,1.305% 66.953%,1.795% 66.412%,2.329% 65.978%,2.893% 65.66%,3.473% 65.463%,4.054% 65.396%,4.054% 65.396%,5.506% 65.192%,6.884% 64.604%,8.168% 63.661%,9.341% 62.397%,10.385% 60.844%,11.279% 59.033%,12.007% 56.996%,12.55% 54.766%,12.89% 52.374%,13.007% 49.853%,13.007% 49.853%,12.89% 47.332%,12.55% 44.941%,12.007% 42.711%,11.279% 40.674%,10.385% 38.863%,9.341% 37.31%,8.168% 36.046%,6.884% 35.103%,5.506% 34.514%,4.054% 34.311%,4.054% 34.311%,3.473% 34.244%,2.893% 34.047%,2.329% 33.728%,1.795% 33.295%,1.305% 32.753%,0.872% 32.112%,0.512% 31.377%,0.237% 30.557%,0.062% 29.658%,0% 28.688%,0% 9.384%,0% 9.384%,0.071% 7.862%,0.276% 6.418%,0.603% 5.072%,1.043% 3.842%,1.583% 2.749%,2.213% 1.811%,2.921% 1.047%,3.697% 0.478%,4.529% 0.123%,5.405% 0%,94.595% 0% )`,
        }}
      ></div>
      <div className="absolute top-1/2 left-0 z-50 -translate-y-1/2 transform">
        <button
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-lg"
          onClick={() =>
            setActive((active - 1 + item.slides.length) % item.slides.length)
          }
        >
          <img
            src="/assets/arrow-left.png"
            alt=""
            className="h-8 w-8 object-contain"
          />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 z-50 -translate-y-1/2 transform">
        <button
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full shadow-lg"
          onClick={() => setActive((active + 1) % item.slides.length)}
        >
          <img
            src="/assets/arrow-right.png"
            alt=""
            className="h-7 w-7 object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default TaskTwoCard;
