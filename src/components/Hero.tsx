import { FC } from "react";
import { Balancer } from "react-wrap-balancer";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">
        Culinary<span className="text-primary">Wizard</span>
      </h1>
      <Balancer className="text-lg md:text-2xl lg:text-4xl">
        Recipies without the Life Stories
      </Balancer>
    </div>
  );
};

export default Hero;
