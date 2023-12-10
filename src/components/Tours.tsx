import React from 'react';
import Tour from './Tour';

type ToursType = {
  tours: any[];
  deleteTour: Function;
};
const Tours = (props: ToursType) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {props.tours.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} deleteTour={props.deleteTour} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
