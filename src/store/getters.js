const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  avatar: state => state.user.avatar,
  username: state => state.user.username
};
export default getters;
