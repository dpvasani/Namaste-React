import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // Initial state with default values
    this.state = {
      name: "Darshan Vasani",
      age: 22,
      location: "Surat, Gujarat",
      avatar_url: "",
      bio: "",
    };
  }

  async componentDidMount() {
    // Fetch data from GitHub API for user "dpvasani"
    const response = await fetch("https://api.github.com/users/dpvasani");
    const data = await response.json();

    // Update the state with data from GitHub
    this.setState({
      name: data.name || "Darshan Vasani",
      location: data.location || "Surat, Gujarat",
      avatar_url: data.avatar_url,
      bio: data.bio || "",
    });
  }

  render() {
    const { name, age, location, avatar_url, bio } = this.state;

    return (
      <div className="user-card" style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", maxWidth: "300px" }}>
        <h1>👤 GitHub User</h1>
        {avatar_url && <img src={avatar_url} alt="avatar" width="150" style={{ borderRadius: "8px" }} />}
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Location: {location}</h2>
        {bio && <p>📝 Bio: {bio}</p>}
      </div>
    );
  }
}

export default UserClass;
