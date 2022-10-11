import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component{

  constructor(props){
    super(props) ; 
    this.state = {
      text : "" , 
      items : []
    }
    this.handleChange  = this.handleChange.bind(this) ; 
    this.handleSubmit = this.handleSubmit.bind(this) ; 



  }


  handleChange(e) { 
    this.setState({
        text : e.target.value 

    })
  }

  handleSubmit(e){
    e.preventDefault() ; 
    if(this.state.text.length === 0){
      return ; 
    }

    const newItem = {
      id : Date.now() , 
      text : this.state.text
    }
    console.log(newItem);


    this.setState(state => ({
      text : '' , 
      items : state.items.concat(newItem)
    }));

  }
  render(){

 
        return (
    
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto position-relative">
                <h1 className="mb-5">TO-DO App</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto position-relative">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0"><input onChange={this.handleChange} value={this.state.text} className="form-control" type="text" style={{width: '444px', height: '48px'}} /></div>
                    <div className="col-12 col-md-3"><button onClick={this.handleSubmit} className="btn btn-primary btn-lg" type="submit">Add To do</button></div>
                  </div>
                </form>
                <ul >
                  { this.state.items.map(item => {
                    return <li key={item.id} >{item.text}</li>


                  })}
        </ul>
              </div>
            </div>
          </div>
        );
      


  }

}




root.render(<App/>);


