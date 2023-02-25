import styles from './style.module.scss'

interface FuriganaProps {
  kanji: string
  reading: string
}

export const Furigana = ({ kanji, reading }: FuriganaProps) => {
  return (
    <ruby className={styles.furigana}>
      {kanji}
      <rp>(</rp>
      <rt className={styles.reading}>{reading}</rt>
      <rp>)</rp>
    </ruby>
  );
}