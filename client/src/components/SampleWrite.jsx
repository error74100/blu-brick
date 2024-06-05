import React, { useState } from 'react';
import axios from 'axios';

function SampleWrite() {
  let [titleValue, setTitleValue] = useState('');
  let [contentValue, setContentValue] = useState('');

  const formatDate = () => {
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);

    var dateString = year + '-' + month + '-' + day;
    var timeString = hours + ':' + minutes + ':' + seconds;

    return dateString + ' ' + timeString;
  };

  const saveData = async () => {
    try {
      await axios.post('http://localhost:5000/writetodatabase', {
        title: titleValue,
        content: contentValue,
        date: formatDate(),
      });

      alert('Data saved: ', titleValue, contentValue);
    } catch (error) {
      console.log('error while saving dude: ', error.message);
    }
  };

  return (
    <main className="sub_main">
      <section className="container">
        <div>
          <input
            type="string"
            placeholder="enter something"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </div>
        <div>
          <input
            type="string"
            placeholder="enter something"
            value={contentValue}
            onChange={(e) => setContentValue(e.target.value)}
          />
        </div>
        <div>
          <button onClick={saveData}> save data to mongodb</button>
        </div>
      </section>
    </main>
  );
}

export default SampleWrite;
