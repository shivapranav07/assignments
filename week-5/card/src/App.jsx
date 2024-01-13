 // src/App.js

import React from 'react';

// Card component definition
const Card = ({ name, description, socialMedia, interests }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '20px auto',
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        {Object.entries(socialMedia).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
            {platform}
          </a>
        ))}
      </div>
      <div>
        <h3>Interests:</h3>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// App component definition
function App() {
  // Define social media links and interests
  const socialMediaLinks = {
    LinkedIn: 'https://www.linkedin.com/',
    Twitter: 'https://twitter.com/',
  };

  const interests = ['Reading', 'Traveling'];

  // Example name and description
  const exampleName = 'John Smith';
  const exampleDescription = 'Software Engineer';

  return (
    <div style={appStyle}>
      <h1>Simple Business Card</h1>
      {/* Use the Card component with example name and description */}
      <Card 
        name={exampleName}
        description={exampleDescription}
        socialMedia={socialMediaLinks}
        interests={interests}
      />
    </div>
  );
}

// Inline styles for the App component
const appStyle = {
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

export default App;
