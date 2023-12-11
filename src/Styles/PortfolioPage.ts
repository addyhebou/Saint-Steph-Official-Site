import { css } from '@emotion/css';

export const portfolioPageBackgroundClassname = css({
  background: 'linear-gradient(180deg, #000000 0%, #28163c 100%)',
  display: 'flex',
  flexFlow: 'column',

  '& .pageHeader': {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '100%',
    letterSpacing: '-2.52px',
    textDecoration: 'underline',
    textUnderlineOffset: '16px',
  },
});

export const PortfolioCategoryCardClassName = css({
  display: 'flex',
  padding: '7px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  maxWidth: '189px',
  border: '1px solid #8C8A8A',
  boxShadow: '0px 4px 16.8px 0px #000',
  '& .title': {
    color: '#333',
    fontFamily: 'Helvetica',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '-1.4px',
    textTransform: 'capitalize',
  },
  '& .sub': {
    color: '#5C5C5C',
    fontSize: '14px',
    fontWeight: '400',
  },
  '&:hover': {
    transition: 'all 0.25s linear',
    transform: 'scale(1.1)',
    cursor: 'pointer',
  },
});
