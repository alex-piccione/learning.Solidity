import styles from "../styles/TokenInfo.module.css";

const tokenInfo = () => {

    return <>
        <h2>Token Info</h2>
        <div className={styles.row}>       
            <div className={styles.leftColumn}>Contract</div>
            <div className={styles.rightColumn}>...</div>
        </div>
        <div className={styles.row}>                        
            <div className={styles.leftColumn}>Total supply</div>
            <div>123456789</div>
        </div>
        <div className="row">
            <div>Price</div>
            <div>123</div>
        </div>
    </>

}

export default tokenInfo