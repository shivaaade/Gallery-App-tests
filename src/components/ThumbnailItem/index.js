// Write your code here.

const Welcome = props => {
  const {eachDetails, finalShowImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachDetails

  const onClickShowImage = () => {
    finalShowImage(id)
  }

  return (
    <li>
      <button onClick={onClickShowImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default Welcome
