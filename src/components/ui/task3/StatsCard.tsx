import type { TaskThree } from '../../../types';

const StatsCard = ({ active, data }: { active: boolean; data: TaskThree }) => {
  return (
    <div
      className={`relative flex h-[540px] w-full flex-col justify-between rounded-4xl md:h-[460px] ${
        active ? 'p-10' : 'bg-secondary/10 p-6'
      }`}
    >
      {active ? (
        <div className="animation-fill" />
      ) : (
        <div className="animation-fill-reverse" />
      )}

      {/* Wrapper */}
      <div className={`flex h-full flex-col justify-between`}>
        <div
          className={`transition-all duration-500 ease-in-out ${
            active
              ? 'pointer-events-auto mb-4 translate-y-0 opacity-100'
              : 'pointer-events-none mb-0 translate-y-2 opacity-0'
          }`}
        >
          <a
            href="#"
            className="group flex items-center justify-end gap-2 text-end text-xl font-semibold text-white"
          >
            View All Courses{' '}
            <span className="transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:animate-[arrow_1s_ease-in-out_infinite]">
              <img
                src="/assets/arrow-right.png"
                alt="arrow"
                className="w-4 pt-2 invert"
              />
            </span>
          </a>
        </div>

        {/* Image Grid */}
        <div
          className={`${
            active
              ? 'visible grid h-full min-h-[185px] animate-[slide-left_1s_ease-in-out] grid-cols-4 items-center gap-5 opacity-100'
              : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          {data.images.map((img: string, i: number) => (
            <div key={i} className="col-span-1 flex justify-center">
              <img
                src={img}
                alt={img}
                className={`h-[75px] w-[75px] object-contain`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div
          className={`flex items-center ${
            active
              ? 'flex-row-reverse gap-6'
              : 'h-full flex-col justify-between py-4'
          }`}
        >
          {/* Text */}
          <div
            className={`flex min-h-[145px] w-[360px] flex-col justify-center text-[18px] leading-6 md:w-auto ${
              active
                ? 'animation-rotate text-white'
                : 'text-secondary mt-6 origin-center -rotate-90 transform ps-8'
            }`}
          >
            <h2 className="pr-8 text-3xl font-bold">{data.title}</h2>
            <p className="pt-[10px] pr-8">{data.description}</p>
          </div>

          <div
            className={`${
              active
                ? 'animate-[slide_0.5s_ease-in-out] text-white'
                : 'text-secondary'
            }`}
          >
            <span className="relative text-[150px] leading-none font-bold after:absolute after:top-1 after:-right-5 after:text-[64px] after:content-['+']">
              05
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
