import { Card, CardContent, Typography } from '@mui/material';
import {
  PortfolioCategoryCardClassName,
  portfolioPageBackgroundClassname,
} from '../Styles/PortfolioPage';
import {
  PORTFOLIO_CATEGORY_CARDS,
  PortfolioCategoryCardType,
} from '../Constants/PortfolioCategoryCards';
import { useNavigate, useParams } from 'react-router-dom';
import VideoPage from './VideoPage';
import { Category } from '../Constants/PortfolioVideos';

const PortfolioCategoryCard = ({
  title,
  subtitle,
  imageURL,
  altDescription,
}: PortfolioCategoryCardType) => {
  const navigate = useNavigate();
  return (
    <Card
      className={PortfolioCategoryCardClassName}
      sx={{ borderRadius: '25px' }}
      onClick={() => navigate(`/portfolio/${title}`, { replace: true })}
    >
      <CardContent>
        <img src={imageURL} style={{ width: '98px' }} alt={altDescription} />
        <Typography variant="h5" component="div" className="title">
          {title}
        </Typography>
        <Typography variant="body2" className="title sub">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function PortfolioPage() {
  const { category } = useParams();
  const getHeaderTitle = () =>
    category || 'What type of work would you like to see from me?';

  return (
    <div className={portfolioPageBackgroundClassname}>
      <h1 className={'pageHeader'}>{getHeaderTitle()}</h1>
      {category ? (
        <VideoPage category={category as Category} />
      ) : (
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '50vw',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '41px',
          }}
        >
          {PORTFOLIO_CATEGORY_CARDS.map((card) => (
            <PortfolioCategoryCard
              title={card.title}
              subtitle={card.subtitle}
              imageURL={card.imageURL}
              altDescription={card.altDescription}
            />
          ))}
        </div>
      )}
    </div>
  );
}
