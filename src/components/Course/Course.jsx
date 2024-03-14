import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";

const Course = ({ eachCourse }) => {
   const { name, price, credit, description, photo } = eachCourse;

   return (
      <div className="card bg-base-100 shadow-xl">
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
                  <span></span>
               </div>
               <div className="flex items-center gap-2">
                  <span>
                     <FaBookOpen />
                  </span>
                  <span>Credit : {credit}</span>
                  <span></span>
               </div>
            </div>
            <div className="card-actions w-full">
               <button className="btn btn-primary w-full">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

Course.propTypes = {
   eachCourse: PropTypes.object.isRequired,
};

export default Course;
