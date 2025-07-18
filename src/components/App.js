import React, { useState, useEffect} from 'react';

function App(){

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImage(data.message);
      } catch (error) {
        console.error('Error fetching the image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <img src={image} alt='A Random Dog'></img>
  );

}

export default App;

