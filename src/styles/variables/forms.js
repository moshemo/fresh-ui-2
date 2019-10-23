import { colors } from './base/colors'
import { material } from '../helpers/material-colors'

export const forms = {
  button: {
    borderRadius: '0'
  },
  disabled: {
    backgroundColor: colors.greyDark,
    borderColor: colors.greyDark,
    boxShadow: 'none',
    color: colors.greyDarker
  },
  icon: {
    color: colors.grey
  },
  input: {
    backgroundColor: colors.white,
    border: `1px solid ${material.grey.m300}`,
    borderRadius: '4px',
    boxShadow: 'none',
    fontSize: '16px',
    height: '36px',
    marginBottom: '18px',
    padding: '6px 10px',
    focusBorder: `1px solid ${colors.secondaryLight}`,
    width: '100%'
  },
  textarea: {
    minHeight: '120px'
  }
}
