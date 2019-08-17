import React from "react";
import TrelloCard from "./TrelloCard";

function TrelloList({ title }) {
  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <TrelloCard />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
    padding: 8
  }
};

export default TrelloList;
