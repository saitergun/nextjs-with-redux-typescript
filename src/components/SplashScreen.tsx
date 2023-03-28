import styles from './SplashScreen.module.css'

type Props = {
  text?: string
}

const SplashScreen: React.FC<Props> = ({ text }) => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span className={styles.loader} />

      <span>{text ?? 'loading...'}</span>
    </div>
  )
}

export default SplashScreen
