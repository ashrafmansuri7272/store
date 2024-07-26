// MyComponent.js
import React, { useState, useEffect } from 'react';
import store from './store';
import { addCartAction } from './actions';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log('Data from fetch:', data);
        store.dispatch(addCartAction(data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log('Updated cartData:', store.getState().cartData);
  }, [store.getState().cartData]);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
