// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  updateBalance = value => {
    console.log(`WithDrawal is ${value}`)
    this.setState(prevState => ({Balance: prevState.Balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {Balance} = this.state
    const name = 'Sarah Williams'
    const initialName = name.slice(0, 1)
    return (
      <div className="BgContainer">
        <div className="Denomination">
          <div className="user-container">
            <div className="card-container">
              <h1 className="heading">{initialName}</h1>
            </div>
            <p className="name">{name}</p>
          </div>

          <div className="BalanceContainer">
            <p className="description">Your Balance</p>
            <p className="balance">
              {Balance}
              <br />
              <span className="description">In Rupees</span>
            </p>
          </div>
          <p className="title">Withdraw</p>
          <p className="Currency">CHOOSE SUM (In Rupees)</p>
          <ul className="denomination-item">
            {denominationsList.map(eachDemo => (
              <DenominationItem
                key={eachDemo.id}
                denominationsDetails={eachDemo}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
