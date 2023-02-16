const InitalState = [
    {
        id: 1,
        title: '아악',
        content: '아아아악',
    },
    {
        id: 2,
        title: '으으응?',
        content: '에에에엥?',
    },
];

const memoReducer = (state = InitalState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default memoReducer;
