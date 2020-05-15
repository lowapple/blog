import React from "react"
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles);

const PostDate = ({ date }) => { 
    var fromDate = new Date(date)
    var y = fromDate.getFullYear()
    var mm = ("0" + (fromDate.getMonth() + 1)).slice(-2)
    var dd = ("0" + (fromDate.getDate()  + 1)).slice(-2)
    return (
        <span className={cx('default')}>
            {y + '-' + mm + '-' + dd}
        </span>
    )
}
  
export default PostDate