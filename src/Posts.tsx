// MyComponent.js
import { useState, useEffect } from 'react';
import store from './store';
import { useDispatch } from 'react-redux';
import { addCartAction } from './reducer';

const Posts = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        dispatch(addCartAction(data))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log('Updated cartData:', store.getState().cart);
  }, [store.getState().cart]);

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
