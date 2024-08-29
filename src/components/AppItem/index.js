// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <li className="imageEle">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="imageName">{appName}</p>
    </li>
  )
}
export default AppItem
