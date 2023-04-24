import { IoMdFitness } from "react-icons/io";
import { ImBooks, ImNewspaper } from "react-icons/im";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { TbMeat } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneXFill } from "react-icons/bs";
import { GiCobra } from "react-icons/gi";

const RnrTVLogo = () => {
  return (
      <IoMdFitness />
  );
};
const About = () => {
  return (
      <ImBooks />
  );
};
const Movie = () => {
  return (
      <MdOutlineSportsKabaddi />
  );
};
const Eat = () => {
  return (
      <TbMeat />
  );
};
const News = () => {
  return (
      <ImNewspaper />
  );
};
const Instagram = () => {
  return (
      <BsInstagram />
  );
};
const Number = () => {
  return (
      <BsFillTelephoneXFill />
  );
};
const Cobra = () => {
  return (
      <GiCobra />
  );
};
const Icon = ({ name }) => {
  const icons = {
    rnrtv: RnrTVLogo,
    about: About,
    movie:Movie,
    eat:Eat,
    news:News,
    instagram:Instagram,
    number:Number,
    cobra:Cobra

  };

  const Component = icons[name];
  return <Component />;
};
export { Icon };
