import { css } from '@emotion/react';
import { Colors } from './variables';

export const AlertModalButtonStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flexStart',
  paddingBlock: '18px',
  paddingInline: 'min(1vw, 45px)',
  gap: ' 10px',

  width: 'min(75vw, 254px)',
  height: '60px',

  marginBlock: '1em',

  background: Colors.BLACK,
  borderRadius: '72px',

  // Font Styles
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 'min(6vw, 1.125em)',
  letterSpacing: '0.095em',
  textTransform: 'uppercase',
  color: Colors.WHITE,

  '&:hover': {
    background: '#C0013D',
  },
});
