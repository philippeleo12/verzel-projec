import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Nosso trabalho é fazer</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              sua <span>rotina</span> mais organizada.
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}></motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
        Bem vindo ao mais inovador sistema de cadastro da Web,
        faça seu login e embarque nessa aventura.
        </motion.p>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
