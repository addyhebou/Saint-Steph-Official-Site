import {
  Box,
  Button,
  ButtonProps,
  Fade,
  Modal,
  rgbToHex,
  styled,
} from '@mui/material';
import React, { useEffect } from 'react';
import { ModalType, ModalTypes } from '../Constants/types';
import {
  AlertModalModalStyles,
  modalTitleClassname,
} from '../Styles/AlertModalStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import { AlertModalButtonStyles } from '../Styles/AlertModalButtonStyles';
import { Gradients } from '../Styles/variables';
import { adjustBrightness, getAverageColor } from '../Utils/getAverageColor';

interface Button {
  text: string;
  URL: string;
}

interface Props {
  open: boolean;
  handleClose: () => void;
  type?: ModalType;
  title?: string;
  description?: React.ReactNode;
  buttons?: Button[];
  artworkURL: string;
}

export const AlertModal = ({
  open,
  handleClose,
  type = ModalTypes.STANDARD,
  title,
  description,
  buttons,
  artworkURL,
}: Props) => {
  const [step, setStep] = useState(0);
  const [averageBackgroundColor, setAverageBackgroundColor] = useState<
    string[]
  >([]);

  const AlertModalButton = styled(Button)<ButtonProps>(
    () => AlertModalButtonStyles
  );

  const handleAction = (redirectURL: string) => {
    window.open(redirectURL, '_blank');
  };

  const getModalTitle = (type: ModalType) => {
    switch (type) {
      case ModalTypes.NEWS_ALERT:
        return 'New Release';
      case ModalTypes.EMAIL:
        return 'Email Sent!';
      case ModalTypes.RECORD:
        return '';
      default:
        break;
    }
  };

  useEffect(() => {
    getAverageColor(artworkURL)
      .then((color) => {
        setAverageBackgroundColor([
          rgbToHex(adjustBrightness(color, 0.2)),
          rgbToHex(adjustBrightness(color, 1, true)),
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [open, step]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box
            className={AlertModalModalStyles}
            style={{
              background:
                type !== ModalTypes.STANDARD && type !== ModalTypes.EMAIL
                  ? `linear-gradient(180deg, ${averageBackgroundColor[0]} 0%, ${averageBackgroundColor[1]} 100%)`
                  : Gradients.CHAMPAGNE_GOLD,
            }}
          >
            <h1 className={modalTitleClassname}>{getModalTitle(type)}</h1>
            <div className="contentAndFooter">
              <div className="content">
                <img src={artworkURL} alt={'Artwork for release information'} />
                <div className="textContent">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
              <div className="footer">
                {buttons?.map((button) => (
                  <AlertModalButton
                    variant="contained"
                    onClick={() => handleAction(button.URL)}
                  >
                    {button.text}
                  </AlertModalButton>
                ))}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
