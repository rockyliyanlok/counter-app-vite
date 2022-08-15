import type { FC } from 'react'

import type { CounterState } from '../types'
import Counter from './counter'

type CountersProps = {
  counters: CounterState[]
  onIncrement: (counter: CounterState) => void
  onDecrement: (counter: CounterState) => void
  onReset: () => void
  onDelete: (counterId: number) => void
  onRestart: () => void
}

const Counters: FC<CountersProps> = ({
  counters,
  onIncrement,
  onDecrement,
  onReset,
  onDelete,
  onRestart,
}) => {
  return (
    <div>
      <div className="row">
        <div className="">
          <button
            className="btn btn-success m-2"
            onClick={onReset}
            disabled={counters.length === 0}
          >
            <i className="fa fa-refresh" aria-hidden="true" />
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={onRestart}
            disabled={counters.length !== 0}
          >
            <i className="fa fa-recycle" aria-hidden="true" />
          </button>
        </div>
      </div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default Counters
