import { useEffect, useState } from "react";

function Introduction() {
  return (
    <>
      <div className="flex flex-row gap-20 pt-14">
        <div className="my-auto text-left">
          <h1 className="my-5 text-3xl font-bold typewriter font-montserrat">
            Hi! I'm Andreas Noah Jati Sesoca
          </h1>
          <h1 className="text-justify font-montserrat">
            I’m a dedicated Fullstack Web Developer with a strong passion for
            learning and evolving with the latest technologies. I enjoy working
            on both frontend and backend development to create efficient and
            user-friendly solutions. I’m always eager to take on new challenges
            that push my skills further and allow me to grow as a developer. I
            believe in continuous improvement and strive to deliver high-quality
            work in every project I undertake. Let’s connect and create
            something amazing together!
          </h1>
        </div>
        <img
          src="/image/portrait.jpeg"
          alt="Noah's Portrait"
          className="w-1/3 transition duration-150 ease-in-out delay-150 h-fit rounded-3xl hover:scale-110 hover:outline-teal-600 hover:outline hover:ease-in-out"
        />
      </div>
    </>
  );
}

export default Introduction;
