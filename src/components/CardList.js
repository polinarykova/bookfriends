import React from "react";
import Card from "./Card";

const CardList = ({books}) => {
    const cardComp = books.map((user, i) => {
        return <Card 
        key = {i} 
        image={books[i].image} 
        name={books[i].name} 
        book={books[i].title}
        />
    })
    return (
        <div className="tc">
            {cardComp}
        </div>
    );
}

export default CardList;