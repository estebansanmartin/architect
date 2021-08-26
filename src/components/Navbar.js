import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Field, Control, Title } from 'rbx'
import { Twitter, Facebook, Instagram, WhatsApp } from '@material-ui/icons'
import { Button, Icon } from '@material-ui/core'

function Nav() {
    return (
        <div>
            <Navbar style={{backgroundColor:"#fefae0"}}>
                <Navbar.Brand>
                    <Navbar.Item href="/">
                        <Title className="logo">Studio</Title>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Segment align="end">
                            <li><Link className="navmenu" to="/">HOME</Link></li>
                            <li><Link className="navmenu" to="/studio">STUDIO</Link></li>
                            <li><Link className="navmenu" to="/progetti">PROGETTI</Link></li>
                            <li><Link className="navmenu" to="/servizi">SERVIZI</Link></li>
                            <li><Link className="navmenu" to="/contatti">CONTATTI</Link></li>
                    </Navbar.Segment>
                    <Navbar.Segment align="end">
                        <Navbar.Item as="div">
                            <Field kind="group">
                                <Control>
                                    <Button href="https://facebook.com" target="_blank" className="social">
                                        <Icon>
                                            <Facebook />
                                        </Icon>
                                    </Button>
                                    <Button href="https://instagram.com" target="_blank" className="social">
                                        <Icon>
                                            <Instagram />
                                        </Icon>
                                    </Button>
                                    <Button href="https://twitter.com" target="_blank" className="social">
                                        <Icon>
                                            <Twitter />
                                        </Icon>
                                    </Button>
                                    <Button href="https://whatsapp.com" target="_blank" className="social">
                                        <Icon>
                                            <WhatsApp />
                                        </Icon>
                                    </Button>
                                </Control>
                            </Field>
                        </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </div>
    )
}

export default Nav
