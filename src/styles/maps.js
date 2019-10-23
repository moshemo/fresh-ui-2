import styledMap from 'styled-map';
import { colors, radii } from './variables/index';

// colors
const colorPropsObj = {
  ...colors,
  default: colors.primary
};

export const colorProps = styledMap(colorPropsObj);

// radii
const radiiPropsObj = {
  ...radii,
  default: radii.curve
};

export const radiiProps = styledMap(radiiPropsObj);
