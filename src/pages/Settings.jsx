import { useState } from 'react';
import '../styles/Settings.css';
import { useUser } from '../context/UserContext';
import { notifications } from '@mantine/notifications';


function Settings() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const { user, setUser } = useUser();

    const handleSave = () => {
        alert("Settings saved!");
    };

    const changePassword = ()=>{
        alert("Not available for now");
    }

    const handleNotifications = () => {
        setUser({ ...user, notifications: !user.notifications });
    };


    return (
        <div className="settings-page">
            <h1 className="settings-title">Settings</h1>
            
            <div className="settings-grid">
                <div className="settings-section">
                    <h3>Account</h3>
                    <div className="settings-card">
                        <label>
                            Username
                            <input type="text" value={user.name} readOnly />
                        </label>
                        <label>
                            Password
                            <input type="password" value="********" readOnly />
                        </label>
                        <button className="btn-link" onClick={changePassword}>Change Password</button>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Notifications</h3>
                    <div className="settings-card">
                        <label className="checkbox-row">
                            <input
                                type="checkbox"
                                checked={user.notifications}
                                onChange={handleNotifications}
                            />
                            {user.notifications ? "Disable Email Notifications" : "Enable Email Notifications"}
                        </label>
                    </div>
                </div>
            </div>

            <div className="settings-footer">
                <button className="btn-save" onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    );
}

export default Settings;
