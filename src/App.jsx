import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";

function App() {
   const [courses, setCourses] = useState([0]);

   useEffect(() => {
      fetch("courses.json")
         .then((res) => res.json())
         .then((data) => setCourses(data));
   }, []);

   return (
      <>
         <header className="mx-auto max-w-[1170px] w-[90%] md:w-[80%] py-6">
            <h1 className=" text-3xl text-purple-500">Course Registration</h1>
         </header>
         <main className="md:flex mx-auto max-w-[1170px] w-[90%] md:w-[80%]">
            {/* left */}
            <Courses courses={courses}></Courses>
            {/* right */}
            <Cart></Cart>
         </main>
      </>
   );
}

export default App;
