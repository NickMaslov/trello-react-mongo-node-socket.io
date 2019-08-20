import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";

function App({ lists }) {
  return (
    <div className="App">
      <h2>Hello User</h2>
      <div style={styles.listContainer}>
        {lists.map(list => {
          return (
            <TrelloList
              key={list.id}
              listId={list.id}
              title={list.title}
              cards={list.cards}
            />
          );
        })}
        <TrelloActionButton list />
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
