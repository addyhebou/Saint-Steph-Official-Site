import React, { useEffect, useState } from 'react';
import {
  footerDockClassname,
  otherVideosClassname,
  videoPageContentClassname,
} from '../Styles/VideoPage';
import ShareIcon from '@mui/icons-material/Share';
import { PORTFOLIO_CATEGORY_CARDS } from '../Constants/PortfolioCategoryCards';
import { Popover, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Category, PORTFOLIO_VIDEOS } from '../Constants/PortfolioVideos';

type Video = {
  name: string;
  description: string;
  embedID: string;
  shortDescription: string;
};

const YoutubeEmbed = ({ embedID }: { embedID: string }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

const VideoSection = ({
  name,
  description,
  /**/ embedID /*, thumbnailURL,*/,
}: {
  embedID: string;
  description: string;
  name: string;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${embedID}`);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="VideoSectionClassname">
      <YoutubeEmbed embedID={embedID} />
      <h2>{name}</h2>
      <div className="footer">
        <p className="description">{description}</p>
        <button className="shareButton" onClick={handleClick}>
          <ShareIcon />
          Share
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Video link copied!</Typography>
        </Popover>
      </div>
    </div>
  );
};

const OtherVideos = ({
  category,
  setCurrentVideo,
}: {
  category: string;
  currentVideo: Video;
  setCurrentVideo: React.Dispatch<React.SetStateAction<Video | undefined>>;
}) => {
  return (
    <ul className={otherVideosClassname}>
      {PORTFOLIO_VIDEOS.map(
        (video) =>
          video.category === category && (
            <li className="video" onClick={() => setCurrentVideo(video)}>
              <div className="thumbnail">
                <img
                  src={`http://img.youtube.com/vi/${video.embedID}/0.jpg`}
                  alt={video.description}
                />
                {/* <p>{1.09}</p> */}
              </div>
              <div className="text">
                <p className="header">{video.name}</p>
                <p className="shortDescription">{video.shortDescription}</p>
              </div>
            </li>
          )
      )}
    </ul>
  );
};

const FooterDock = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  return (
    <div className={footerDockClassname}>
      {PORTFOLIO_CATEGORY_CARDS.map((card) => (
        <div className="cardWrapper">
          <img
            src={card.imageURL}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            onClick={() =>
              navigate(`/portfolio/${card.title}`, { replace: true })
            }
            alt={card.altDescription}
          />
          <Popover
            sx={{
              pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>{card.title}</Typography>
          </Popover>
        </div>
      ))}
    </div>
  );
};

export default function VideoPage({ category }: { category: Category }) {
  const getFirstVideo = (category: Category) =>
    PORTFOLIO_VIDEOS.find((video) => video.category === category);
  const [currentVideo, setCurrentVideo] = useState<Video | undefined>(
    getFirstVideo(category)
  );
  useEffect(() => {
    setCurrentVideo(getFirstVideo(category));
  }, [category]);

  return (
    <div className={'videoPageClassname'}>
      <div className={videoPageContentClassname}>
        {currentVideo && (
          <>
            <VideoSection
              embedID={currentVideo.embedID}
              name={currentVideo.name}
              description={currentVideo.description}
            />
            <OtherVideos
              category={category}
              currentVideo={currentVideo}
              setCurrentVideo={setCurrentVideo}
            />
          </>
        )}
      </div>
      <FooterDock />
    </div>
  );
}
