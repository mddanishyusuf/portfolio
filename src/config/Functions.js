import readingTime from 'reading-time'

export function getReadingTime(text) {
    const timeObj = readingTime(text)
    return timeObj.text
}
