function Footer() {
  return (
    <>
      <div className="bottom-0">
        <h1 className="pt-10 mx-auto mt-10 mb-5 text-3xl font-bold font-montserrat">
          Contact Me
        </h1>
        <div className="grid md:w-1/3 grid-cols-3 mx-auto my-auto h-[100px] md:h-[60px]">
          <a href="https://github.com/katsuronim" target="_blank">
            <img
              className="mx-auto h-1/2 hover:scale-110"
              src="../image/github-contact.png"
              alt="github logo"
            />
          </a>
          <a href="https://www.instagram.com/andreasnoah_/" target="_blank">
            <img
              className="mx-auto h-1/2 hover:scale-110"
              src="../image/instagram.png"
              alt="instagram logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andreas-noah-jati-sesoca/"
            target="_blank"
          >
            <img
              className="mx-auto h-1/2 hover:scale-110"
              src="../image/linkedin.png"
              alt="linkedin logo"
            />
          </a>
        </div>
        <h1 className="font-montserrat">
          © AndreasNoah 2024 - All rights reserved.
        </h1>
      </div>
    </>
  );
}

export default Footer;
