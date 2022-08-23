import style from './option.module.css'

const OptionsContainer = () => {
  return (
    <div className={style.optionsContainer}>
      <div className={style.optionViewItems}>
        <div className={style.optionTitleContainer}>
          <span className={style.optionTitle}>
            View Items
          </span>
          <span className={style.optionSubtitle}>
            Items
          </span>
        </div>
        <div className={style.optionIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
            <circle fill="#A8C686" cx="8" cy="8" r="8" />
            <path fill="#ffffff" transform="scale(0.7) translate(3.5, 2.65)" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
          </svg>
        </div>
      </div>
      <div className={style.optionCreateItem}>
        <div className={style.optionTitleContainer}>
          <span className={style.optionTitle}>
            Create Item
          </span>
          <span className={style.optionSubtitle}>
            Items
          </span>
        </div>
        <div className={style.optionIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
            <circle fill="#B0D7FF" cx="8" cy="8" r="8" />
            <path fill="#ffffff" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </div>
      </div>
      <div className={style.optionLowStock}>
        <div className={style.optionTitleContainer}>
          <span className={style.optionTitle}>
            Low Stock
          </span>
          <span className={style.optionSubtitle}>
            Items
          </span>
        </div>
        <div className={style.optionIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
            <circle fill="#F45B69" cx="8" cy="8" r="8" />
            <path fill="#ffffff" d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
          </svg>
        </div>
      </div>
      <div className={style.optionViewFiles}>
        <div className={style.optionTitleContainer}>
          <span className={style.optionTitle}>
            View Files
          </span>
          <span className={style.optionSubtitle}>
            Files
          </span>
        </div>
        <div className={style.optionIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
            <circle fill="#EEB646" cx="8" cy="8" r="8" />
            <path fill="#ffffff" transform="scale(0.65) translate(4.55, 3.8)"d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
            <path fill="#ffffff" transform="scale(0.65) translate(4.55, 3.8)"d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default OptionsContainer