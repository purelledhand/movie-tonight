import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Navbar() {
  return (
    <div className="Navbar">
      <h1>MOVIETONIGHT</h1>
      <div className="Navi_list">
        <ul>
          <li>다운로드 많은 순</li>
          <li>평점 높은 순</li>
          <li>좋아요 많은 순</li>
          <li>최근 개봉 순</li>
          <li>피어 많은 순</li>
          <li>시드 많은 순</li>
        </ul>
      </div>
    </div>
  );
}
//ReactDOM.render(<Navbar/>, document.getElementById('navigation'));
ReactDOM.render(<App />, document.getElementById('root'));
document.querySelector("head").innerHTML +=
  '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous">';
// ReactDOM.render(component to push, where to push)
// App 컴포넌트를 id가 root인 element에 넣는다.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
