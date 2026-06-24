function ProjectCard({project}){
    return (
        <div className = "project-card">
            <div className = "title">
                <h3>{project.title}</h3>
            </div>
            <div className = "short-description">
                <p>{project.shortDescription}</p>
            </div>
            <div className = "tags">
                <p>Tag logic here</p>
            </div>
            <div className = "image">
                <p>Image logic here</p>
            </div>
        </div>
    )
}

export default ProjectCard