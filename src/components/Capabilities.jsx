import ThreeDScene from "./ThreeDScene";

function Capabilities() {
  return (
    <>
      <section className="flex flex-col">
        <h1 className="pt-10 mx-auto mt-10 mb-5 text-3xl font-bold font-montserrat">
          Skills
        </h1>
        <div className="grid items-center grid-cols-2 gap-5 mt-5 md:grid-cols-5">
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating zoom"
            src="/image/html.png"
            alt="html icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/javascript.png"
            alt="javascript icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/css.png"
            alt="css icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/laravel.png"
            alt="laravel icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/reactjs.png"
            alt="react icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/php.png"
            alt="php icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/mysql.png"
            alt="mysql icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/tailwindcss.png"
            alt="tailwindcss icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/bootstrap.png"
            alt="bootstrap icon"
          />
          <img
            className="mx-auto transition-opacity duration-300 delay-200 cursor-pointer floating hover:ease-in"
            src="/image/vuejs.png"
            alt="vuejs icon"
          />
          <img
            className="col-span-2 mx-auto transition-opacity duration-300 delay-200 cursor-pointer md:col-span-5 floating hover:ease-in"
            src="/image/github.png"
            alt="github icon"
          />
        </div>
      </section>
    </>
  );
}

export default Capabilities;
