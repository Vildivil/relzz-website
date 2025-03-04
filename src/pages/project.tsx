import { FaExternalLinkAlt, FaRegLightbulb } from "react-icons/fa";
import FaMovieImg from "../assets/images/FaMOVIE.png";
import NusantaraNetImg from "../assets/images/ISP.png";
import PortofolioImg from "../assets/images/Portofolio.png";
import CoffeeSVG from "../assets/images/Coffee.png";
import Layout from "../components/Layout";

const projects = [
  {
    title: "FaMovie",
    description:
      "A simple web application featuring a landing page for movie collections. Built using only HTML, CSS, and a bit of JavaScript for interactivity.",
    image: FaMovieImg,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://faa-movie.vercel.app/",
  },
  {
    title: "NusantaraNet ISP",
    description:
      "A web-based ISP management system designed to handle users, billing, and service subscriptions. Developed using HTML, CSS, JavaScript, and PHP for backend functionality.",
    image: NusantaraNetImg,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://nusantara-net.vercel.app/",
  },
  {
    title: "Portofolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experiences. Built with HTML, CSS, and JavaScript for a modern and responsive UI.",
    image: PortofolioImg,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://portofolio-for-high-school-student.vercel.app/",
  },
];

const Project = () => {
  return (
    <Layout>
      <div className="w-full flex items-center justify-center">
        <img
          src={CoffeeSVG}
          alt="Project Banner"
          className="w-60 sm:w-72 md:w-80 lg:w-96"
        />
      </div>

      <div className="bg-white-900 min-h-screen p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-out-down"
              className="p-5 rounded-lg shadow-lg bg-[#1E293B] text-neutral-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 text-yellow-400">
                {project.title}
              </h2>
              <p className="mt-2">{project.description}</p>
              <div className="flex gap-2 mt-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded text-sm shadow-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black cursor-pointer shadow-lg"
                  aria-label={`Visit ${project.title}`}
                >
                  <FaExternalLinkAlt />
                </a>

                <FaRegLightbulb className="text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
