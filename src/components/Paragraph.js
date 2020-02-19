import React from 'react'
const Paragraph = (props) => {
    return (
        <div id="paragraph">
        <p>Today a {props.noun1} came to our school to talk to us about her job. She said the most important skill you need to know to do her job is to be able to {props.verb1} around {props.adjective1} {props.noun2}. She said it was easy for her to learn her job because she loved to {props.verb2} when she was my age and that helps a lot! If you're considering her profession, I hope you can be near {props.adjective2} {props.noun3}. That's very important! If you get too distracted in that situation you won't be {props.noun4}</p>
        <button class="button" onClick = { props.clear }>Clear</button>
        </div>
    )
}
export default Paragraph
