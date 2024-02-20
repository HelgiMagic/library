import styled from 'styled-components';

const MyButton = styled.button`
  padding: 10px 0;
  border-radius: 8px;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: ${(props) => props.color};
  height: ${(props) => props.size};

  &:hover {
    background: ${(props) => props.hoverColor};
  }
`;

export default MyButton;
