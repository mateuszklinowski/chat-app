import { findFirstYouTubeLink } from './findFirstYouTubeLink'

//examples of unit tests

describe('findFirstYouTubeLink', () => {
    it('detect no link when none provided', () => {
        const testString =
            'random string without http://google.pl url from youtube'

        const result = findFirstYouTubeLink(testString)

        expect(result).toEqual(undefined)
    })

    it('detect no link when id length is not 11', () => {
        const testString =
            'string with correct structure https://www.youtube.com/watch?v=nzj7Wg4DAbsQ but too long id'

        const result = findFirstYouTubeLink(testString)

        expect(result).toEqual(undefined)
    })

    it('detect correct link in sequence', () => {
        const testString =
            'string with correct structure https://www.youtube.com/watch?v=nzj7Wg4DAbs in sequence'

        const result = findFirstYouTubeLink(testString)

        expect(result).toEqual(`https://www.youtube.com/embed/nzj7Wg4DAbs`)
    })

    it('detect correct link alone', () => {
        const testString = 'https://www.youtube.com/watch?v=nzj7Wg4DAbs'

        const result = findFirstYouTubeLink(testString)

        expect(result).toEqual(`https://www.youtube.com/embed/nzj7Wg4DAbs`)
    })

    it('detect first correct link from multiple valid', () => {
        const testString =
            'random first link https://www.youtube.com/watch?v=azJgB15NgN8 , second correct link https://www.youtube.com/watch?v=nzj7Wg4DAbs'

        const result = findFirstYouTubeLink(testString)

        expect(result).toEqual(`https://www.youtube.com/embed/azJgB15NgN8`)
    })

    // TODO handle links as "share" correctly
    xit('handle links with share (.be) structure', () => {
        const testString =
            'link with .be structure https://youtu.be/azJgB15NgN8'

        const result = findFirstYouTubeLink(testString)

        expect(result).toEqual(`https://www.youtube.com/embed/azJgB15NgN8`)
    })
})
