// import styled, { css } from 'styled-components';
// import styledMap, { mapToTheme as theme } from 'styled-map';

// import { buttons } from '../../styles/variables/buttons';
// import { baseCSS } from '../../styles/helpers/system';

// // TO REMOVE START
// import { button } from "Variables";
// // TO REMOVE STOP

// export const Button = styled('button')`
//   appearance: none;

//   cursor: pointer;

//   display: inline-flex;
//   align-items: center;

//   line-height: 1em;
//   min-height: 1em;

//   outline: 0;
//   position: relative;

//   text-align: center;
//   text-transform: uppercase;
//   text-decoration: none;

//   vertical-align: baseline;
//   user-select: none;

//   &:hover {
//     background-color: #111;
//     color: #fafafa;
//   }

//   ${({ disabled }) => disabled && `cursor: not-allowed;`}

//   ${baseCSS}
//   ${theme('buttons.base')}
//   ${theme('buttons.color')}
//   ${theme('buttons.size')}

//   ${props =>
//     props.outline &&
//     `
//     background-color: transparent;
//     color:  FIND_SOLUTION;
//   `}

//   ${props =>
//     props.inverted &&
//     `
//     background-color: #fff;
//     color: FIND_SOLUTION;
//   `}

//   ${props =>
//     props.inverted &&
//     props.outline &&
//     `
//     backgroundColor: transparent;
//     border-color: #fff;
//     color: #fff;
//   `}

//   ${(props =
//     props.rounded &&
//     `
//     border-radius: 290486px;
//   `)}
// `;

// ADD STYLES
// export const Buttons = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;

//   :last-child {
//     margin-bottom: -0.5rem;
//   }

//   ${Button} {
//     ${theme('buttons.size')}
//   }
// `;
