import styled, { css } from 'styled-components';

const COLOR = {
  green: css`
    color: #fff;
    background: #6e807a;

    &:hover {
      background: 899c95;
    }
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

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
