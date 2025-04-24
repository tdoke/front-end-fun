function debounce(func, delay) {
    let timerId = null;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            timerId = null;
            func(args);
        }, delay)
    }
}

/*
1] it should execute a passed function, only after delay expiry.
2] if user tries to execute a function before delay expiry, it should clear the timer and set a new timeout for passed function execution.
*/