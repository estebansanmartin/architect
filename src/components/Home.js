import { Button, Container, Column, Image, Icon, Title, Card, Media } from 'rbx'
import React, { useState, useEffect } from 'react'

function Home() {

    const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);



    return (
        //------NOVEDADES IMAGENES
        <div> 
            {/* <div className="header">
                <Container className="header-center">
                    <Title align="center" className="title-header">
                    Esteban San Martin 
                    </Title>
                    <p className="text-header">Architetto</p>
                    <Button size="large">Per saperne di più</Button>
                </Container>
            </div> */}

           {/*  <Content size="large">
                <Title className="text-movie">
                    <div className="text-movies">
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                        <span className="vintage">EDILIZIA </span>
                    </div>
                </Title>
            </Content> */}
            <Container>
                <Image.Container>
                    <Image loading="lazy" style={{
                        transform: `translateY(${offset * -0.3}px)`
                    }} className="image-architetto reveal" src="https://images.pexels.com/photos/5806989/pexels-photo-5806989.jpeg" />
                </Image.Container>
                <Title className="reveal home-about" size={1}>Studio Architetti</Title>
               
                <div className="reveal button-home">
                <Button style={{backgroundColor:"var(--negro)"}} as="a" href="/contatti" size="large">
                    {/* <Icon size="large">
                        <Contactless className="icon-button" />
                    </Icon> */}
                    Contattaci
                </Button>
                </div>
                {/*<Title className="text-reveal header-about">Studio di architetti con sede a Torino.</Title>  */} 
            </Container>
            
        </div>
    )
}

export default Home
