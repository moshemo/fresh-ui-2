import styled, { css } from 'styled-components';
import { color, fontSize, space } from 'styled-system';
import { buttons } from '../../styles/variables/buttons';
import { base } from '../../styles/helpers/system';

// TO REMOVE START
import { button } from 'Variables';
// TO REMOVE STOP

// prettier-ignore
const buttonSizeCSS = ({ tiny, small, medium, large }) => css`
  ${tiny && `font-size: ${buttons.sizes.tiny};`}
  ${small && `font-size: ${buttons.sizes.small};`}
  ${medium && `font-size: ${buttons.sizes.medium};`}
  ${large && `font-size: ${buttons.sizes.large};`}
`;

export const Button = styled('button')`
  appearance: none;

  background-color: ${button.backgroundColor};
  border: none;
  border-radius: ${button.borderRadius};
  box-shadow: ${button.boxShadow};

  color: ${button.color};
  cursor: pointer;

  display: inline-flex;
  align-items: center;

  font-size: ${buttons.sizes.base};
  font-weight: ${button.fontWeight};

  letter-spacing: 0.5px;
  line-height: 1em;
  min-height: 1em;
  min-width: 88px;

  outline: 0;
  padding: 0.8em 1.5em 0.8em;
  position: relative;

  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  vertical-align: baseline;
  user-select: none;

  &:hover {
    background-color: #111;
    color: #fafafa;
  }

  ${({ disabled }) => disabled && `cursor: not-allowed;`}

  ${bass}
  ${buttonSizeCSS}
`;

// ADD STYLES
export const Buttons = styled.div``;
