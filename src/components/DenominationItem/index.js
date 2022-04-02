// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const withDraw = () => {
    updateBalance(value)
  }

  return (
    <li className="list-items">
      <button className="button" type="button" onClick={withDraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
