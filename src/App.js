import React from 'react';
import logo from './logo-social.png';
import './App.css';


const App = () => {

  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://st2.depositphotos.com/4035913/6124/i/600/depositphotos_61243831-stock-photo-letter-s-logo.jpg'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Message</a>
        </div>

        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>Main content
        <div>
          <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'></img>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
