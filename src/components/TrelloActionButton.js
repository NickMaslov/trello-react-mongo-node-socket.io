import React, { useState } from "react";
import { Icon, Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";

function TrelloActionButton({ list }) {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");

  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };

  const handleInputChange = event => {
    setText(event.target.value);
  };

  const renderAddButton = () => {
    return (
      <div style={styles.openFormButtonGroup(list)} onClick={openForm}>
        <Icon>add</Icon>
        <p>Add another {list ? "list" : "card"}</p>
      </div>
    );
  };

  const renderForm = () => {
    const placeholder = `Enter a title for this ${list ? "list" : "card"}...`;
    const buttonTitle = `Add ${list ? "List" : "Card"}`;
    return (
      <div>
        <Card style={styles.textareaCard}>
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            style={styles.textarea}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button variant="contained" style={styles.addButton}>
            {buttonTitle}
          </Button>
          <Icon style={styles.closeButton}>close</Icon>
        </div>
      </div>
    );
  };

  return formOpen ? renderForm() : renderAddButton();
}

const styles = {
  //   actionButton: list => {
  //     return {
  //       opacity: list ? 1 : 0.5,
  //       color: list ? "white" : "inherit",
  //       backgroundColor: list ? "rgba(0,0,0,.15)" : "inherit"
  //     };
  //   },
  openFormButtonGroup: list => {
    return {
      opacity: list ? 1 : 0.5,
      color: list ? "white" : "inherit",
      backgroundColor: list ? "rgba(0,0,0,.15)" : "inherit",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: 3,
      height: 36,
      width: 272,
      padding: 10
    };
  },
  textarea: {
    resize: "none",
    width: "100%",
    border: "none",
    outline: "none",
    overflow: "hidden",
    font: "inherit",
    fontFamily: "roboto"
  },
  textareaCard: {
    minHeight: 80,
    minWidth: 272,
    padding: "6px 8px 2px"
  },
  addButton: {
    color: "white",
    backgroundColor: "#5aac44"
  },
  closeButton: {
    marginLeft: 8,
    cursor: "pointer"
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
};

export default TrelloActionButton;
