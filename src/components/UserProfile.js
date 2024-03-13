import React from 'react';

export const UserProfile = ({ user }) => {
  return (
    <div className="UserProfile">
      <h2>Profilul utilizatorului</h2>
      {user && (
        <div>
          <p>Nume: {user.name}</p>
        </div>
      )}
    </div>
  );
};

