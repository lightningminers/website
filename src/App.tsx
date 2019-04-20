import React, { Component } from 'react';
import './App.css';
import icon from "./img/favicon.png";
import articles from "./articles";
import bg from "./img/5c07e6dcbd9df.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="header">
            <img src={icon} />
            <span className="header-text">闪电矿工翻译组</span>
          </header>
          <div className="content">
            <header className="content-header">
              <img src={bg} />
            </header>
            <div className="content-container">
              {
                articles.map((v) => {
                  return (
                    <div key={v.id} className="item">
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {v.date}: {v.name}
                      </a>
                    </div>
                  )
                })
              }
            </div>
            <footer className="copyright">
              <h2>Copyright</h2>
              <p>
                版权声明: <a target="_blank" rel="noopener noreferrer" href="https://github.com/lightningminers/article">闪电矿工翻译组</a> 译文仅用于学习、研究和交流。
              </p>
              <p>
                版权归: <a target="_blank" rel="noopener noreferrer" href="https://github.com/lightningminers/article">闪电矿工翻译组</a>、文章作者和译者所有，欢迎非商业转载。
              </p>
              <p>
                转载前请联系译者或 <a target="_blank" rel="noopener noreferrer" href="https://github.com/icepy">管理员 @icepy</a> 获取授权，并在文章开头明显位置注明本文出处、译者、校对者和闪电矿工翻译组的完整链接，违者必究。
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
