import styled from 'styled-components';
import Button from '../../components/ui/Button';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  color: white;

  text-align: start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  justify-content: space-between;
  padding-top: 10px;

  min-height: 600px;
`;

export const ButtonsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ArtColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Art = styled.img`
  height: max-content;
  width: 300px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const JustifyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 50px;
`;

export const Title = styled.h2`
  font-weight: normal;
`;

export const StatusRow = styled.div`
  display: flex;
  gap: 5px;
`;

export const Status = styled.div`
  width: 135px;

  text-align: center;
`;

export const ChangeAvailability = styled(Button)`
  color: white;
  flex-grow: 1;

  max-width: 275px;
`;
