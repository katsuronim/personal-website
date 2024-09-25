function Header() {
  return (
    <>
      <div className="static flex flex-row justify-between w-full mb-8 bg-white border shadow-2xl border-slate-400 rounded-3xl">
        <div className="transition duration-150 delay-150 hover:scale-110 hover:text-teal-600">
          <a href="/Home">
            <h1 className="mx-10 my-5 text-xl font-montserrat ">
              Andreas Noah
            </h1>
          </a>
        </div>
        <div className="flex flex-row">
          <a
            href="/AboutMe"
            className="transition duration-150 delay-150 hover:scale-110 hover:text-teal-600"
          >
            <h1 className="mx-10 my-5 text-xl font-montserrat">About Me</h1>
          </a>
          {/* <h1 className="mx-10 my-5 font-sans text-xl">Portofolio</h1> */}
        </div>
      </div>
    </>
  );
}

export default Header;
