
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



function CVPreview({person, educationEntries, experienceEntries, projectEntries, skillsEntries, certificationsEntries}){
    

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
                    <a href={person.portfolio}> {person.portfolio}</a>
                </div>
                <div>
                    <a href={person.github}>{person.github}</a>
                </div>
                <div>
                    <a href={person.linkedin}>{person.linkedin}</a>
                </div>
            </div>
            <div>
                <h1 style= {{borderBottom: '2px solid #1C6EA4'}}>Education</h1>
                {educationEntries.map((entry, index) => (
                <div key={index}>
                <p>{entry.school}</p>
                <p>{entry.degree}</p>
                <p>{entry.endSchoolDate}</p>
                <p>{entry.grade}</p>
                </div>
                ))}
            </div>
            
            <div>
                {experienceEntries.map((entry, index) => (
                <div key={index}>
                <p>{entry.title}</p>
                <p>{entry.companyName}</p>
                <p>{entry.location}</p>
                <p>{entry.startDate}</p>
                <p>{entry.endDate}</p>
                </div>
                ))}
            </div>
        
            <div>
                {projectEntries.map((entry, index) => (
                <div key={index}>
                <p>{entry.title}</p>
                <p>{entry.projectName}</p>
                <p>{entry.description}</p>
                <p>{entry.media}</p>
                </div>
                ))}
            </div>
            <div>
                {skillsEntries.map((entry, index) => (
                <div key={index}>
                <p>{entry.skills}</p>
                </div>
                ))}
            </div>
            <div>
                {certificationsEntries.map((entry, index) => (
                <div key={index}>
                <p>{entry.certificationName}</p>
                <p>{entry.issuingOrganization}</p>
                <p>{entry.issueDate}</p>
                </div>
                ))}
            </div>
        
        </>
    )
}

export default CVPreview;