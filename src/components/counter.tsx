import type { FC } from 'react'

import type { CounterState } from '../types'

type CounterProps = {
  counter: CounterState
  onIncrement: (counter: CounterState) => void
  onDecrement: (counter: CounterState) => void
  onDelete: (counterId: number) => void
}

const Counter: FC<CounterProps> = ({
  counter,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  const getBadgeClasses = () => {
    let classes = 'badge m-2 badge-'
    classes += counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  const formatCount = () => {
    const { value } = counter
    return value === 0 ? 'Zero' : value
  }

  return (
    <div>
      <div className="row">
        <div className="">
          <span style={{ fontSize: 24 }} className={getBadgeClasses()}>
            {formatCount()}
          </span>
        </div>
        <div className="">
          <button
            className="btn btn-secondary"
            onClick={() => onIncrement(counter)}
          >
            <i className="fa fa-plus-circle" aria-hidden="true" />
          </button>
          <button
            className="btn btn-info m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value === 0}
          >
            <i className="fa fa-minus-circle" aria-hidden="true" />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(counter.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
