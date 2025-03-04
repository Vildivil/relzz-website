import FacebookSVG from "../../assets/svg/asset-facebook.svg";
import InstagramSVG from "../../assets/svg/asset-instagram.svg";
import LinkedInSVG from "../../assets/svg/asset-linkedin.svg";
import TwitterSvg from "../../assets/svg/asset-x.svg";
import IllustrationSVG from "../../assets/svg/illustration.svg";
import GmailSVG from "../../assets/svg/asset-gmail.svg";

const Header = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-20 text-center md:text-left ">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Yo! I'm Farel,
          <br />a code explorer.
        </h1>
        <p className="text-md md:text-lg text-black mt-4">
          Let's collaborate on your next project.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="mailto:sevenrelzz@gmail.com?subject=Halo Farel!&body=Saya ingin menghubungi Anda."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Let's work
            </button>
          </a>
          <a href="/project">
            <button className="border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition hover:scale-105">
              See my work
            </button>
          </a>
        </div>

        <div className="mt-6 flex justify-center md:justify-start gap-4 text-2xl">
          <a href="https://www.facebook.com/farel.gans.1291">
            <img
              src={FacebookSVG}
              alt="Facebook"
              className="w-8 h-8 hover:scale-105 transition"
            />
          </a>
          <a href="https://www.instagram.com/sevenrelzz/">
            <img
              src={InstagramSVG}
              alt="Instagram"
              className="w-8 h-8 hover:scale-105 transition"
            />
          </a>
          <a href="https://x.com/AmrullohFarel">
            <img
              src={TwitterSvg}
              alt="Twitter"
              className="w-8 h-8 hover:scale-105 transition"
            />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-farel-amrulloh-7b747b34b/">
            <img
              src={LinkedInSVG}
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-105 transition"
            />
          </a>
          <a href="mailto:sevenrelzz@gmail.com?subject=Halo Farel!&body=Saya ingin menghubungi Anda.">
            <img
              src={GmailSVG}
              alt="Gmail"
              className="w-8 h-8 hover:scale-105 transition"
            />
          </a>
        </div>
      </div>

      <div
        data-aos="zoom-out-up"
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <img
          src={IllustrationSVG}
          alt="Illustration"
          className="w-60 sm:w-72 md:w-80 lg:w-96"
        />
      </div>
    </div>
  );
};

export default Header;
