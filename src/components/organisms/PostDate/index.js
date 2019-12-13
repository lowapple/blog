import React from "react"
import classNames from 'classnames'
import { getArchivePostDate } from "../../../utils"
import styles from './style.module.scss'

const PostDate = ({ date }) => { 
    console.log(date)
    var fromDate = new Date(date)
    var mm = ("0" + (fromDate.getMonth() + 1)).slice(-2)
    var dd = ("0" + fromDate.getDate()).slice(-2)
    return <div className={classNames(styles['default'])}>
         <h1>{mm + '-' +  dd}</h1>
    </div>
}
  
export default PostDate