import Image from 'next/image'

import styles from '../styles/Home.module.css'

function about() {
    return (
        <div className={styles.main}>
            <h1>陳耀融</h1>
            <div>你好，我是陳耀融，我喜歡跑酷、閱讀、寫程式</div>

            <Image src='/otter.jpg' width={640} height={360} />
            <Image src='/mc_background.jpg' width={640} height={360} />
        </div>
    )
}

export default about;