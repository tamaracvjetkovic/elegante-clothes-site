import React from 'react'
import { useEffect, useState } from 'react';


const useFetch = ( url ) => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then(res =>  {
              if (!res.ok) {
                throw Error('could not fetch the data');
              }
              return res.json()
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setLoaded(true);
              setError(null);
            })
            .catch(err => {
              setError(err.message);
              setLoaded(false);
            });
        }, 0);
      }, []);

      return { data, loaded, error };
}

export default useFetch

