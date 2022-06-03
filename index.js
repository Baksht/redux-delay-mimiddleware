const delayMiddleware = (store) => (next) => (action) => {
    if (action.delay) {
        const timeout = setTimeout(
            () => next(action),
            action.delay
        )

        return () => clearTimeout(timeout)

    }

    return next(action)
}