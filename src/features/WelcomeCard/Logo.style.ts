// built-ins
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.a`
  &:nth-of-type(2) {
    animation: ${logoSpin} infinite 20s linear;
  }

  .logo {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    &.react {
      &:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
      }
    }
  }
`;

export default Logo;
