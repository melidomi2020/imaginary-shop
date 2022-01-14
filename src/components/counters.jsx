import React, { Component } from 'react'
import Counter from './counter'
class Counters extends React.Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props
    return (
      <div>
        <button className="btn btn-primary bt-sm m-2" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            counters={counters}
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            //value={counter.value}
            //id={counter.id}
          />
        ))}
      </div>
    )
  }
}

export default Counters
