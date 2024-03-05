import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.bg};
  border: 0;
  border-radius: 10px;

  width: ${(props) => props.size};
  height: ${(props) => props.size};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;
