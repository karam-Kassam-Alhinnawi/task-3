import styles from './PageHeader.module.css'

const PageHeader = ({PageName}) => {
  return (
    <div className={styles.PageHeader}>
       <div>
         <p>Home / {PageName}</p>
       </div>
       <h2>{PageName}</h2>
    </div>
  )
}

export default PageHeader