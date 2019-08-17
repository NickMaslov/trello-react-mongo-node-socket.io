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
    // case value:

    //     break;

    default:
      return state;
  }
};

export default listsReducer;
