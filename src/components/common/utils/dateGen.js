export const dateGen = (date) => {
    let now = date? new Date(date) : new Date(),
        options = {
            month: 'long',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric'
        },
        time = now.toLocaleString("en-US", options).toString()

    return time
}