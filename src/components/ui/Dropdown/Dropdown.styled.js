import styled from 'styled-components';

export const DropDown = styled.div`
  color: white;
  position: relative;
`;

export const List = styled.ul`
  position: absolute;
  width: 150px;
  padding: 8px 0;

  background: rgba(38, 38, 38, 0.9);
  backdrop-filter: blur(1px);
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.9);

  border-radius: 8px;
  font-size: 14px;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 5px;

  top: 55px;
`;

export const Li = styled.li`
  width: 95%;
  margin: auto;
  list-style: none;
  height: 100%;
  padding: 8px 16px;
  cursor: pointer;

  color: ${(props) => (props.isactive ? '#899c95' : 'white')};
  border-radius: 8px;

  &:hover {
    background: #a594fd;
    color: #000;
  }
`;
