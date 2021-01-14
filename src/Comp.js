import React, { useState } from 'react';

/* Alternative implementation */
/*export class Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render () {
        return (
            <div className = "Comp">
                <h1> {this.props.name} </h1>
            </div>
        );
    }
}*/

export const Comp = (props) => {
    const [count, setCount] = useState(0);

    
    return (
        <div className = "main">
            <h1> {props.name} </h1>
        </div>
    );
}
/* Hello world */
/* Min's test edit */