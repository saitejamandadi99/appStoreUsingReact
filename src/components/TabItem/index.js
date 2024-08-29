// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {tabId, displayText} = tabDetails

  return (
    <li>
      <button type="button" className="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
