import React, { Component } from 'react';

import './App.css';
import Posters from "./components/Posters/Posters"

class App extends Component {
  render() {
    return (
        <div className="App">
            <Posters name="Терминатор" image="/images/Terminator_poster.jpg" year="1984"/>
            <Posters name="Законопослушный гражданин" image="/images/Law-Abiding-Citizen.jpg" year="2009"/>
            <Posters name="Перевозчик 2" image="/images/transpoter2.jpg" year="2005"/>
            <Posters name="Побег из Шоушенка" image="/images/shoushenk.jpg" year="1994"/>
        </div>
    );
  }
}

export default App;
