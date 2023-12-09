import React from 'react';
import { SAINT_STEPH_SOCIALS, Social } from '../Constants/Socials';
import '../Styles/Socials.scss';

export default function Socials() {
  return (
    <div className="Socials">
      {SAINT_STEPH_SOCIALS.map((social: Social) => (
        <a href={social.link} target="_blank" rel="noreferrer">
          <img
            className="SocialIcon"
            src={social.imageURL}
            alt={social.name + ' icon'}
          />
        </a>
      ))}
    </div>
  );
}
