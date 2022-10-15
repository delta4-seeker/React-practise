import React from 'react';
import ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
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