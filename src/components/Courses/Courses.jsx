import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({ courses, handleSelectCourse }) => {
   return (
      <div className="md:w-2/3">
         <h2 className="font-semibold mb-6 border text-black bg-purple-300 p-4 rounded-xl">
            Total Courses: {courses.length}
         </h2>
         <div className="grid lg:grid-cols-2 gap-6">
            {courses.map((eachCourse) => {
               return (
                  <Course
                     key={eachCourse.id}
                     eachCourse={eachCourse}
                     handleSelectCourse={handleSelectCourse}
                  ></Course>
               );
            })}
         </div>
      </div>
   );
};

Courses.propTypes = {
   courses: PropTypes.array.isRequired,
   handleSelectCourse: PropTypes.func.isRequired,
};

export default Courses;
