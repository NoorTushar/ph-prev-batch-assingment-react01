import PropTypes from "prop-types";

const Cart = ({ cartCourses }) => {
   console.log(cartCourses);

   return (
      <div className="md:w-1/3">
         <div className="mb-6 border text-black bg-purple-300 p-4 rounded-xl">
            <h3 className="font-semibold">Credit Hours Remaining: 7 hr</h3>
         </div>

         {cartCourses.map((eachCartItem) => {
            return (
               <div key={eachCartItem.id}>Course Name: {eachCartItem.name}</div>
            );
         })}
         <div>Total Credit Hour: 13</div>
         <div>Total Price: ${}</div>
      </div>
   );
};

Cart.propTypes = {
   cartCourses: PropTypes.array.isRequired,
};

export default Cart;
