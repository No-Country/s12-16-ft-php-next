import styles from '@/components/ui/NavbarButton/closeOpenButton.module.css'

export default function CloseOpenButton(props) {

    return <button onClick={props.click} className={styles.closeOpen}></button>
}