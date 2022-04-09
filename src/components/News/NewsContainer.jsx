import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAggregateFeed, getFeed} from "../../redux/news-reducer";
import News from "./News";
import {getElementsInArray} from "../common/utils/getElementsInArray";
import Preloader from "../common/Preloader/Preolader";
import {compare} from "../common/utils/compare";

const NewsContainer = (props) => {
    const news = useSelector(state => state.news),
        dispatch = useDispatch()

    useEffect(() => {
        if (news.aggregateFeed.length === 0) {
            dispatch(getAggregateFeed(news.feedInitialData))
        }
    }, [dispatch, news.aggregateFeed.length, news.feedInitialData])


    useEffect(() => {
        (Number(news.feedInitialData.length) === news.count)
        && dispatch(getFeed(getElementsInArray(news.aggregateFeed, 0)))
    }, [dispatch, news.feedInitialData.length, news.count, news.aggregateFeed])

    const [offset, setOffset] = useState(14)

    const getMoreFeed = () => {
        dispatch(getFeed(getElementsInArray(news.aggregateFeed, offset)))
        setOffset(offset + 14)
    }

    return <>
        {Number(news.feedInitialData.length) === news.count ? <News getMoreFeed={getMoreFeed} news={news.feed.sort(compare)}/> : <Preloader/>}
    </>
}

export default NewsContainer