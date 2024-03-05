import styled from 'styled-components';
import Button from '../ui/Button';

const GreenButton = styled(Button)`
  background: #6e807a;
  color: #f2f2f2;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #899c95;
  }
`;

export default GreenButton;
