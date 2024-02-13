import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Button = styled.button`
  background-color: transparent;
  border: 0;
`;

export default function IconButton({
  name, width, onClick, id,
}) {
  const styles = {
    width, height: width,
  };

  return <Button type="button" onClick={onClick} id={id} style={styles}><Icon name={name} width={width} /></Button>;
}
