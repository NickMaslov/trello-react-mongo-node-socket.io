import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

function TrelloList({ title, cards, listId }) {
  return (
    <Droppable droppableId={`${listId}`}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h2>{title}</h2>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              text={card.text}
              id={card.id}
              index={index}
            />
          ))}
          <TrelloActionButton listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default TrelloList;
