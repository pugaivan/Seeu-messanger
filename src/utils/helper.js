export const isObjectEmpty = (obj) => {
    return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}

export const parseErrorMessage = (error) => {
    if (error?.response?.data?.errorMessage) {
        return error.response.data.errorMessage
    } else {
        return 'Something went wrong, please try again later'
    }
}