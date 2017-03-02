import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // this.firebase = firebase.initializeApp({
        //     //Put project config here
        //   });

        // this.database = this.firebase.database();
    }

    render() {
        return(<h1>Firebase App ready to go!</h1>)
    }
}

export default Main;