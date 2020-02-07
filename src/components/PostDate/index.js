import React from "react"
import classNames from 'classnames'
import styles from './style.module.scss'

const PostDate = ({ date }) => { 
    var fromDate = new Date(date)
    var mm = ("0" + (fromDate.getMonth() + 1)).slice(-2)
    var dd = ("0" + (fromDate.getDate()  + 1)).slice(-2)
    return (
        <span className="post-date">
            {mm + '-' + dd}
        </span>
    )
    /*
    <div className={classNames(styles['default'])}>
         <h1>{mm + '-' +  dd}</h1>
    </div>
    */
}
  
export default PostDate