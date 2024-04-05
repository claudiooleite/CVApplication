

function CVPreview({person}){
    
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
            <h1>{person.title}</h1>
        </div>
        <div>
            <h2>{person.companyName}</h2>
        </div>
        <div>
            <h1>{person.location}</h1>
        </div>
        <div>
            <h2>{person.startDate}</h2>
        </div>
        <div>
            <h2>{person.endDate}</h2>
        </div>
        <div>
            <h1>{person.school}</h1>
        </div>
        <div>
            <h2>{person.degree}</h2>
        </div>
        <div>
            <h2>{person.endShoolDate}</h2>
        </div>
        <div>
            <h1>{person.grade}</h1>
        </div>
        <div>
            <h1>{person.projectName}</h1>
        </div>
        <div>
            <h2>{person.description}</h2>
        </div>
        <div>
            <h2>{person.media}</h2>
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