const stateDefault = {
    open: false,
    urlYoutube: "",
  }
  
  export const ModalTrailerReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case 'OPEN_MODAL': {
        return { open: action.payload.open, urlYoutube: action.payload.urlYoutube };
      }
      case 'CLOSE_MODAL': {
        return { open: action.payload.open, urlYoutube: "" };
      }
      default:
        return state;
    }
  }