import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isTrue: false}

  onClickEmojiButton = () => {
    this.setState({isTrue: true})
  }

  emojiScreen = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="unordered-list">
          {emojis.map(eachItem => (
            <li className="list-item" key={eachItem.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmojiButton}
              >
                <img src={eachItem.imageUrl} alt="name" className="image" />
              </button>
              <br />
              <p className="description">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="card">
        <img src={loveEmojiUrl} alt="love emoji" className="size" />
        <h1>Thank You</h1>
        <p className="paragraph">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isTrue} = this.state
    return (
      <div className="container">
        {isTrue === true ? this.thankYouScreen() : this.emojiScreen()}
      </div>
    )
  }
}

export default Feedback
