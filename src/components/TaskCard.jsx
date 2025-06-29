import { Link } from 'react-router-dom'

function TaskCard({id, title, description, status}) {

    return (
        <div className="card">
            <div className="task-info">
                <h3 className="task-name">{title}</h3>
                <p className="task-description">{description}</p>
                <span className="task-status" style={{
                    backgroundColor: status === 'Completed' ? 'green' :
                                    status === 'In Progress' ? 'orange' : 'gray',                    
                }}>{status}</span>
            </div>
            <br/>
            <Link to={`/projects/${id}`}>View Task</Link>
            <br/>
        </div>
    ); 
}

export default TaskCard