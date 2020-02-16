import React, {Component} from 'react';
import { data } from './component/Data';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = { 
      nama: data
    };
  }

  render(){
    return (
      <div>
      <div className="judul">News App!</div>
      <div className="ganjel"></div>
        {
          this.state.nama.map((param) => {
            return (
             <div className="content">
                <div className="poto"><img src={param.thumbnail} /></div>
                <div clasName="ket">
                <h3>{param.title}</h3>
                <p>{param.pubDate}</p>
                <p>{param.author}</p>
                </div>
             <br/>
             <hr/>
             </div>
             )
          })
        }
      </div>
    );
  }
}

export default App;
