function ProjectOne() {
  return (
    <>
      <a href="https://bebras.uajy.ac.id/" target="_blank">
        <div className="w-full md:w-1/2 gap-x-10 p-10 mt-10 transition duration-150 delay-150 bg-slate-100 backdrop-blur-lg shadow-xl hover:shadow-[5px_10px_20px_5px_rgba(148,163,184,1)] hover:scale-105 rounded-3xl">
          <img
            src="./image/ProjectOne.png"
            className="shadow-xl rounded-xl"
            alt="ProjectOne Image"
          />
          <h1 className="my-10 text-2xl font-bold font-montserrat">
            Website Bebras Biro UAJY
          </h1>
          <h1 className="hidden text-justify md:block font-montserrat">
            This website serves as a dedicated platform for the Bebras Bureau of
            UAJY, offering a wide range of features to support various
            activities. Users can access and complete practice exercises to
            prepare for the Bebras Challenge, register for Bebras events, and
            verify their accounts conveniently through WhatsApp. The site also
            includes a comprehensive content management system (CMS) that allows
            administrators to efficiently manage data and oversee website
            operations.
          </h1>
          <h1 className="text-justify md:hidden font-montserrat">
            This website is designed for the Bebras Bureau of UAJY. It provides
            features such as practice exercises, registration for Bebras events,
            account verification via WhatsApp, CMS data management by the admin,
            and much more.
          </h1>
        </div>
      </a>
    </>
  );
}

export default ProjectOne;
