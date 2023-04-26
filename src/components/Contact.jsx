import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;
const FooterImg = styled.a`
  background-color: transparent;
  border-radius: 50%;

  img {
    height: 50px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    
  }

  :hover {
    box-shadow: 0px 0px 0px 2px rgba(255, 0, 255, 0.8);
  }
`;



const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c6p7507",
        "template_9x4ekec",
        ref.current,
        "0vaM2ygpvxuEJMGg-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
   
      <Section>
        <Container>
          <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact Me</Title>
              <Input placeholder="Name" name="name" />
              <Input placeholder="Email" name="email" />
              <TextArea
                placeholder="Write your message"
                name="message"
                rows={10}
              />
              <Button type="submit">Send</Button>
              {success &&
                "Your message has been sent. I'll get back to you soon :)"}
              <Footer >
                <FooterImg
                  href="https://www.linkedin.com/in/jeremie-walls-046a13152/"
                  target="_blank"
                >
                  <img class="bot" src="./img/linkin.png" />
                </FooterImg>
                <FooterImg href="https://github.com/jwwalls" target="_blank">
                  <img class="bot" src="./img/github.png" />
                </FooterImg>
                <FooterImg
                  href="https://www.youtube.com/watch?v=kKr9-E7kS6M"
                  target="_blank"
                >
                  <img class="bot" src="./img/youtube.png" />
                </FooterImg>
              </Footer>
            </Form>
          </Left>
          <Right>
            <Map />
          </Right>
        </Container>
      </Section>
  
  );
};

export default Contact;
