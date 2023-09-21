import { FC } from "react";
import { Balancer } from "react-wrap-balancer";
import { Badge } from "../ui/badge";
import HeroInput from "./HeroInput";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div>
      <Badge className="px-4 py-1" variant={"outline"}>
        Alpha 1.0
      </Badge>
      <h1 className="mt-2 font-bold text-5xl md:text-6xl lg:text-8xl">
        Culinary<span className="text-primary">Wizard</span>
      </h1>
      <Balancer className="text-lg md:text-2xl lg:text-4xl lg:mt-4">
        Recipies without the Life Stories
      </Balancer>
      <HeroInput />
    </div>
  );
};

export default Hero;
