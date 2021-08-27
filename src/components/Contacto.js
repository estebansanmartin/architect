import React from 'react'
import { Media, Label, Container, Content, Title, Column, Image, Field, Control, Input, Textarea, Button, Card} from 'rbx'
import { Map, AlternateEmail, PhoneAndroid } from '@material-ui/icons'
import { Icon } from '@material-ui/core'
import { Facebook, Instagram } from '@material-ui/icons'
import Box from '@material-ui/core/Box'

function Contacto() {

    return (
        <div>
            <Container>
                <Content>
                    <Title className="title-galeria">Contatti</Title>
                </Content>
                <Content>
                    <Title className="font-contact-1" size={2}>Chiedici Informazioni</Title>
                    <Title className="font-contact" subtitle size={3}>Per qualsiasi informazione non esitare a contattarci, ti risponderemo il prima possibile.</Title>
                    <Column.Group>
                        <Column className="box-contact sombra" size={4}>
                            <Title className="font-contact" size={4} >
                            <Icon className="icon-contact">
                                <Map fontSize="large" style={{ color:"var(--rojo2)", fontSize:"80" }} />
                            </Icon>
                            Via Belmonte 1313
                            </Title>
                        </Column>
                        <Column className="box-contact sombra" size={4}>
                            <Title className="font-contact" size={4} >
                            <Icon className="icon-contact">
                                <AlternateEmail fontSize="large" style={{ color:"var(--rojo2)", fontSize:"80" }} />
                            </Icon>
                            info@gmail.com
                            </Title>
                        </Column>
                        <Column className="box-contact sombra" size={4}>
                            <Title className="font-contact" size={4} >
                            <Icon className="icon-contact">
                                <PhoneAndroid fontSize="large" style={{ color:"var(--rojo2)", fontSize:"80" }} />
                            </Icon>
                            333 3333333
                            </Title>
                        </Column>
                    </Column.Group>                
                </Content>
                
                <Column.Group centered className="reveal form" >
                    <Column size={6}>
                        <form>

                            <Field>
                                <Control>
                                    <Label>Nome</Label>
                                    <Input type="text" />
                                </Control>
                            </Field>

                            <Field>
                                <Control>
                                    <Label>Email</Label>
                                    <Input type="email" />
                                </Control>
                            </Field>

                            <Field>
                                <Control>
                                    <Label>Messaggio</Label>
                                    <Textarea />
                                </Control>
                            </Field>

                            <Field kind="group">
                                <Control>
                                    <Button color="link">Invia</Button>
                                </Control>
                                <Control>
                                    <Button color="danger">Cancella</Button>
                                </Control>
                            </Field>
                        </form>
                    </Column>
                    <Column size={6}>
                        <Image src="https://images.pexels.com/photos/6952281/pexels-photo-6952281.jpeg" />
                    </Column>
                </Column.Group>

                <Column.Group>
                    <Column size={3}>
                        <div className="team sombra">
                            <Title className="team-text">TEAM</Title>
                        </div>
                    </Column>

                    <Column size={3}>
                        <Card>
                            <Card.Content className="sombra">
                                <Media>
                                    <Media.Item as="figure"  style={{marginRight:"10px"}}>
                                        <Image.Container as="p" size="1by1">
                                            <Image alt="torinese" src="https://images.freejpg.com.ar/900/2606/classy-man-posing-grayscale-adult-person-black-and-white-F100029008.jpg" />
                                        </Image.Container>
                                    </Media.Item>
                                    <Media.Item>
                                        <Title as="p" size={3}>
                                            Luigi
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                            info@gmail.com
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                            333 3333333
                                        </Title>
                                    </Media.Item>
                                </Media>
                                <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.
                                </Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item as="p">
                                        <Icon>
                                            <Facebook />
                                        </Icon>
                                    </Card.Footer.Item>
                                    <Card.Footer.Item as="p">
                                        <Icon>
                                            <Instagram />
                                        </Icon>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card.Content>
                        </Card>
                    </Column>

                   
                    <Column size={3}>
                        <Card>
                            <Card.Content className="sombra">
                                <Media>
                                    <Media.Item as="figure"  style={{marginRight:"10px"}}>
                                        <Image.Container as="p" size="1by1">
                                            <Image alt="torinese" src="https://www.freejpg.com.ar/image-900/4b/4bab/F100012453-hombre_joven_con_gafas_y_gorro_posando.jpg" />
                                        </Image.Container>
                                    </Media.Item>
                                    <Media.Item>
                                        <Title as="p" size={3}>
                                            Marco
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                            info@gmail.com
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                            333 3333333
                                        </Title>
                                    </Media.Item>
                                </Media>
                                <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.
                                </Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item as="p">
                                        <Icon>
                                            <Facebook />
                                        </Icon>
                                    </Card.Footer.Item>
                                    <Card.Footer.Item as="p">
                                        <Icon>
                                            <Instagram />
                                        </Icon>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card.Content>
                        </Card>
                    </Column>

                    <Column size={3}>
                        <Card>
                            <Card.Content className="sombra">
                                <Media>
                                    <Media.Item as="figure" style={{marginRight:"10px"}} >
                                        <Image.Container as="p" size="1by1">
                                            <Image alt="torinese" src="https://images.freejpg.com.ar/900/0705/elevator-building-person-waiting-man-business-executive-F100025613.jpg" />
                                        </Image.Container>
                                    </Media.Item>
                                    <Media.Item>
                                        <Title as="p" size={3}>
                                            Stefano
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                            info@gmail.com
                                        </Title>
                                        <Title as="p" subtitle size={6}>
                                            333 3333333
                                        </Title>
                                    </Media.Item>
                                </Media>
                                <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neciaculis mauris.
                                </Content>
                                <Card.Footer as="footer">
                                    <Card.Footer.Item as="p">
                                        <Icon>
                                            <Facebook />
                                        </Icon>
                                    </Card.Footer.Item>
                                    <Card.Footer.Item as="p">
                                        <Icon>
                                            <Instagram />
                                        </Icon>
                                    </Card.Footer.Item>
                                </Card.Footer>
                            </Card.Content>
                        </Card>
                    </Column>

                </Column.Group>

                <Column.Group centered>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11267.389035856919!2d7.6699955!3d45.0888904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sit!4v1626793889847!5m2!1ses!2sit" width="800" height="600" allowfullscreen="" loading="lazy"></iframe>
                </Column.Group>
            </Container>
        </div>
    )
}

export default Contacto
