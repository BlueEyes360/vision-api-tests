import React from 'react';

import './Card.css';

const Card = (props) => {

    let info = <p>{JSON.stringify((props.data), undefined, 8)}</p>

    let separateCards = Array.from(JSON.stringify(props.data));
    separateCards = separateCards.map((element, index) => <Card data={element} key={index} />)
    // let infoobject = props.data.map((element, index) => <Card data={element} key={index} /> )

    // const createCard = () => {

    //     labelInfo = props.data.labelAnnotations.map((x, index) =>
    //         <div key={index}>
    //             <p>Description: {x.description}</p>
    //             <p>Mid: {x.mid}</p>
    //             <p>Score: {x.score}</p>
    //             <hr/>
    //         </div>
    //     );

    // }

    // createCard();

    return (
        <div className="Card">
            {/* <p>Type: Label Annotations</p> */}
            {info}
            {/* {separateCards} */}
            {/* {infoobject} */}
        </div>
    )
}
export default Card;

