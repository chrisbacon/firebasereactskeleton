import React from 'react';
import * as firebase from 'firebase';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.firebase = firebase.initializeApp({
            apiKey: "AIzaSyCRsULEqFu6ighw1IsZZ-exCHuBiFIZgVQ",
            authDomain: "symphoniccodetest.firebaseapp.com",
            databaseURL: "https://symphoniccodetest.firebaseio.com",
            storageBucket: "symphoniccodetest.appspot.com",
            messagingSenderId: "802683669466"
          });

        this.database = this.firebase.database();
    }

    render() {
        return(<h1>Firebase App ready to go!</h1>)
    }
}

export default Main;