import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

function App({ lists }) {
  return (
    <div className="App">
      <h2>Hello User</h2>
      {lists.map(list => {
        return <TrelloList title={list.title} cards={list.cards} />;
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
