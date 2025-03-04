interface SkillCardProps {
  tittle: string;
  paragraph: string;
  img: any;
  dataAOS?: string;
}
const SkillCard = ({ tittle, paragraph, img, dataAOS }: SkillCardProps) => {
  return (
    <div
      data-aos={dataAOS}
      className="bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 transition"
    >
      <img src={img} alt={tittle} className="w-12 h-12 mx-auto" />
      <p className="mt-3 font-semibold text-white">{tittle}</p>
      <p className="text-gray-400 text-sm mt-1">{paragraph}</p>
    </div>
  );
};
export default SkillCard;
