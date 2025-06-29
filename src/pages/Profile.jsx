import '../styles/Profile.css';
import { useUser } from '../context/UserContext';


function Profile() {
    const { user } = useUser();

    return (
        <div className="profile-container">
            <h1 className="profile-title">Profile</h1>

            <div className="profile-main">
                <div className="profile-left">
                    <div className="profile-photo">
                        <img src="https://via.placeholder.com/120" alt="profile" />
                        <h2 className="profile-name">{user.name}</h2>
                        <p className="profile-role">Frontend Developer</p>
                    </div>

                    <div className="profile-section">
                        <label>Email</label>
                        <input type="text" value={user.email} readOnly />
                    </div>

                    <div className="profile-section">
                        <label>Password</label>
                        <input type="password" value="********" readOnly />
                    </div>
                </div>

                <div className="profile-right">
                    <h3>Overview</h3>
                    <div className="profile-card-grid">
                        <div className="profile-card">🚀 Current Role: Frontend Developer</div>
                        <div className="profile-card">📍 Location: Selangor, Malaysia</div>
                        <div className="profile-card">📧 Contact: sarah@example.com</div>
                        <div className="profile-card">🌐 GitHub: github.com/sarahdev</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile