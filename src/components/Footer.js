import { Content, Footer, Column, Title, Button, Icon } from 'rbx'
import React from 'react'
import { Facebook, Instagram, Twitter, WhatsApp } from '@material-ui/icons'

function Foot() {
    return (
        <div>
            <Footer className="footer">
                <Content textAlign="centered">
                    <Column.Group>
                        <Column size={4}>
                            <Title className="text-footer" subtitle size={5}>Studio Architetti</Title>
                            <Title className="text-footer" subtitle size={6}>Via Belmonte, 1313 - 10155 Torino</Title>
                            <Title className="text-footer" subtitle size={6}>Partita I.V.A. n. 1234567890</Title>
                        </Column>
                        <Column size={4}>
                        <Title className="text-footer" subtitle size={5}>Team</Title>
                            <Title className="text-footer" subtitle size={6}>Luigi Torinese, Architetto</Title>
                            <Title className="text-footer" subtitle size={6}>Marco Milanese, Architetto</Title>
                            <Title className="text-footer" subtitle size={6}>Stefano Torinese, Geometra</Title>
                        </Column>
                        <Column size={4}>
                            <Title className="text-footer" subtitle size={5}>Seguici</Title>
                            <Button href="https://facebook.com" target="_blank" className="social-footer">
                                        <Icon>
                                            <Facebook />
                                        </Icon>
                                    </Button>
                                    <Button href="https://instagram.com" target="_blank" className="social-footer">
                                        <Icon>
                                            <Instagram />
                                        </Icon>
                                    </Button>
                                    <Button href="https://twitter.com" target="_blank" className="social-footer">
                                        <Icon>
                                            <Twitter />
                                        </Icon>
                                    </Button>
                                    <Button href="https://whatsapp.com" target="_blank" className="social-footer">
                                        <Icon>
                                            <WhatsApp />
                                        </Icon>
                                    </Button>
                        </Column>
                        
                    </Column.Group>
                    <Column.Group>
                        <Column size={6}>
                            <Title className="copyright" subtitle size={7}>copyright 2021 © tutti i diritti reservati</Title>
                        </Column>
                        <Column size={6}>
                            <Title className="copyright" subtitle size={7}>sviluppato per <a href="https://estebansanmartin.it" rel="noreferrer" target="_blank">Esteban San Martin</a></Title>
                        </Column>
                    </Column.Group>
                    
                </Content>
            </Footer>
        </div>
    )
}

export default Foot
