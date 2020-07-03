const ID_LENGTH = 11
// eslint-disable-next-line no-irregular-whitespace
const YouTubeRegex = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?‌​[\w?‌​=]*)?/

export const findFirstYouTubeLink = (text: string): string | undefined => {
    const matches = text.match(YouTubeRegex)

    if (
        !matches ||
        matches[0] === '' ||
        !matches[1] ||
        matches[1].length !== ID_LENGTH
    ) {
        return undefined
    }

    const id = matches[1]
    return `https://www.youtube.com/embed/${id}`
}
