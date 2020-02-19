import React from 'react'

const InputBoxes = (props) => {
    return(
        <form id="inputBoxes"
        onSubmit={props.submitHandler}>
        <label>Noun: </label>
        <input
        class="input"
        value={props.noun1}
        onChange = { props.updateNoun1 } />
        <label>Verb: </label>
        <input
        class="input"
        value={props.verb1}
        onChange = { props.updateVerb1 }/>
        <label>Noun: </label>
        <input
        class="input"
        value={props.noun2}
        onChange = { props.updateNoun2 }/>
        <label>Noun: </label>
        <input
        class="input"
        value={props.noun3}
        onChange = { props.updateNoun3 }/>
        <label>Adjective: </label>
        <input
        class="input"
        value={props.adjective1}
        onChange = { props.updateAdjective1 }/>
        <label>Verb: </label>
        <input
        class="input"
        value={props.verb2}
        onChange = { props.updateVerb2 }/>
        <label>Adjective: </label>
        <input
        class="input"
        value={props.adjective2}
        onChange = { props.updateAdjective2 }/>
        <label>Noun: </label>
        <input
        class="input"
        value={props.noun4}
        onChange = { props.updateNoun4 }/>
        <br/>
        <input class="button" type="submit"/>
        </form>
    )
}
export default InputBoxes
