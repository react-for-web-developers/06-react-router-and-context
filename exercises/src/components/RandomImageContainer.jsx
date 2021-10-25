import axios from 'axios';

import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const pets = {
  cat: { url: 'https://aws.random.cat/meow', target: 'file' },
  dog: { url: 'https://random.dog/woof.json', target: 'url' },
};

export default function RandomImageContainer() {
  const [imgUrl, setImgUrl] = useState('');
  const { animal } = useParams();
  const history = useHistory();
  if (pets[animal] === undefined) history.push('/NotFound');

  const fetchImage = () => {
    const { url, target } = pets[animal];
    axios.get(url).then((response) => setImgUrl(response.data[target]));
  };

  useEffect(() => fetchImage(), []);
  useEffect(() => fetchImage(), [animal]);

  return (
    <>
      <figure className='image is-fullwidth'>
        <img src={imgUrl} />
      </figure>
    </>
  );
}
