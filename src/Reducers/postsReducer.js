const initialState = {
    usersData : [
        { userName: 'Akash', UserText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, architecto! Harum, delectus in facilis voluptates officia veniam maiores laborum labore.', imgUrl: '/images/india-cricket-team.jpg'}
    ]
};
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD__POST':
            return {usersData : [action.payload, ...state.usersData]};
        default:
           return state;
    }
}
export default postsReducer;