import styled from 'styled-components';

export const SearchInput = styled.input`
  border-radius: 10px;
  background-color: gray;
  color: white;

  margin-bottom: 20px;

  width: 100%;
  height: 38px;
  padding-left: 16px;

  border: 1px solid var(--gray-700);
  background-color: var(--gray-500);

  color: var(--gray-300);
  font-size: 14px;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;
