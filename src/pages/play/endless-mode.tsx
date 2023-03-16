import { OptionsContext } from "@/contexts/OptionsContext";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useContext } from "react";

import styles from '../../styles/EndlessMode.module.scss'

interface EndlessModeProps {
  query: ParsedUrlQuery
}

export default function EndlessMode({ query }: EndlessModeProps) {
  const { options } = useContext(OptionsContext)


  return (
    <div className={styles.endlessMode}>
      
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { 
    props: {
      query
    }
  }
}