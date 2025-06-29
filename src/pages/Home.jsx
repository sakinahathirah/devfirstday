import MetricCard from "../components/MetricCard";
import '../styles/Home.css'
import bannerImage from '../assets/banner.jpg'
import { useUser } from '../context/UserContext';
import { useTasks } from '../context/TaskContext';

function Home(){
    const { user } = useUser();
    const { steps, metrics } = useTasks();

    return (
        <div className="home">
            <div className="welcome-banner" style={{backgroundImage: `url(${bannerImage})`}}>
                <div className="welcome-text">
                    <h1>Welcome, {user.name}!</h1>
                    <p>Let’s get started with your onboarding journey. Here’s your progress so far.</p>
                </div>
            </div>
            <div className="onboarding-guide">
                <h3>Onboarding Steps</h3>
                 <div className="steps-list">
                    {steps.map((step, index)=> (
                        <div key={index} className={`step-item ${step.status}`}>
                            <div className="step-number">{index + 1}</div>
                            <div className="step-title">{step.title}</div>
                            <div className="step-status">
                                {step.status === 'done' ? '✅' : '⬜'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="metric-grid">
                {metrics.map((item, index) => (
                    <MetricCard 
                    key={index}
                    title={item.title} 
                    progress={item.progress}
                    type={item.type}
                    description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;