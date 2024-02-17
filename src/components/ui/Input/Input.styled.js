import styled from 'styled-components';

const InputWrapper = styled.input`
  border-radius: 8px;
  border: 1px solid var(--gray-700);
  background-color: var(--gray-500);

  color: var(--gray-300);
  font-size: 14px;
  font-weight: 400;

  height: ${(props) => props.height}; // 38px default
  width: 100%;

  padding-left: 16px;

  &:focus {
    border: 1px solid #5e60ce;
  }
`;

export default InputWrapper;
