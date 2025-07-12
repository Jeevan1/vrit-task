import data from '../../data.json';
import TaskTwoCard from '../ui/TaskTwoCard';

const TaskTwo = () => {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center px-4">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-16">
          {data.tasktwo.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex h-[340px] cursor-pointer rounded-3xl ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                } ${item.slides.length && 'group'} overflow-visible`}
              >
                {item.slides && <TaskTwoCard item={item} isEven={isEven} />}
                <div
                  className={`z-40 flex transform items-center justify-end rounded-3xl p-8 duration-500 ease-in group-hover:z-[-1] group-hover:translate-x-[-120%] group-hover:opacity-0 ${
                    isEven ? '' : 'flex-row-reverse'
                  }`}
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`float-bounce absolute bottom-[-80px] z-10 h-full w-[256px] min-w-[256px] scale-115 rounded-2xl object-contain transition-transform duration-500 ${
                      !isEven ? 'right-[-50px]' : 'left-[-80px]'
                    }`}
                  />
                  <div
                    className={`flex w-full flex-col justify-center space-y-2 text-white ${
                      isEven ? 'items-end text-right' : 'items-start text-left'
                    }`}
                  >
                    <h2 className="text-2xl font-bold md:text-[32px]">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xl font-semibold md:text-[24px]">
                      {item.subtitle}
                    </p>
                    <p className="mt-2 w-[calc(100%-166px)] pt-3 text-sm font-semibold text-gray-300 md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskTwo;
