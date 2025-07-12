import type { Testimonial } from '../../../types';

const TesttimonialCard = ({
  item,
  index,
  className,
}: {
  item: Testimonial;
  index: number;
  className?: string;
}) => {
  return (
    <div
      key={item.id}
      className={`relative flex h-25 w-25 items-center justify-center ${className} transition-transform duration-500 ${
        item.animation ? 'bounce' : ''
      } group/scoped`}
    >
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center rounded-3xl ${
          item.content
            ? 'transition-shadow duration-500 ease-in group-hover/scoped:bg-white group-hover/scoped:shadow-[0px_0px_10px_3px_rgba(34,_197,_94,_0.5)]'
            : ''
        }`}
      >
        <img
          src={item.image}
          alt={item.name}
          className={`h-24 w-24 rounded-3xl object-cover ${
            index <= 5
              ? 'group-hover animate-[bottom-center_0.4s_ease-in-out_forwards] group-hover:animate-[top-left_0.4s_ease-in-out_forwards]'
              : 'group-hover animate-[top-center_0.4s_ease-in-out_forwards] group-hover:animate-[bottom-left_0.4s_ease-in-out_forwards]'
          }`}
        />
      </div>

      {item?.text && (
        <div className="animation-opacity absolute inset-0 left-2/3 ml-2 flex w-max items-center">
          <div className="h-0 w-0 border-t-[7px] border-r-[10px] border-b-[7px] border-t-transparent border-r-gray-50 border-b-transparent">
            {' '}
          </div>
          <span className="relative rounded-xl bg-gray-50 px-3 py-3 text-xs text-gray-700">
            {item.text}
          </span>
        </div>
      )}
      {item?.content && (
        <div className="absolute top-1/2 left-1/2 flex max-h-0 -translate-x-1/2 scale-0 flex-col items-center transition-all duration-500 ease-in group-hover/scoped:scale-100 group-hover/scoped:transition-all group-hover/scoped:duration-500 group-hover/scoped:ease-in">
          <div className="transfotm relative top-1 inline h-0 w-0 rotate-90 border-t-[8px] border-r-[15px] border-b-[8px] border-t-transparent border-r-gray-50 border-b-transparent"></div>
          <div className="relative w-[325px] rounded-xl bg-white px-3 py-3 text-xs text-gray-700 shadow-xl">
            <p className="relative rounded-xl px-1 py-1 text-xs text-gray-700">
              {item.content.quote}
            </p>
            <div className="flex flex-col items-end">
              <b className="relative py-1 text-xs text-gray-700">{item.name}</b>
              <span className="relative text-xs text-gray-700">
                {item.content.role}
              </span>
            </div>
          </div>
        </div>
      )}
      {item?.video && (
        <div className="relative flex max-h-0 scale-0 flex-col items-center transition-all duration-500 ease-in group-hover/scoped:scale-100 group-hover/scoped:transition-all group-hover/scoped:duration-500 group-hover/scoped:ease-in">
          <div className="absolute bottom-10 left-1/2 flex w-38 -translate-x-1/2 flex-col items-center rounded-xl bg-white text-xs text-gray-700">
            <video
              src={item.video}
              controls
              className="relative rounded-xl px-1 py-1 text-xs text-gray-700"
            ></video>
            <div className="absolute -bottom-3 inline h-0 w-0 border-t-12 border-r-8 border-l-8 border-t-white border-r-transparent border-l-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TesttimonialCard;
