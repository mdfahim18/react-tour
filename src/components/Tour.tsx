import React, { useState } from 'react';

type TourType = {
  tour: {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
  };
  deleteTour: Function;
};
const Tour = (props: TourType) => {
  const { id, name, info, image, price } = props.tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </footer>
      <button className='delete-btn' onClick={() => props.deleteTour(id)}>
        not intersted
      </button>
    </article>
  );
};
export default Tour;
