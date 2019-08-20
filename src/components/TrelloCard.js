import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

function TrelloCard({ text, id, index }) {
  return (
    <Draggable draggableId={`${id}`} index={index}>
      {provided => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
          {provided.placeholder}
        </CardContainer>
      )}
    </Draggable>
  );
}

// const styles = {
//   cardContainer: {
//     marginBottom: 8
//   }
// };

export default TrelloCard;
