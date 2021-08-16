import React from 'react'
import { Container, Title, Content } from 'rbx'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Servizi() {
    return (
        <div>
            <Container>
                <Content>
                    <Title className="reveal title-galeria">Servizi</Title>
                </Content>
                <Content>
                <Title size={2} className="subtitle-servizi reveal ">Scopri tutti i servizi dello Studio Architetti AD.
                        Per qualsiasi informazione non esitare a contattarci.
                </Title>
                </Content>

                <Content>
                <Accordion className="reveal">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Title className="accordion" size={3}>BIM</Title>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Title subtitle className="accordion" size={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="reveal">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                    <Title className="accordion" size={3}>PROGETTAZIONE</Title>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Title subtitle className="accordion" size={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="reveal">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                    <Title className="accordion" size={3}>INTERIOR DESIGN</Title>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Title subtitle className="accordion" size={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="reveal">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                    <Title className="accordion" size={3}>SUPERBONUS 110%</Title>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Title subtitle className="accordion" size={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Title>
                    </AccordionDetails>
                </Accordion>
                </Content>
            </Container>
        </div>
    )
}

export default Servizi
