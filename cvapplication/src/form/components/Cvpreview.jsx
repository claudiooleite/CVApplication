

function CVPreview({person, educationEntries, experienceEntries, projectEntries, skillsEntries, certificationsEntries}){
    const personNameStyle = {
        display: 'grid',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
    return(
        <>
        <div>
            <h1 style={{ ...personNameStyle, textTransform: 'uppercase' }}>{person.name} {person.surname}</h1>
        </div>
    
        <div>
            <h2 style= {{borderBottom: '5px double #1C6EA4', display: 'grid', justifyContent: 'center',}}>{person.headline}</h2>
        </div>
        <div>
            <a href={`mailto:${person.email}`}>{person.email}</a>
        </div>
        <div>
            <a href={person.portfolio}>{person.portfolio}</a>
        </div>
        <div>
            <a href={person.github}>{person.github}</a>
        </div>
        <div>
            <a href={person.linkedin}>{person.linkedin}</a>
        </div>
        <div>
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