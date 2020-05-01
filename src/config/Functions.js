import readingTime from 'reading-time'

export function getReadingTime(text) {
    const timeObj = readingTime(text)
    return timeObj.text
}

export function onlyPublished(listArray) {
    const filterList = []
    listArray.forEach(element => {
        const { labels } = element

        const isPublished = labels.findIndex(x => x.name === 'published')

        if (isPublished > -1) {
            filterList.push(element)
        }
    })

    return filterList
}
