import { CONSTANTS } from "../actions";

const initialState = [
  {
    title: "Last Episode",
    id: "list-0",
    cards: [
      {
        id: "card-0-0",
        text:
          "we created a static list and a static cardwe created a static list and a static cardwe created a static list and a static card"
      },
      {
        id: "card-0-1",
        text: "We used React and Materisl UI"
      }
    ]
  },
  {
    title: "Next Episode",
    id: "list-1",
    cards: [
      {
        id: "card-1-0",
        text:
          "we created a static list and a static cardwe created a static list and a static cardwe created a static list and a static card"
      },
      {
        id: "card-1-1",
        text: "We used React and Materisl UI"
      },
      {
        id: "card-1-2",
        text: "We used React and Materisl UI in next Episode"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${state.length}`
      };
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          const newCard = {
            text: action.payload.text,
            id: `card-${list.id}-${list.cards.length}`
          };
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default listsReducer;
