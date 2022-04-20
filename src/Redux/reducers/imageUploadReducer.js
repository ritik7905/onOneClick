const initialState = {
    images: [
        { id: 1, image_url: '../../assets/images/1.png', image_name: 'Rohit' },
    ],
}

export const imageUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPLOAD_IMAGE_SUCCESS':
            console.log('upload image success');
            return {
                ...state,
                image: action.image
            }
        case 'UPLOAD_IMAGE_ERROR':
            console.log('upload image error');
            return {
                ...state,
                image: action.image
            }
        default:
            return state;
    }
}