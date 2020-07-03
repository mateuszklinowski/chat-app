export const formatAMAP = (timestamp: number): string => {
    const date = new Date(timestamp)
    let hours = date.getHours()
    let minutes: string | number = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    return hours + ':' + minutes + ampm
}

export const format24 = (timestamp: number): string => {
    const date = new Date(timestamp)
    const hours = date.getHours()
    let minutes: string | number = date.getMinutes()
    minutes = minutes < 10 ? '0' + minutes : minutes
    return hours + ':' + minutes
}
