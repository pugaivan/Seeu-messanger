export const isUserAuthorized = (key) => {
    return !!localStorage.getItem(key);
}

export const createJwtToken = (key, value) => {
    localStorage.setItem(key, value);
}

export const deleteJwtToken = (key) => {
    localStorage.removeItem(key);

}