export const feedUnifier = async (url, resource, proxy) => {
    let Parser = require('rss-parser');
    let parser = new Parser();

    let feed = await parser.parseURL(proxy + url);
    let aggregateFeed = []
    feed.items.forEach((item) => {
        aggregateFeed.push({
            resource: resource,
            creator: item.author,
            title: item.title,
            date: item.isoDate,
            id: item.id? item.id : '_' + Math.random().toString(36).substr(2, 9),
            link: item.link,
            content: item.content
        })
    })

    return aggregateFeed
}