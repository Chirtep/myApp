import React from "react";
import s from './News.module.css'
import {dateGen} from "../common/utils/dateGen";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../common/Preloader/Preolader";
import habr from "../../assets/images/habr-icon.png"
import stopgame from "../../assets/images/stopgame-logo.png"
import reddit from "../../assets/images/reddit-icon.png"
import parse from 'html-react-parser';
import sports from '../../assets/images/sports-icon.png'
import stack from '../../assets/images/stack-icon.png'

const News = (props) => {

    const cn = require('classnames')

    let imgObj = {
        'Habr': habr,
        'Stack Overflow': stack,
        'StopGame': stopgame,
        'Sports': sports,
        'Reddit': reddit
    }

    const feed = props.news.map(f => <div className={s.newsPost} key={f.id}>
        <div className={s.resourcePlate}>
            <img src={Object.values(imgObj).find(value => imgObj[f.resource] === value)} alt={'#'}/>
            <div className={s.resourceWrapper}>
                <span className={s.resource}>{f.resource}</span>
                <div className={s.creatorWrapper}>
                    <span className={s.creator}>{f.creator}</span>
                    <span className={s.date}>{dateGen(f.date)}</span>
                </div>
            </div>
        </div>
        <span className={cn(((f.resource === 'StopGame') && s.gap), s.bold)}>{f.title}</span>
        <div className={cn(s.content, (f.resource === 'Habr' && s.contentBorder))}>{parse(f.content)}</div>
        {(f.resource !== 'Habr' && 'Reddit') && <a className={s.contentBorder} href={f.link}>Читать далее</a>}
    </div>)


    return (

        <div className={s.newsWrapper}>
            <InfiniteScroll next={props.getMoreFeed} hasMore={true} loader={<Preloader/>} dataLength={props.news.length}>
                {feed}
            </InfiniteScroll>
        </div>

    );
}

export default News



