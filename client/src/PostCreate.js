import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group shadow-sm p-3 mb-5 rounded">
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control shadow-sm p-3 mb-5 rounded"
          />
        </div>
        <button className="btn btn-primary ">Submit</button>
      </form>
    </div>
  );
};
