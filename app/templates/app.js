import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';

import Comp from './components/comp.js';
import React from 'react';

class App extends React.Component {
    render() {
        return (
        	<div>
                Greetings:<Comp/>
            </div>
        );
    }
}

React.render(<App />, document.body);
