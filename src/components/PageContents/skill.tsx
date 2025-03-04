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
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-6">
          My Skills Experience
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20">
          <SkillCard
            dataAOS="fade-right"
            tittle="HTML"
            paragraph="Markup language for structuring web content."
            img={HtmlSVG}
          />
          <SkillCard
            tittle="CSS"
            dataAOS="zoom-in"
            paragraph="Styles and layouts for modern web design."
            img={CssSVG}
          />
          <SkillCard
            tittle="JS"
            dataAOS="zoom-in"
            paragraph="Essential for dynamic web interactions."
            img={JSSVG}
          />
          <SkillCard
            tittle="Kali Linux"
            dataAOS="fade-left"
            paragraph="Security-focused OS for ethical hacking.."
            img={KaliSVG}
          />
          <SkillCard
            tittle="Tailwind CSS"
            dataAOS="fade-right"
            paragraph="Utility-first framework for rapid styling."
            img={TailwindCSSSVG}
          />
          <SkillCard
            tittle="ReactJS"
            dataAOS="zoom-in"
            paragraph="Fast, scalable, and efficient for modern web apps."
            img={ReactSVG}
          />
          <SkillCard
            tittle="Python"
            dataAOS="zoom-in"
            paragraph="Versatile programming language for automation, data science, and web development."
            img={PythonSVG}
          />
          <SkillCard
            tittle="C#"
            dataAOS="fade-left"
            paragraph="Powerful language for applications & game development."
            img={CsharpSVG}
          />
          <SkillCard
            tittle="C++"
            dataAOS="fade-right"
            paragraph="General-purpose programming language known for high performance and system-level programming."
            img={CPlusPlus}
          />
          <SkillCard
            tittle="PHP"
            dataAOS="zoom-in"
            paragraph="Server-side scripting language for building dynamic and interactive web applications."
            img={PhpSVG}
          />
          <SkillCard
            tittle="TypeScript"
            dataAOS="zoom-in"
            paragraph="Superset of JavaScript adding static types for scalable and maintainable code."
            img={TypeScriptSVG}
          />
          <SkillCard
            tittle="MySQL"
            dataAOS="fade-left"
            paragraph="Relational database management system for storing and managing structured data."
            img={SqlSVG}
          />
        </div>
      </div>
    </>
  );
};

export default Skill;
