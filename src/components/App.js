import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

function App({ lists }) {
  return (
    <div className="App">
      <h2>Hello User</h2>
      <div style={styles.listContainer}>
        {lists.map(list => {
          return <TrelloList title={list.title} cards={list.cards} />;
        })}
      </div>
    </div>
  );
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
