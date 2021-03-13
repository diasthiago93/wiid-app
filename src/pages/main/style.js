import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: .8fr 2.2fr;
  grid-gap: 1rem;
  aside {
    background-color: red;
  }
  .content{
    background-color: blue;
  }
`;
