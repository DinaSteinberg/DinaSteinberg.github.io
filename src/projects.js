import {Row, Col, Card, Button} from 'react-bootstrap';

export default () => {
    return <div style={{marginBottom: '320px'}}>
        <h3>Projects</h3>
        <div style={{color: "black"}}>
            <Col>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', margin:'1.5rem', shadow:'10px' }}>
                            <Card.Body>
                                <Card.Title>Sample DataBase project</Card.Title>
                                <Card.Text>
                                    Here's a database that keeps track of credit cards. I worked on this with some friends as a semester project last semester.
                                </Card.Text>
                                <Button onClick={() => window.open("https://github.com/DinaSteinberg/creditCard_dataBase")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', margin:'1.5rem' }}>
                            <Card.Body>
                                <Card.Title>Sample Android App</Card.Title>
                                <Card.Text>
                                    This is an Android app that I build this past summer. There is no API built to run the app, but the UI is fully functional.
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/DinaSteinberg/AndroidApp_Silencer")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', margin:'1.5rem' }}>
                            <Card.Body>
                                <Card.Title>Sample Website</Card.Title>
                                <Card.Text>
                                    I learned HTML, CSS, and JS basics my first semester. Here is my semester project, coded from scratch using HTML and CSS. No JSX for me!
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/DinaSteinberg/TheFreeDecorator")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <Card style={{ width: '18rem', margin:'1.5rem' }}>
                            <Card.Body>
                                <Card.Title>Sample Java Project</Card.Title>
                                <Card.Text>
                                   Yet another semester project. This one was done in a group. We made an application that enables students to submit work and teachers to grade it.
                                </Card.Text>
                                <Button  onClick={() => window.open("https://github.com/DinaSteinberg/UniversityPortal")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', margin:'1.5rem' }}>
                            <Card.Body>
                                <Card.Title>My LinkedIn Profile</Card.Title>
                                <Card.Text>
                                    Click below to see my LinkedIn profile!
                                </Card.Text>
                                <Button  onClick={() => window.open("https://www.linkedin.com/in/dinasteinberg/")} variant="primary">Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
            </Col>
        </div>
    </div>
}