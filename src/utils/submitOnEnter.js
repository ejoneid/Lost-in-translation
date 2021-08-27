export const submitOnEnter = (key, submitFunc) => {
    if (key === 'Enter') {
        submitFunc()
    }
}