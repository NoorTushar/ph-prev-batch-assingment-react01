import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";

function App() {
   const [courses, setCourses] = useState([]);
   const [cartCourses, setCartCourses] = useState([]);

   useEffect(() => {
      fetch("courses.json")
         .then((res) => res.json())
         .then((data) => setCourses(data));
   }, []);

   const handleRemoveCourse = (id) => {
      console.log(`removing course`, id);
      const newCartCourses = cartCourses.filter(
         (eachCartItem) => eachCartItem.id !== id
      );

      setCartCourses(newCartCourses);
      console.log(cartCourses);
   };

   const handleSelectCourse = (course) => {
      const doExist = cartCourses.find((item) => {
         return item.id == course.id;
      });

      doExist
         ? alert("Already added")
         : setCartCourses([...cartCourses, course]);
   };

   return (
      <>
         <header className="mx-auto max-w-[1170px] w-[90%] md:w-[80%] py-6">
            <h1 className=" text-3xl text-purple-500">Course Registration</h1>
         </header>
         <main className="md:flex mx-auto max-w-[1280px] w-[90%] md:w-[85%] gap-4">
            {/* left */}
            <Courses
               courses={courses}
               handleSelectCourse={handleSelectCourse}
            ></Courses>
            {/* right */}
            <Cart
               handleRemoveCourse={handleRemoveCourse}
               cartCourses={cartCourses}
            ></Cart>
         </main>
      </>
   );
}

export default App;
