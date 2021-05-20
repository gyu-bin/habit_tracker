import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './app';
import '@fortawesome/fontawesome-free/js/all'
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  <React.StrictMode> {/* 콘솔이 두번씩 출력된다. 검사의 목적 */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);
