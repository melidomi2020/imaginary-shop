import React from 'react'

class Counter extends React.Component {
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    )
  }

  render() {
    //console.log('props', this.props)
    let classes = this.formatMethod()
    return (
      <div>
        <span className={this.formatMethod()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2 "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>

        {/*{this.state.tags.length === 0 && 'please create a new tag'}
        {this.renderTags()}*/}
      </div>
    )
  }

  formatMethod() {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  formatCount() {
    const { value: count } = this.props.counter
    return count === 0 ? 'Zero' : count
  }
}

export default Counter
