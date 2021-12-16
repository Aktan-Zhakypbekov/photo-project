import React from 'react';

const CardItem = ({ data, touchTheCard }) => {
  return (
    <div className='card-item-cont'>
      <div className='img-cont'>
        <img
          src={data.url}
          alt='img'
          onClick={() => {
            touchTheCard(data.id);
          }}
        />
      </div>
      <div className='message-cont'>
        <div className='img-name'>{data.name}</div>
        <div className='img-author'>{data.author}</div>
      </div>
    </div>
  );
};

export default CardItem;
