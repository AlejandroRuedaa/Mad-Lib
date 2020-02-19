import React, { Component } from 'react';
import InputBoxes from './components/InputBoxes.js';
import './App.css';
import Paragraph from './components/Paragraph'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            noun1: "",
            verb1: "",
            noun2: "",
            noun3: "",
            adjective1: "",
            verb2: "",
            adjective2: "",
            noun4: "",
            realNoun1: "",
            realVerb1: "",
            realNoun2: "",
            realNoun3: "",
            realAdjective1: "",
            realVerb2: "",
            realAdjective2: "",
            realNoun4: "",
            hidden: 0
        }
    }
    updateNoun1 = (event) => {this.setState({noun1: event.target.value})}
    updateNoun2 = (event) => {this.setState({noun2: event.target.value})}
    updateNoun3 = (event) => {this.setState({noun3: event.target.value})}
    updateNoun4 = (event) => {this.setState({noun4: event.target.value})}
    updateVerb1 = (event) => {this.setState({verb1: event.target.value})}
    updateVerb2 = (event) => {this.setState({verb2: event.target.value})}
    updateAdjective1 = (event) => {this.setState({adjective1: event.target.value})}
    updateAdjective2 = (event) => {this.setState({adjective2: event.target.value})}

    submitHandler = (event) => {
    event.preventDefault()
    this.setState({
        realNoun1: this.state.noun1,
        realNoun2: this.state.noun2,
        realNoun3: this.state.noun3,
        realNoun4: this.state.noun4,
        realVerb1: this.state.verb1,
        realVerb2: this.state.verb2,
        realAdjective1: this.state.adjective1,
        realAdjective2: this.state.adjective2,
        hidden: 1})
    }

    clear = () => {
        this.setState({
            noun1: "",
            verb1: "",
            noun2: "",
            noun3: "",
            adjective1: "",
            verb2: "",
            adjective2: "",
            noun4: "",
            realNoun1: "",
            realVerb1: "",
            realNoun2: "",
            realNoun3: "",
            realAdjective1: "",
            realVerb2: "",
            realAdjective2: "",
            realNoun4: "",
            hidden: 0
        })
    }

        render(){
            return(
                <div>
                <h1>Mad Lib</h1>
                <div class="Flexbox">
                < InputBoxes 
                noun1={this.state.noun1}
                verb1={this.state.verb1}
                noun2={this.state.noun2}
                noun3={this.state.noun3}
                adjective1={this.state.adjective1}
                verb2={this.state.verb2}
                adjective2={this.state.adjective2}
                noun4={this.state.noun4}
                updateNoun1 = { this.updateNoun1 }
                updateNoun2 = { this.updateNoun2 }
                updateNoun3 = { this.updateNoun3 }
                updateNoun4 = { this.updateNoun4 }
                updateVerb1 = { this.updateVerb1 }
                updateVerb2 = { this.updateVerb2 }
                updateAdjective1 = { this.updateAdjective1 }
                updateAdjective2 = { this.updateAdjective2 }
                submitHandler = { this.submitHandler }
                />
                { this.state.hidden === 1 &&
                <Paragraph
                noun1={this.state.realNoun1} verb1={this.state.realVerb1} noun2={this.state.realNoun2} noun3={this.state.realNoun3} adjective1={this.state.realAdjective1} verb2={this.state.realVerb2} adjective2={this.state.realAdjective2} noun4={this.state.realNoun4}
                clear={this.clear}/>
            }
                </div>
            </div>
            )
        }
    }


export default App;
