import Footer from "../components/Footer";
import Header from "../components/Header";

function Aboutme() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-10">
          <div className="w-1/2 my-auto">
            <h1 className="text-3xl font-bold text-left font-montserrat">
              About Me
            </h1>
            <h1 className="mt-5 mb-3 text-justify font-montserrat">
              Hello! I'm a fresh graduate passionate about programming and
              technology. I have a keen interest in deepening my knowledge in
              web development, focusing on both front-end and back-end
              technologies. The power of code fascinates me, especially how it
              can create innovative solutions and enhance user experiences.
            </h1>
            <h1 className="text-justify font-montserrat">
              In my free time, I enjoy drawing and expressing my creativity
              through art. I also love learning how to create games, exploring
              the intricacies of game design and development. On weekends, you
              can find me on the soccer field, playing and enjoying the
              camaraderie of the game. I'm eager to continue growing in the tech
              field and look forward to new challenges that come my way!
            </h1>
            <a
              href="https://drive.google.com/drive/folders/1zIOeZo_ZoFL54yaeW7tp3HnplorKJEL3?usp=sharing"
              target="_blank"
            >
              <h1 className="px-5 py-3 text-left transition duration-150 delay-150 border hover:scale-110 hover:border-teal-600 hover:text-teal-600 border-slate-400 w-fit rounded-xl mt-7 font-montserrat">
                {" "}
                My Resume
              </h1>
            </a>
          </div>
          <div className="grid w-1/2 grid-cols-2 shadow-xl">
            <img
              className="col-span-2 transition rounded-t-lg duration-250 delay-250 hover:shadow-xl hover:rounded-lg hover:scale-105"
              src="./image/portrait.jpeg"
              alt="Noah's portrait"
            />
            <img
              className="transition duration-250 delay-250 hover:shadow-xl hover:rounded-lg hover:scale-105 rounded-bl-xl"
              src="./image/portrait-2.jpeg"
              alt="Noah's portrait"
            />
            <img
              className="transition duration-250 delay-250 hover:shadow-xl hover:rounded-lg hover:scale-105 rounded-br-xl"
              src="./image/portrait-3.jpeg"
              alt="Noah's portrait"
            />
          </div>
        </div>
      </div>

      <div className="px-20 py-10 mx-auto my-20 border-t border-b border-slate-400 w-fit">
        <h1 className="font-montserrat">
          If you have any further questions, please don’t hesitate to reach out
          to me.
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default Aboutme;
