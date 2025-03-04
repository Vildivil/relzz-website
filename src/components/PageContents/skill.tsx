import SkillCard from "../SkillCard";
import HtmlSVG from "../../assets/svg/asset-html.svg";
import CssSVG from "../../assets/svg/asset-css.svg";
import KaliSVG from "../../assets/svg/asset-kali.svg";
import ReactSVG from "../../assets/svg/asset-react.svg";
import CsharpSVG from "../../assets/svg/asset-csharp.svg";
import TailwindCSSSVG from "../../assets/svg/asset-tailwind.svg";
import JSSVG from "../../assets/svg/asset-js.svg";
import PythonSVG from "../../assets/svg/asset-python.svg";
import PhpSVG from "../../assets/svg/asset-php.svg";
import CPlusPlus from "../../assets/svg/asset-c++.svg";
import TypeScriptSVG from "../../assets/svg/asset-typescript.svg";
import SqlSVG from "../../assets/svg/asset-sql.svg";

const Skill = () => {
  return (
    <>
      <div data-aos="zoom-out-down" className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">
          My Skills Experience
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20">
          <SkillCard
            tittle="HTML"
            paragraph="Markup language for structuring web content."
            img={HtmlSVG}
          />
          <SkillCard
            tittle="CSS"
            paragraph="Styles and layouts for modern web design."
            img={CssSVG}
          />
          <SkillCard
            tittle="JS"
            paragraph="Essential for dynamic web interactions."
            img={JSSVG}
          />
          <SkillCard
            tittle="Kali Linux"
            paragraph="Security-focused OS for ethical hacking.."
            img={KaliSVG}
          />
          <SkillCard
            tittle="Tailwind CSS"
            paragraph="Utility-first framework for rapid styling."
            img={TailwindCSSSVG}
          />
          <SkillCard
            tittle="ReactJS"
            paragraph="Fast, scalable, and efficient for modern web apps."
            img={ReactSVG}
          />
          <SkillCard
            tittle="Python"
            paragraph="Versatile programming language for automation, data science, and web development."
            img={PythonSVG}
          />
          <SkillCard
            tittle="C#"
            paragraph="Powerful language for applications & game development."
            img={CsharpSVG}
          />
          <SkillCard
            tittle="C++"
            paragraph="General-purpose programming language known for high performance and system-level programming."
            img={CPlusPlus}
          />
          <SkillCard
            tittle="PHP"
            paragraph="Server-side scripting language for building dynamic and interactive web applications."
            img={PhpSVG}
          />
          <SkillCard
            tittle="TypeScript"
            paragraph="Superset of JavaScript adding static types for scalable and maintainable code."
            img={TypeScriptSVG}
          />
          <SkillCard
            tittle="MySQL"
            paragraph="Relational database management system for storing and managing structured data."
            img={SqlSVG}
          />
        </div>
      </div>
    </>
  );
};

export default Skill;
