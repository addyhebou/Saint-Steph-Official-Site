import { css } from '@emotion/css';

export const videoPageContentClassname = css({
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: '53px',
  width: '87.5vw',
  margin: '0 auto',
  minHeight: '67.25vh', // hard code to take up full screen until we have enough entries

  '& .VideoSectionClassname': {
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    width: '75%',

    '& .video-responsive': {
      width: '75%',
    },

    '& h2': {
      color: '#FFF',
      fontFamily: 'Helvetica',
      fontSize: '32px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '-2.24px',
      textTransform: 'capitalize',
      textAlign: 'left',
    },

    '& .footer': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& .description': {
        display: 'flex',
        padding: '12px 20px',
        alignItems: 'flex-start',
        gap: '10px',
        borderRadius: ' 11px',
        background: 'rgba(255, 255, 255, 0.20)',
        color: '#FFF',
        fontFamily: 'Helvetica',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '100%',
        letterSpacing: '-1.12px',
        maxWidth: '65%',
        textAlign: 'left',
        marginBlock: '0',
      },
      '& .shareButton': {
        display: 'flex',
        padding: '6px 10px',
        alignItems: 'center',
        gap: '10px',
        borderRadius: ' 11px',
        background: 'rgba(255, 255, 255, 0.20)',
        color: '#FFF',
        fontFamily: 'Helvetica',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '100%',
        letterSpacing: '-1.12px',
        maxWidth: '65%',
        textAlign: 'left',
        marginBlock: '0',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
});

export const footerDockClassname = css({
  display: 'flex',
  flexDirection: 'row',
  gap: '40px',
  margin: '10px auto',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '75px',
    background: '#FFF',
    borderRadius: '11px',
    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
});

export const otherVideosClassname = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '27px',
  flexDirection: 'column',

  '& .video': {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '0',
    '& .thumbnail img': {
      width: '200px',
      margin: '0',
    },
    '& .text': {
      fontFamily: 'Helvetica',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '100%' /* 20px */,
      letterSpacing: '-1.4px',
      textTransform: 'capitalize',
      margin: '0',
      textAlign: 'left',
      '& .header': {
        color: '#FFF',
        fontSize: '20px',
      },
      '& .shortDescription': {
        color: '#AAA',
        fontSize: '15px',
      },
    },
    '&:hover': {
      cursor: 'pointer',
      background: 'rgba(217, 217, 217, 0.10)',
    },
  },
});
