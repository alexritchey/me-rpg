const dummyData = [
    {
        id: 100,
        title: "My First Todo",
        dismissed: false
    },
    {
        id: 101,
        title: "My Second Todo",
        dismissed: false
    },
    {
        id: 102,
        title: "My Third Todo",
        dismissed: false
    },
    {
        id: 103,
        title: "My Fourth Todo",
        dismissed: false
    },
    {
        id: 104,
        title: "My Fifth Todo",
        dismissed: false
    }
];

const todos = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_ACTION':
            return dummyData;
        default:
            return state;
    }
};

export default todos;