import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/styles.css" // Ensure to import the CSS file

const Profile = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/login');
  };

  // Dummy profile data
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Profile</h2>
        <div className="profile-info">
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
