import React from "react";
import s from './News.module.css'
import {dateGen} from "../common/utils/dateGen";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../common/Preloader/Preolader";
import habr from "../../assets/images/habr-icon.png"
import lenta from "../../assets/images/lenta-icon.png"
import stopgame from "../../assets/images/stopgame-logo.png"
import cbr from "../../assets/images/cbr-icon.png"
import reddit from "../../assets/images/reddit-icon.png"
import parse from 'html-react-parser';

const News = (props) => {

    let imgObj = {
        'Habr': habr,
        'Lenta': lenta,
        'StopGame': stopgame,
        'Central Bank of Russia': cbr,
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
        <span className={((f.resource === 'StopGame' || f.resource === 'Lenta') && s.gap) + ' ' + s.bold}>{f.title}</span>
        <div className={s.content + ' ' + (f.resource === 'Habr' && s.contentBorder)}>{parse(f.content)}</div>
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



