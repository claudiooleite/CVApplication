
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function CVPreview({person, educationEntries, experienceEntries, projectEntries, skillsEntries, certificationsEntries, onDeleteEntry}){
    

    return(
        <>
        
            <div>
                <h1 style={{ textTransform: 'uppercase', marginLeft:"50px", }}><span><b>{person.name}</b>  {person.surname}</span></h1>
            </div>
        
            <div>
                <h2 style= {{borderBottom: '5px double #1C6EA4', marginLeft:"50px",  display: 'inline-block', justifyContent: 'center'}}>{person.headline}</h2>
            </div>
            <div>
                <a href={`mailto:${person.email}`}><FontAwesomeIcon icon={faEnvelope} /> {person.email}</a>
            </div>
            <div style= {{gridTemplateColumns: 'repeat(3, auto)', gap: '10px', display: 'grid', justifyContent: 'center',}}>
                <div>
                    <Card.Link href={`https://${person.portfolio}`} target="_blank">{person.portfolio}</Card.Link>
                </div>
                <div>
                    <Card.Link href={`https://${person.github}`} target="_blank">{person.github}</Card.Link>
                </div>
                <div>
                    <Card.Link href={`https://${person.linkedin}`} target="_blank">{person.linkedin}</Card.Link>
                </div>
            </div>
            <div>
                <h1 style= {{borderBottom: '2px solid #1C6EA4'}}>Education</h1>
                {educationEntries.map((entry, index) => (
                    <Card key={index}>
                        <Card.Header as="h5">{entry.school}</Card.Header>
                        <Card.Body>
                            <Card.Title>{entry.degree}</Card.Title>
                                <Card.Text>
                                    Graduated on {entry.endSchoolDate} with a grade {entry.grade}.
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                ))}
            </div>
            <div>
                <h1 style= {{borderBottom: '2px solid #1C6EA4'}}>Experience</h1>
                   {experienceEntries.map((entry, index) => (
                    <Card key={index}>
                    <Card.Header as="h5">{entry.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{entry.companyName} / {entry.location}</Card.Title>
                                <Card.Text>
                                Worked at {entry.companyName} from {entry.companyName} to {entry.endDate}.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        
            <div>
                <div>
                    <h1 style= {{borderBottom: '2px solid #1C6EA4'}}>Projects</h1>
                </div>
                <Row xs={1} md={2} className="g-4">
                    {projectEntries.map((entry, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Header as="h5">{entry.title}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{entry.projectName}</Card.Title>
                                        <Card.Text>{entry.description}</Card.Text>
                                        <Card.Link href={`https://${entry.media}`} target="_blank">{entry.media}</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <div>
                    <h1 style= {{borderBottom: '2px solid #1C6EA4'}}>Skills</h1>
                </div>
                <Row xs={1} md={2} className="g-4">
                    {skillsEntries.map((entry, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Header as="h5">{entry.skills}</Card.Header>                           
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            
            <div>
                <div>
                    <h1 style= {{borderBottom: '2px solid #1C6EA4'}}>Certification</h1>
                </div>
                <Row xs={1} md={2} className="g-4">
                    {certificationsEntries.map((entry, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Header as="h5">{entry.certificationName}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{entry.issuingOrganization}</Card.Title>
                                        <Card.Text>Issued on {entry.issueDate}.</Card.Text>
                                        <Card.Link href={`https://${entry.media}`} target="_blank">{entry.media}</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        
        </>
    )
}

export default CVPreview;