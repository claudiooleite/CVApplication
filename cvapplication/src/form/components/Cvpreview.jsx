

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
            <h1>{person.email}</h1>
        </div>
        <div>
            <h2>{person.portfolio}</h2>
        </div>
        <div>
            <h1>{person.github}</h1>
        </div>
        <div>
            <h2>{person.linkedin}</h2>
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
            <h2>{person.ednDate}</h2>
        </div>
        <div>
            <h1>{person.skills}</h1>
        </div>
        </>
    )
}

export default CVPreview;