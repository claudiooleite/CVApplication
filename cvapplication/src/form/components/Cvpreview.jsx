

function CVPreview({person, educationEntries, experienceEntries, projectEntries}){
    
    return(
        <>
        <div>
            <h1>{person.name}</h1>
        </div>
        <div>
            <h2>{person.headline}</h2>
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
            <h1>{person.skills}</h1>
        </div>
        <div>
            <h1>{person.certificationName}</h1>
        </div>
        <div>
            <h2>{person.issuingOrganization}</h2>
        </div>
        <div>
            <h2>{person.issueDate}</h2>
        </div>

        </>
    )
}

export default CVPreview;