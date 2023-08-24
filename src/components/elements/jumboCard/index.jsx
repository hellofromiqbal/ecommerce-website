import React from 'react';
import { Link } from 'react-router-dom';

const JumboCard = (props) => {
  const { title, url, imgUrl } = props;
  return (
    <Link to={url} className={`basis-1/2 flex relative`}>
      <img className='object-cover hover:opacity-90 transition delay-75' src={imgUrl} alt={title} />
      <h3 className='text-lg md:text-2xl font-semibold text-white absolute top-2 left-2'>{title}</h3>
    </Link>
  )
};

export default JumboCard;