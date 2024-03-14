import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Course = ({ eachCourse, handleSelectCourse }) => {
   const { name, price, credit, description, photo } = eachCourse;

   return (
      <div className="card bg-base-100 shadow-xl border border-purple-300">
         <figure className="px-10 pt-10">
            <img src={photo} alt={name} className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center space-y-3">
            <h2 className="card-title text-purple-500">{name}</h2>
            <p>{description}</p>
            {/* price and credit info */}
            <div className="flex items-center justify-between w-full">
               <div className="flex items-center gap-2">
                  <span>
                     <FaDollarSign />
                  </span>
                  <span>Price : {price}</span>
               </div>
               <div className="flex items-center gap-2">
                  <span>
                     <FaBookOpen />
                  </span>
                  <span>Credit : {credit}</span>
               </div>
            </div>
            <div className="card-actions w-full">
               <button
                  className="btn btn-primary w-full"
                  onClick={() => handleSelectCourse(eachCourse)}
               >
                  Select
               </button>
            </div>
         </div>
      </div>
   );
};

Course.propTypes = {
   eachCourse: PropTypes.object.isRequired,
   handleSelectCourse: PropTypes.func.isRequired,
};

export default Course;
