import * as reviewConstant from "../constants/reviewConstant";

export const addReview = (review: IReview) => async (dispatch: any) => {
  try {
    dispatch({
      type: reviewConstant.ADD_REVIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(`Review: ${review}`);
  } catch (error) {
    dispatch({
      type: reviewConstant.ADD_REVIEW_FAIL,
      payload: error,
    });
  }
};
