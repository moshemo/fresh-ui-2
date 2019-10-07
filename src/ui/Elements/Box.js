import styled from 'styled-components';
import { color, flexbox, layout, space, system } from 'styled-system';

// export const Box = styled.div`
//   box-sizing: border-box;
//   min-width: 0;

//   ${color}
//   ${flexbox}
//   ${layout}
//   ${space}
// `;

export const Box = styled('div')(color, flexbox, layout, space);
