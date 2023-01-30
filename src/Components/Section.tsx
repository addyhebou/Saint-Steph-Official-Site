import React from 'react';
import '../Styles/Section.scss';

export default function Section({
  title,
  paragraph,
  list,
  designImage,
  media,
  magicMoment,
}: {
  title: string;
  paragraph?: string;
  list?: string[];
  designImage?: string;
  media?: string[];
  magicMoment?: boolean;
}) {
  return (
    <div className="Section">
      <h1>{title}</h1>
      <p>{paragraph}</p>
      {designImage && (
        <img src={designImage} alt="Image describing how amazing Jahaan is" />
      )}
      {magicMoment && <p>Magic Moment For Me</p>}
      <ul>
        {list?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div>
        {media?.map((item) => (
          <img src={item} alt="Media image" />
        ))}
      </div>
    </div>
  );
}
