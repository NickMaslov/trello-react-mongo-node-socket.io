import { CONSTANTS } from "../actions";

const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text:
          "we created a static list and a static cardwe created a static list and a static cardwe created a static list and a static card"
      },
      {
        id: 1,
        text: "We used React and Materisl UI"
      }
    ]
  },
  {
    title: "Next Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text:
          "we created a static list and a static cardwe created a static list and a static cardwe created a static list and a static card"
      },
      {
        id: 1,
        text: "We used React and Materisl UI"
      },
      {
        id: 2,
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
        id: state.length
      };
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          const newCard = {
            text: action.payload.text,
            id: list.cards.length
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
