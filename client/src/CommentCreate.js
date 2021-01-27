import React, { useState } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group shadow-sm p-3 mb-5 rounded">
          <label>New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control shadow-sm p-3 mb-5 rounded"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
