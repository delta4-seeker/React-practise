import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM  from 'react-dom/client';
import App from './app' ; 
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
 

class Index extends React.Component{


    render(){
                 
       return <Provider store= {store}>
                <App/>
            </Provider>
     
    }
}


root.render(<Index />)