// MyComponent.js
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCartDataAction } from './reducer';

const Posts = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        dispatch(addCartDataAction(data))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
