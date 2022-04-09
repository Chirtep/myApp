import {newsAPI} from "../api/api";
import {compare} from "../components/common/utils/compare";

const SET_AGGREGATE_FEED = 'myApp/newsReducer/SET_AGGREGATE_FEED',
    CORS_PROXY = "https://raweater-cors.herokuapp.com/",
    SET_FEED = 'myApp/newsReducer/SET_FEED',
    SET_COUNT = 'myApp/newsReducer/SET_COUNT'

let initialState = {
    aggregateFeed: [],
    feedInitialData: [
        {url: 'https://www.reddit.com/.rss?limit=100', resource: 'Reddit'},
        {url: 'http://www.sports.ru/rss/rubric.xml?s=208', resource: 'Sports'},
        {url: 'https://stackoverflow.blog/feed/', resource: 'Stack Overflow'},
        {url: 'https://rss.stopgame.ru/rss_all.xml', resource: 'StopGame'},
        {url: 'https://habr.com/ru/rss/news/?fl=ru?limit=100', resource: 'Habr'}
    ],
    feed: [],
    count: 0
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

        case SET_COUNT: {
            return {
                ...state,
                count: state.count + 1
            }
        }

        default:
            return state;
    }
}

export const setAggregateFeed = (aggregateFeed) => ({type: SET_AGGREGATE_FEED, aggregateFeed}),
    setFeed = (feed) => ({type: SET_FEED, feed}),
    setCount = () => ({type: SET_COUNT})

export const getAggregateFeed = (initialData) => {
    return async (dispatch) => {
        await initialData.forEach(item => {
            newsAPI.getFeed(item.url, item.resource, CORS_PROXY)
                .then(data => {
                    dispatch(setAggregateFeed(data))
                    dispatch(setCount())
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