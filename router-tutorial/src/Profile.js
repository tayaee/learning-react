import React from "react";

const data = {
  user1: {
    name: "User 1",
    description: "A developer who likes React"
  },
  user2: {
    name: "User 2",
    description: "The main guy in a novel."
  }
};

const Profile = ({match}) => {
  const {username} = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>No such user.</div>;
  }
  return <div>
    <h3>
      {username} ({profile.name})
    </h3>
    <p>{profile.description}</p>
  </div>
};

export default Profile;
