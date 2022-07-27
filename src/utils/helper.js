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

export const resizeSides = (container, left_panel, right_panel, drag) => {
    let isResizing = false;

    (function () {
        drag.current.onmousedown = function (e) {
            isResizing = true;
        };

        document.onmousemove = function (e) {
            if (!isResizing) {
                return;
            }

            let offsetRight = container.current.clientWidth - (e.clientX - container.current.offsetLeft);

            left_panel.current.style.right = offsetRight + "px";
            right_panel.current.style.width = offsetRight + "px";
        }

        document.onmouseup = function (e) {
            isResizing = false;
        }
    })();
}