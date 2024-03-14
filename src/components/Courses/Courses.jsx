import PropTypes from "prop-types";
import Course from "../Course/Course";

const Courses = ({ courses }) => {
   return (
      <div className="md:w-2/3">
         <h2 className="text-2xl mb-6">Total Courses: {courses.length}</h2>
         <div className="grid lg:grid-cols-3">
            {courses.map((eachCourse) => {
               return (
                  <Course key={eachCourse.id} eachCourse={eachCourse}></Course>
               );
            })}
         </div>
      </div>
   );
};

Courses.propTypes = {
   courses: PropTypes.array.isRequired,
};

export default Courses;
