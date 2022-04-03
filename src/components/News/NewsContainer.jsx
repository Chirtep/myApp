import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAggregateFeed, getFeed} from "../../redux/news-reducer";
import News from "./News";
import {getElementsInArray} from "../common/utils/getElementsInArray";
import Preloader from "../common/Preloader/Preolader";

const NewsContainer = (props) => {
    const news = useSelector(state => state.news),
        dispatch = useDispatch()

    useEffect(() => {
        if (news.aggregateFeed.length === 0) {
            dispatch(getAggregateFeed(news.feedInitialData))
        }
    }, [dispatch, news.aggregateFeed.length, news.feedInitialData])


    useEffect(() => {
        (news.feed.length === 0 && news.aggregateFeed.length > 400)
        && dispatch(getFeed(getElementsInArray(news.aggregateFeed, 0)))
    }, [dispatch, news.feed.length, news.aggregateFeed.length, news.aggregateFeed])

    const [offset, setOffset] = useState(14)

    const getMoreFeed = () => {
        dispatch(getFeed(getElementsInArray(news.aggregateFeed, offset)))
        setOffset(offset + 14)
    }

    return <>
        {news.aggregateFeed.length === 0? <Preloader/> : <News getMoreFeed={getMoreFeed} news={news.feed}/>}
    </>
}

export default NewsContainer