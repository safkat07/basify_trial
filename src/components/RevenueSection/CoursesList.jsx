import courseImg from "../../assets/courses.jpg";
import cycberCourse from "../../assets/cyberCourse.jpg";
import frontendCourse from "../../assets/frontendCourse.jpg";

const CoursesList = () => {
  const images = [courseImg, cycberCourse, frontendCourse];

  return (
    <div className="grid grid-cols-2 gap-5 px-2 items-center">
      {images.map((img, index) => (
        <div key={index} className="relative group">
          <img
            className="w-full cursor-pointer rounded-lg"
            src={img}
            alt={`Course ${index + 1}`}
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
