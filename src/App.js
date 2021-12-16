import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import uniqid from 'uniqid';

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [paintings, setPaintings] = useState([
    {
      id: uniqid(),
      touched: false,
      name: 'The Card Players',
      author: 'Paul Cezane',
      url: 'https://assets.architecturaldigest.in/photos/60084ed5a8f8397741704cbe/master/w_1600%2Cc_limit/Photo-by-DeAgostini-Getty-Images.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'Starry Night Over The Rhone',
      author: 'Vincent Van Gogh',
      url: 'https://betterlivingthroughbeowulf.com/wp-content/uploads/2018/08/starry-night-over-the-Rhone.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'American Gothic',
      author: 'Grant Wood',
      url: 'https://whitneymedia.org/assets/image/820357/large_American_Gothic.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'The Hands Resist Him',
      author: 'Bill Stoneham',
      url: 'https://www.juxtapoz.com/media/k2/galleries/49946/A_Juxtapoz_Haunted074_1.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'Milkmaid',
      author: 'Johanner Vermeer',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/640px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'Potato Eaters',
      author: 'Vincent Van Gogh',
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'Unnamed',
      author: 'Zdzisław Beksiński,',
      url: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/04/polish-artist-paintings-nightmares-zdzislaw-beksinski-590065d46552d__700.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'The Scream',
      author: 'Edvard Munch',
      url: 'https://i.guim.co.uk/img/media/8a840f693b91fe67d42555b24c6334e9298f4680/251_1497_2178_1306/master/2178.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=eeb2238745a593ec04237613a5798b3b',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'Self Portrait',
      author: 'Vincent Van Gogh',
      url: 'https://www.vincentvangogh.org/images/self-portrait.jpg',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'A Friend In Need',
      author: 'Cassius Marcellus Coolidge',
      url: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FphSxLtPuOSPsnJF0obkh5A%252FA_Friend_in_Need_1903_C.M.Coolidge.jpg&width=1200&quality=80',
    },
    {
      id: uniqid(),
      touched: false,
      name: `Whistler's Mother`,
      author: 'James Abbott McNeill Whistler',
      url: 'https://i.guim.co.uk/img/media/7b3bf07e33b452d91a7ac2fd208a2bd89992540a/0_0_3000_2670/master/3000.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=d48918435deb4a670d5aafa9bcf68259',
    },
    {
      id: uniqid(),
      touched: false,
      name: 'Girl With A Pearl Earring',
      author: 'Johannes Vermeer',
      url: 'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/Paintings08PearlEarrin.png',
    },
  ]);

  const touchTheCard = (id) => {
    if (
      paintings[paintings.findIndex((elem) => elem.id === id)].touched === true
    ) {
      setIsGameOver(true);
    } else {
      setPaintings((prev) => {
        prev[prev.findIndex((elem) => elem.id === id)].touched = true;

        return prev
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
      });
      setScore(score + 1);
    }
  };

  return (
    <div className='app-cont'>
      <header className='header'>
        <div className='header-text'>Photo memory app</div>
        <div className='score'>Score: {score}</div>
      </header>
      <main className='main'>
        <div className='canvas'>
          {paintings.map((elem) => {
            return (
              <CardItem key={elem.id} data={elem} touchTheCard={touchTheCard} />
            );
          })}
        </div>
      </main>
      <footer className='footer'>
        <div>Made by AZ</div>
      </footer>
    </div>
  );
}

export default App;
