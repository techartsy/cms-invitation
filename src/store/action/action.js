import axios from "axios";
const baseUrl = "https://be-invitation-gempor.herokuapp.com/invitation/";

export const fetchParticipants = () => {
  return (dispatch) => {
    axios({
      url: `${baseUrl}guest`,
      method: "GET",
    })
      .then(({ data }) => {
        dispatch({
          type: "FETCH_PARTICIPANTS",
          payload: data?.data?.guests,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchGiftConfirmation = () => {
  return (dispatch) => {
    axios({
      url: `${baseUrl}gift`,
      method: "GET",
    })
      .then(({ data }) => {
        dispatch({
          type: "FETCH_GIFT_CONFIRMATION",
          payload: data?.data?.gifts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setResponsive = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "SET",
      payload: payload,
    });
  };
};

export const login = (userData) => {
  return (dispatch) => {
    axios({
      url: `${baseUrl}admin/login`,
      method: "POST",
      data: userData,
    })
      .then(({ data }) => {
        if (data && data.access_token) {
          const { access_token } = data;
          localStorage.setItem("access_token", access_token);
          dispatch({
            type: "SET_IS_LOGIN",
            payload: true,
          });
        }
      })
      .catch(({ response }) => {
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: response.data.message,
        });
      });
  };
};

export const deleteMemberDispatcher = (memberId) => {
  return (dispatch) => {
    const token = localStorage.getItem("access_token");
    axios({
      url: `${baseUrl}delete/${memberId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        dispatch({
          type: "DELETE_MEMBER",
          payload: memberId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setIsLogin = (isLogin) => {
  return (dispatch) => {
    dispatch({
      type: "SET_IS_LOGIN",
      payoad: isLogin,
    });
  };
};

export const resetErrorMsg = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_ERROR_MESSAGE",
    });
  };
};
