import styles from './style.module.scss'

interface FuriganaProps {
  kanji: string
  reading: string
}

export const Furigana = ({ kanji, reading }: FuriganaProps) => {
  const hasKanji = !!kanji

  return (
    <ruby className={styles.furigana}>
      {hasKanji ? kanji : reading}
      <rp>(</rp>
      <rt className={styles.reading}>{hasKanji? reading : ''}</rt>
      <rp>)</rp>
    </ruby>
  );
}