import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';

class App extends React.Component{
    render(){
        return(
            <div>Hello, world</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))