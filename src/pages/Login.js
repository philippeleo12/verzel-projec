import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

//Images

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  lineAnim,
} from "../animation";
import { FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton } from '../components/LoginElements'
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Login
      style={{ background: "#1b1b1b" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Movie>
        <motion.h2 variants={fade}>Faça seu Login</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <FormWrap>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Bem Vindo a Verzel!</FormH1>
                            <FormLabel htmlFor='for'></FormLabel>
                            <FormInput type='email' placeholder="Digite seu e-mail..." required />
                            <FormLabel htmlFor='for'></FormLabel>
                            <FormInput type='password' placeholder="Digite sua senha..." required />
                          <Link to="/login/painel">
                            <Hide>
                              <FormButton type='submit'>Entrar</FormButton>
                            </Hide>
                        </Link>
                        </Form>
                       
                    </FormContent>
                    
        </FormWrap>
  
      </Movie>

      <ScrollTop />
    </Login>
  );
};

const Login = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
