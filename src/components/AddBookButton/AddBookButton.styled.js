import styled from 'styled-components';
import Button from '../ui/Button';

const GreenButton = styled(Button)`
  width: 500px;
  max-width: 70%;

  background: #6e807a;
  color: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  margin: 0 auto;
  margin-bottom: 50px;

  &:hover {
    background: #899c95;
  }
`;

export default GreenButton;