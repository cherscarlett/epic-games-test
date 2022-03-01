import React from 'react';
import { Link } from 'react-router-dom';

import './Home.sass';

const Home = () => {
  return (
    <div className='container'>
      <div className='row text-center'>
        <p className='appIntro'>
          Implement the following functionality and submit your response.
        </p>
      </div>
      <div className='tasks'>
        <div className='task'>
          <Link className='btn' to='/task-1'>
            Javascript Matrix Unwind
          </Link>
        </div>
        <div className='task'>
          <Link className='btn' to='/task-2'>
            Node Client
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
