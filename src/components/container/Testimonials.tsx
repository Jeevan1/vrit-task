import data from '../../data.json';
import TesttimonialCard from '../ui/task1/TesttimonialCard';

const Testimonials = () => {
  return (
    <div className="group flex min-h-screen w-full items-center justify-center overflow-x-hidden">
      <div className="relative">
        <div className="max-w-3xl space-y-5 text-center">
          <p className="text-2xl text-gray-700">
            Hear How They Level Up Their Game!
          </p>
          <h2 className="text-3xl font-bold">
            Skill <span className="text-primary">Matters</span> Unite! 🤝
          </h2>
          <button
            type="button"
            className="group flex w-full items-center justify-center font-semibold"
          >
            View All Testimonials
            <span className="animation-arrow ml-1 pt-0.5 text-2xl transition-all duration-300 ease-in-out group-hover:translate-x-1">
              ￫
            </span>
          </button>
        </div>
        <div className="absolute inset-0">
          <div className="grid h-full w-full grid-cols-5 grid-rows-2 items-center gap-5">
            {data.testimonials.map((item, index) => (
              <TesttimonialCard
                key={item.id}
                item={item}
                index={index + 1}
                className={`testimonial__card__${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
