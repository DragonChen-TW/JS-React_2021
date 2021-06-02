import styles from '../../styles/Home.module.css'

function info() {
    return (
        <div className={styles.main}>
            <h1>部落格介紹</h1>
            <ul>
                <li>有關 Python、JS 的一些東西</li>
                <li>有關 Computer Vision, Deep Learning 的研究</li>
            </ul>
        </div>
    )
}

export default info;