import PropTypes from "prop-types";

const Cart = ({ cartCourses, handleRemoveCourse }) => {
   console.log(cartCourses);

   return (
      <div className="md:w-1/3">
         <div className="mb-6 border text-black bg-purple-300 p-4 rounded-xl">
            <h3 className="font-semibold">Credit Hours Remaining: 7 hr</h3>
         </div>

         <div>
            {cartCourses.map((eachCartItem) => {
               return (
                  <div key={eachCartItem.id} className="mb-4 space-y-4">
                     <h3 className="text-xl">
                        <span className="text-purple-500 font-medium">
                           Course Name:
                        </span>{" "}
                        {eachCartItem.name}
                     </h3>
                     <button
                        onClick={() => handleRemoveCourse(eachCartItem.id)}
                        className="btn btn-primary  btn-sm"
                     >
                        Remove
                     </button>
                  </div>
               );
            })}
         </div>
         <div>Total Credit Hour: 13</div>
         <div>Total Price: ${}</div>
      </div>
   );
};

Cart.propTypes = {
   cartCourses: PropTypes.array.isRequired,
   handleRemoveCourse: PropTypes.func.isRequired,
};

export default Cart;
