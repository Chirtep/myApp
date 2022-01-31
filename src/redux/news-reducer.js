import {newsAPI} from "../api/api";
import {compare} from "../components/common/utils/compare";

const SET_AGGREGATE_FEED = 'myApp/newsReducer/SET_AGGREGATE_FEED',
    CORS_PROXY = "https://cors-anywhere.herokuapp.com/",
    SET_FEED = 'myApp/newsReducer/SET_FEED'

let initialState = {
    aggregateFeed: [],
    feedInitialData: [
        {url: 'https://www.reddit.com/.rss?limit=100', resource: 'Reddit'},
        {url: 'http://www.cbr.ru/rss/eventrss', resource: 'Central Bank of Russia'},
        {url: 'https://lenta.ru/rss/news', resource: 'Lenta'},
        {url: 'https://rss.stopgame.ru/rss_all.xml', resource: 'StopGame'},
        {url: 'https://habr.com/ru/rss/news/?fl=ru?limit=100', resource: 'Habr'}
    ],
    feed: []
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AGGREGATE_FEED: {
            return {
                ...state,
                aggregateFeed: [...state.aggregateFeed, ...action.aggregateFeed].sort(compare)
            }
        }

        case SET_FEED: {
            return {
                ...state,
                feed: [...state.feed, ...action.feed]
            }
        }

        default:
            return state;
    }
}

export const setAggregateFeed = (aggregateFeed) => ({type: SET_AGGREGATE_FEED, aggregateFeed}),
    setFeed = (feed) => ({type: SET_FEED, feed})

export const getAggregateFeed = (initialData) => {
    return async (dispatch) => {
        initialData.forEach(item => {
            newsAPI.getFeed(item.url, item.resource, CORS_PROXY)
                .then(data => {
                    dispatch(setAggregateFeed(data))
                })
        })
    }
}

export const getFeed = (feed) => {
    return (dispatch) => {
        dispatch(setFeed(feed))
    }
}

export default newsReducer