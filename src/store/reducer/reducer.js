const initialState = {
  participants: [],
  gifts: [],
  sidebarShow: "responsive",
  isLogin: false,
  errorMsg: "",
};

export default function cmsReducer(
  state = initialState,
  { type, payload, ...rest }
) {
  switch (type) {
    case "FETCH_PARTICIPANTS":
      return { ...state, participants: (state.participants = payload) };
    case "FETCH_GIFT_CONFIRMATION":
      return { ...state, gifts: (state.gifts = payload) };
    case "SET":
      return { ...state, sidebarShow: (state.sidebarShow = payload) };
    case "SET_IS_LOGIN":
      return { ...state, isLogin: (state.isLogin = payload) };
    case "DELETE_MEMBER":
      let filtered = state.participants.filter((member) => {
        return member.id !== payload;
      });
      return { ...state, participants: (state.participants = filtered) };
    case "SET_IS_LOGIN":
      return { ...state, isLogin: (state.isLogin = payload) };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMsg: (state.errorMsg = payload) };
    case "RESET_ERROR_MESSAGE":
      return { ...state, errorMsg: (state.errorMsg = "") };
    default:
      return state;
  }
}
