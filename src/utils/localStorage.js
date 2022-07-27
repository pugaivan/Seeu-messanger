export const getStorage = (key) => {
    return localStorage.getItem(key);
}

export const createStorage = (key, value) => {
    localStorage.setItem(key, value);


}

export const deleteStorage = (key) => {
    localStorage.removeItem(key);

}