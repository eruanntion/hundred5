/**
 * Set rating action creator
 * @param rating
 * @returns {{type: string, rating: *}}
 */
export const setRatingAction = (rating) => ({type: 'SET_RATING', rating});

/**
 * Close popup action creator
 * @returns {{type: string}}
 */
export const closePopupAction = () => ({type: 'CLOSE_POPUP'});