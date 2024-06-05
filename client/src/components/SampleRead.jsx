import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SampleRead() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/readfromserver')
      .then((data) => setServerData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="sub_main">
      <section className="container">
        {serverData.map((data, index) => {
          return (
            <div key={index}>
              {data.title} / {data.content} / {data.date} / {index}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default SampleRead;
