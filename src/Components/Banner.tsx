import '../Styles/Banner.scss';
export default function Banner({ dimmed }: { dimmed: boolean }) {
  const dimStyles = dimmed ? 'rgba(0,0,0,.5)' : '';

  const url =
    'https://storage.cloud.google.com/saint_steph_site_photos/Me%20at%20PH%20Studio%201.png';

  return (
    <div className="Banner" style={{ backgroundColor: dimStyles }}>
      <img className="BannerImage" src={url} alt="Saint Steph in the studio" />
    </div>
  );
}
