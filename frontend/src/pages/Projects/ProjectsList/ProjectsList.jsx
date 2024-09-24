import {useEffect, useState} from "react";
import api from "../../../services/interceptors.jsx";


function ProjectsList() {
    const [projects, setProjects] = useState([]);



    useEffect(() => {
        api.get('projects/')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.log(error);
                console.error("Помилка при отриманні даних:", error);
            });
    }, []);


    return (
        <div className="container-fluid bodys">
            <div className="bg-black">
                <h1>Users</h1>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>{project.username} - ${project.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectsList;