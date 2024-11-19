import React from 'react';

const Avatar = ({ src }) => (
  <div className="btn btn-ghost btn-circle avatar">
    <div className="w-8 md:w-10 rounded-full">
      <img alt="Profile" src={src} />
    </div>
  </div>
);

export default Avatar;