import TaskThree from '../components/container/TaskThree';
import TaskTwo from '../components/container/TaskTwo';
import Testimonials from '../components/container/Testimonials';
import VideoTask from '../components/container/VideoTask';

const Homepage = () => {
  return (
    <>
      <section className="flex flex-col gap-20 py-20">
        <div className="px-4">
          <p className="text-primary mb-4 text-2xl font-bold">1. Task 1</p>
          <Testimonials />
        </div>
        <div className="px-4">
          <p className="text-primary mb-4 text-2xl font-bold">2. Task 2</p>
          <TaskTwo />
        </div>

        <div className="px-4">
          <p className="text-primary mb-4 text-2xl font-bold">3. Task 3</p>
          <TaskThree />
        </div>
        <div className="px-4">
          <p className="text-primary mb-4 text-2xl font-bold">4. Video Task</p>
          <VideoTask />
        </div>
      </section>
    </>
  );
};

export default Homepage;
