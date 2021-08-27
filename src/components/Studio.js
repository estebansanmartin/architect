import React, { useEffect, useState} from 'react'
import { Container, Content, Title, Column} from 'rbx'
import About1 from '../img/about-1.jpg'

function Studio() {

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
        <div>
            <Container>
                <Content>
                    <Title className="title-galeria">Chi Siamo</Title>
                </Content>
                <Content> 
                    <Column.Group>
                        <Column size={3}>
                            <Title className="title-about" size={2}>Studio Architetti</Title>
                        </Column>
                        <Column size={9}>
                            <Title className="subtitle-about" size={3} subtitle>STUDIO ARCHITETTI fondato nel 2010 da Luigi Torinese e Marco Milanese, lo STUDIO, si occupa prevalentemente di progettazione architettonica, urbana e paesaggistica.</Title>
                        </Column>
                    </Column.Group>
                </Content>
                <Content className="parallax-content">
                    <img 
                    src={About1} 
                    alt="chi-siamo"
                    className="parallax"
                    style={{
                        transform: `translateY(${offset * -0.2}px)`
                    }}
                  />
                </Content>
                <Content>
                    <Column.Group>
                        <Column size={9}>
                            <Title subtitle className="text-studio" size={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                        </Column>
                        <Column size={3}>
                            <Title subtitle className="info-about" size={2}>Storia</Title>
                        </Column>
                    </Column.Group>  
                </Content>
                <Content>
                    <Column.Group>
                        <Column size={9}>
                        <Title subtitle className="text-studio" size={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                        </Column>
                        <Column size={3}>
                            <Title subtitle className="info-about" size={2}>Nascita</Title>
                        </Column>
                    </Column.Group>  
                </Content>
                <Content>
                    <Column.Group>
                        <Column size={9}>
                            <Title subtitle className="text-studio" size={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                        </Column>
                        <Column size={3}>
                            <Title subtitle className="info-about" size={2}>Servizi</Title>
                        </Column>
                    </Column.Group>  
                </Content>
            </Container>
        </div>
        
    )
}

export default Studio
