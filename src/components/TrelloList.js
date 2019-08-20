import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

function TrelloList({ title, cards, listId, index }) {
  return (
    <Draggable draggableId={`${listId}`} index={index}>
      {provided => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={`${listId}`}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h2>{title}</h2>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton listId={listId} />
              </div>
            )}
          </Droppable>
          {provided.placeholder}
        </ListContainer>
      )}
    </Draggable>
  );
}

export default TrelloList;
