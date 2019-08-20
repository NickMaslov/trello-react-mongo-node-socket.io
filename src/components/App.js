import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App({ lists, dispatch }) {
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h2>Hello User</h2>
        <ListContainer>
          {lists.map(list => (
            <TrelloList
              key={list.id}
              listId={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </ListContainer>
      </div>
    </DragDropContext>
  );
}

// const styles = {
//   listContainer: {
//     display: "flex",
//     flexDirection: "row"
//   }
// };

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
