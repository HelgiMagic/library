import styled from 'styled-components';
import { SubmitButton } from '../Modal.styled';

export const BtnRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const DangerButton = styled(SubmitButton)`
  background-color: var(--danger);
`;
