import React from 'react';

import './Card.css';

const Card = (props) => {

    let info = <p>{JSON.stringify((props.data), undefined, 8)}</p>

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
        </div>
    )
}
export default Card;

