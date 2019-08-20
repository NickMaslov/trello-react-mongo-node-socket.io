import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App({ lists, dispatch }) {
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h2>Hello User</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <TrelloList
                  key={list.id}
                  listId={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <TrelloActionButton list />
            </ListContainer>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
