import TaskCard from "../components/TaskCard"
import { tasks } from '../data/taskData';

function Projects () {

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="metric-grid">
                {tasks.map((item, index) => (
                    <TaskCard 
                        key={index}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects