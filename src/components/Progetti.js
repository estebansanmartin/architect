import React from 'react'
import { Tag, Container, Content, Title, Card, Column, Image, Media, Icon } from 'rbx'
import { FavoriteBorder } from '@material-ui/icons'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slide101 from '../img/galleria/slide1/01.jpg'
import Slide102 from '../img/galleria/slide1/02.jpg'
import Slide103 from '../img/galleria/slide1/03.jpg'
import Slide201 from '../img/galleria/slide2/01.jpg'
import Slide202 from '../img/galleria/slide2/02.jpg'
import Slide203 from '../img/galleria/slide2/03.jpg'
import Slide204 from '../img/galleria/slide2/04.jpg'

function Tienda() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    
    return (
        <div>
            <Container>
                <Content>
                    <Title className="reveal title-galeria">Progetti</Title>
                </Content>
    
                <Column.Group centered>

                    <Column size={6}>
                    <Card className="reveal card-novedades">
                           {/*  <Icon className="favorite">
                                <FavoriteBorder className="favorites" />
                            </Icon> */}
                        <Card.Image>
                            <Image.Container>
                                <AutoplaySlider
                                    play={true}
                                    cancelOnInteraction={false} // should stop playing on user interaction
                                    interval={4500}
                                    bullets={false}
                                >
                                    <div data-src={Slide101} />
                                    <div data-src={Slide102} />
                                    <div data-src={Slide103} />
                                </AutoplaySlider>
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                                <Media>
                                    <Media.Item>
                                        <Title as="p" size={1}>
                                        Residenziale Palace
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                        TORINO
                                        </Title>
                                    </Media.Item>
                                </Media>
                                <Content className="texto-card">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.
                                </Content>
                            </Card.Content>
                    </Card>
                    </Column>


                    <Column size={6}>
                    <Card className="reveal card-novedades">
                        {/* <Icon className="favorite">
                             <FavoriteBorder className="favorites" />
                        </Icon> */}
                        <Card.Image>
                            <Image.Container>
                                <AutoplaySlider
                                    play={true}
                                    cancelOnInteraction={false} // should stop playing on user interaction
                                    interval={5000}
                                    bullets={false}
                                >
                                    <div data-src={Slide201} />
                                    <div data-src={Slide202} />
                                    <div data-src={Slide203} />
                                    <div data-src={Slide204} />
                                </AutoplaySlider>
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                                <Media>
                                    <Media.Item>
                                        <Title as="p" size={1}>
                                        Residenziale Turin
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                        TORINO
                                        </Title>
                                    </Media.Item>
                                </Media>
                                <Content className="texto-card">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.
                                </Content>
                            </Card.Content>
                    </Card>
                    </Column>


                    <Column size={6}>
                    <Card className="reveal card-novedades">
                           {/*  <Icon className="favorite">
                                <FavoriteBorder className="favorites" />
                            </Icon> */}
                        <Card.Image>
                            <Image.Container>
                                <AutoplaySlider
                                    play={true}
                                    cancelOnInteraction={false} // should stop playing on user interaction
                                    interval={4500}
                                    bullets={false}
                                >
                                    <div data-src={Slide101} />
                                    <div data-src={Slide102} />
                                    <div data-src={Slide103} />
                                </AutoplaySlider>
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                                <Media>
                                    <Media.Item>
                                        <Title as="p" size={1}>
                                        Residenziale Palace
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                        TORINO
                                        </Title>
                                    </Media.Item>
                                </Media>
                                <Content className="texto-card">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.
                                </Content>
                            </Card.Content>
                    </Card>
                    </Column>


                    <Column size={6}>
                    <Card className="reveal card-novedades">
                        {/* <Icon className="favorite">
                             <FavoriteBorder className="favorites" />
                        </Icon> */}
                        <Card.Image>
                            <Image.Container>
                                <AutoplaySlider
                                    play={true}
                                    cancelOnInteraction={false} // should stop playing on user interaction
                                    interval={5000}
                                    bullets={false}
                                >
                                    <div data-src={Slide201} />
                                    <div data-src={Slide202} />
                                    <div data-src={Slide203} />
                                    <div data-src={Slide204} />
                                </AutoplaySlider>
                            </Image.Container>
                        </Card.Image>
                        <Card.Content>
                                <Media>
                                    <Media.Item>
                                        <Title as="p" size={1}>
                                        Residenziale Turin
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                        TORINO
                                        </Title>
                                    </Media.Item>
                                </Media>
                                <Content className="texto-card">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.
                                </Content>
                            </Card.Content>
                    </Card>
                    </Column>

                    </Column.Group>

            </Container>
        </div>
    )
}

export default Tienda
