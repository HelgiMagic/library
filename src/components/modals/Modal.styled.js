import styled from 'styled-components';
import Button from '../ui/Button';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  display: block;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  max-width: none;

  width: 95%;
  max-width: 457px;
  padding: 20px;

  border-radius: 10px;
  border: 1px solid var(--gray-500);

  background: var(--gray-400);

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const SubmitButton = styled(Button)`
  background-color: var(--purple);
  color: white;
  flex-grow: 1;
`;
