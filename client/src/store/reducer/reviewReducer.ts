import * as reviewConstant from "../constants/reviewConstant";

const initialState: ReviewState = {
  reviews: [],
};

export const addReviewReducer = (
  state: ReviewState = initialState,
  action: ReviewAction
): ReviewState => {
  switch (action.type) {
    case reviewConstant.ADD_REVIEW_REQUEST:
      return { loading: true };
    case reviewConstant.ADD_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case reviewConstant.ADD_REVIEW_FAIL:
      return { loading: false, success: false, error: action.review };
    default:
      return state;
  }
};
