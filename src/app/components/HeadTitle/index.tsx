import React from 'react'
import styles from '../../../../styles/pages/about.module.scss'

export default function HeadTitle({title}:any) {
  return (
    <section className={`w-100 flex items-center justify-start animate-flip-down h-32 ${styles.aboutSection}`}>
        <h1 className='text-white text-4xl font-bold section'>{title}</h1>
    </section>
  )
}
