import React, { Component } from 'react';
import './App.css'; // App이라는 component의 디자인을 수정한다


// Table Of Contents = TOC
class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="1.html">CSS</a></li>
          <li><a href="1.html">JAVASCRIPT</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render () {
    return (
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    );
  }
}

// 리팩토링
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub} 
      </header>   
    );
  }
}

// Component를 만드는 코드
// 유사 Javascript 는 Javascript가 아닙니다.
// 페이스북 JSX 언어를 만들었음
// React의 Component는 정리정돈이라는 개념으로 생각하면 좋다.
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
