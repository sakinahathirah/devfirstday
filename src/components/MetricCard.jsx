import '../styles/CardComponent.css'

function MetricCard ({title, progress, type, description}) {

    const renderValue = () => {

        switch (type) {
            case 'number' : 
                return <span className="metric-value">{progress}</span>
            case 'percent' : 
                return <span className="metric-value">{progress}</span>
            case 'progress' : 
                return (
                    <div className="metric-progress-wrapper">
                        <div className="metric-bar">
                            <div 
                            className="metric-bar-fill"
                            style={{width: `${progress}%`}}
                            />
                        </div>
                        <span className="metric-percent">{progress}%</span>
                    </div>
                );
            default:
                return <span>{progress}</span>

        }
    }

    return (
        <div className="card">
            <h4 className="metric-title">{title}</h4>
                {renderValue()}
                {description && <p className="metric-description">{description}</p>}
        </div>
    );
}

export default MetricCard;