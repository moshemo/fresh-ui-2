import styled, { css } from 'styled-components';
import { em, darken, lighten, math, readableColor as rc } from 'polished';
import { shadow } from 'styled-system';
import styledMap from 'styled-map';
// import styledMap, { mapToTheme as theme } from 'styled-map';

// import { buttons } from '../../styles/variables/buttons';
import { colors } from '../../styles/variables/colors';
import { baseCSS } from '../../styles/helpers/system';
import { colorProps, radiiProps } from '../../styles/maps';

const buttonSizes = styledMap`
    small: 0.75rem;
    default: 1rem;
    medium: 1.75rem;
    large: 2.5rem;
`;

export const Button = styled('button')(
  ({ icon, inverted, outline, rounded }) => css`
    appearance: none;

    background-color: ${colorProps};
    border: 1px solid ${colorProps};
    border-radius: ${radiiProps};
    box-shadow: none;
    outline: 0;

    color: ${props => rc(colorProps(props))};
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    font-size: ${buttonSizes};
    font-weight: 600;
    letter-spacing: 0.03em;
    line-height: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    margin: 7px;
    ${'' /* min-width: 5.5em;
    min-height: 1em; */}
    padding: 0.8em 1.5em;

    transition: all 0.2s ease-in-out;
    vertical-align: baseline;
    user-select: none;

    &:hover {
      background-color: ${props => darken(0.1, colorProps(props))};
      border-color: ${props => darken(0.1, colorProps(props))};
      color: ${props => props.colorHover || rc(darken(0.1, colorProps(props)))};
    }

    :disabled, 
    [disabled] {
      cursor: not-allowed;
      opacity: 0.5;
      :hover {
        background-color: ${colorProps};
        border-color: ${colorProps};
      }
    }
      
    ${icon &&
      css`
        padding-right: .25em;
        padding-left: .25em;
      `}

    svg:first-child { margin-right: .75em; }
    svg:last-child { margin-left: .75em; }
    svg:only-child {
      height: ${buttonSizes};
      width: ${buttonSizes};
    }

    

    ${outline &&
      css`
        background-color: transparent;
        color: ${colorProps};
      `}

    ${inverted &&
      css`
        background-color: ${colors.white};
        color: ${colorProps};
      `}
  
    ${inverted &&
      outline &&
      css`
        background-color: transparent;
        border-color: #fff;
        color: #fff;
        :hover {
          background-color: #fff;
          color: ${colorProps};
        }
      `}



    ${baseCSS}
    ${shadow}
  `
);

export const Button2 = styled('button')(
  ({ inverted, outline, rounded }) => css`
  
  appearance: none;

  border-style: solid;
    border-width: 1px;


    background-color: ${colorProps};
    border-color: ${colorProps};
    color: ${colors.white};
      
    &:hover {
      background-color: ${props => darken(0.1, colorProps(props))};
      color: #fafafa;
    }

  
    ${outline &&
      css`
        background-color: transparent;
        color: ${colorProps};
      `}

    ${inverted &&
      css`
        background-color: ${colors.white};
        color: ${colorProps};
      `}


    border: 1px solid ${colors.primary};
    border-radius: 0;
    box-shadow: none;
    font-weight: 600;
    letter-spacing: .03em;
    min-width: 5.5em;
    padding: 0.8em 1.5em;
    transition: all 0.2s ease-in-out;

  cursor: pointer;

  display: inline-flex;
  align-items: center;


  line-height: 1em;
  min-height: 1em;

  outline: 0;
  position: relative;

  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  

  vertical-align: baseline;
  user-select: none;



  ${baseCSS}
  ${
    '' /* ${theme('buttons.base')}
  ${theme('buttons.kind', 'kind')}
  ${theme('buttons.size')} */
  }



  ${({ disabled }) => disabled && `cursor: not-allowed;`}
  ${inverted &&
    outline &&
    `
    backgroundColor: transparent;
    border-color: #fff;
    color: #fff;
  `}

  ${rounded &&
    `
    border-radius: 290486px;
  `}
`
);

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
