import React from 'react';

const Testimonial = ({ name, review }) => {
    return (
      <div style={styles.card}>
        <h2>{name}</h2>
        <p>{review}</p>
      </div>
    );
  };

  const styles = {
    card: {
      border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem 0',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
    }
  };

  
export default Testimonial;