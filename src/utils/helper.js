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

export const resizeSides = () => {
    let isResizing = false;

    (function () {
        const container = document.getElementById("container");
        const left = document.getElementById("left_panel");
        const right = document.getElementById("right_panel");
        const handle = document.getElementById("drag");

        handle.onmousedown = function (e) {
            isResizing = true;
        };

        document.onmousemove = function (e) {
            if (!isResizing) {
                return;
            }

            let offsetRight = container.clientWidth - (e.clientX - container.offsetLeft);

            left.style.right = offsetRight + "px";
            right.style.width = offsetRight + "px";
        }

        document.onmouseup = function (e) {
            isResizing = false;
        }
    })();
}