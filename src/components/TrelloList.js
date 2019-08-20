import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

function TrelloList({ title, cards, listId }) {
  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      {cards.map(card => (
        <TrelloCard key={card.id} text={card.text} />
      ))}
      <TrelloActionButton listId={listId} />
    </div>
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
