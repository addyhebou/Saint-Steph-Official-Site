import '../Styles/HeaderWithBtn.scss';

export default function HeaderWithBtn({
  title,
  buttonText,
  link,
}: {
  title: string;
  buttonText: string;
  link: string;
}) {
  return (
    <div className="HeaderWithBtn">
      <h1 className="SiteTitle">{title}</h1>
      <a className="SiteButton" href={link} target={'_blank'} rel="noreferrer">
        {buttonText}
      </a>
    </div>
  );
}
