import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    circle, path {
      stroke: ${(props) => props.color};
    }
  }

  &:hover svg {
    circle, path {
      stroke: ${(props) => props.hoverColor};
    }
  }
`;

export default Wrapper;
