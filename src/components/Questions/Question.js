import React from 'react';

export default function Question(props){
    console.log(props.questionList)
    return(
        <React.Fragment>
            {props.questionList && props.questionList.map((question,i) => {
               return <p>{question.description}</p>
            })}
        </React.Fragment>
    )
}