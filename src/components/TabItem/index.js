// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    updateTabId(tabId)
  }
  const activeTabClassName = isActive ? 'active-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
