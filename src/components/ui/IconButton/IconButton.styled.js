import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.background};
  border: 0;

  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

export default Button;
