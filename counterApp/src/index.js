import React from 'react';
import ReactDOM from 'react-dom/client';

const counter = ReactDOM.createRoot(document.getElementById('counter'));


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }


  tick = () => {
    this.setState(old => ({
      counter: old.counter + 1
    }));
  }

  reset = () => {
      this.setState( old => ({
        counter : 0 
      }));
    }
 

  render() {
    return (
      <div>

        <header className="d-flex masthead" style={{backgroundImage: 'url("assets/img/bg-masthead.jpg")'}}>
          <div className="container my-auto text-center">
            <h1 className="mb-1" style={{borderColor: 'rgb(255,255,255)', color: 'rgb(255,255,255)'}}>{this.state.counter === 0 ? "Stylish Counter" : this.state.counter}</h1>
            <h3 className="mb-5" /><a className="btn btn-primary btn-xl js-scroll-trigger" role="button" onClick={ this.tick} href="#about" style={{fontSize: '27px', fontWeight: 'bold', color: 'var(--bs-secondary)', background: 'rgb(255,255,255)', borderStyle: 'none'}}>Increment Count</a>
            <div className="overlay" />
          </div>  </header>
        <section id="services" className="content-section bg-primary text-white text-center">
          <div className="container">
            <div className="content-section-heading">
              <h2 className="mb-5">Reset Counter</h2>
            </div>
            <div className="row">
              <div className="col"><button className="btn btn-primary" type="button" onClick={ this.reset} style={{background: 'rgb(255,255,255)', color: 'var(--bs-blue)', width: '261.4px', height: '60px', margin: '-16px', fontSize: '27px', fontWeight: 'bold', borderStyle: 'none'}}>Click to Reset</button></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

counter.render(<Timer />);