export const isObjectEmpty = (obj) => {
    return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}

export const parseErrorMessage = (error) => {
    return error.response.data.errorMessage
}