import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.isBackground ? '#fff' : '#aaee'};
  width: ${props => props.isBackground ? '200px' : '100px'};
  border: ${props => props.isBackground && 'solid 1px #000'};
`;