import React from 'react';

export default function Icon({ name, width = '18px', height = width }) {
  const styles = {
    width, height,
  };

  return (
    <img src={`../../public/${name}.svg`} alt="svg icon" style={styles} />
  );
}
