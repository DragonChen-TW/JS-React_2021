import styles from '../../styles/Home.module.css'

function blog() {
    return (
        <div className={styles.main}>
            <h1>部落格</h1>
            <h2>文章列表</h2>
            <ul>
                <li>Article 1</li>
                <li>Article 2</li>
            </ul>
        </div>
    )
}

export default blog;