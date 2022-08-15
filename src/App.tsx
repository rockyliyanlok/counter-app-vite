import { useState } from 'react'

import type { CounterState } from './types'
import Counters from './components/counters'
import NavBar from './components/navbar'

type AppState = {
  counters: CounterState[]
}

const App = () => {
  const [state, setState] = useState<AppState>({
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  })

  const handleIncrement = (counter: CounterState) => {
    const counters = [...state.counters]
    const index = counters.findIndex((c) => c.id === counter.id)
    counters[index].value++
    setState(() => ({ counters }))
  }

  const handleDecrement = (counter: CounterState) => {
    const counters = [...state.counters]
    const index = counters.findIndex((c) => c.id === counter.id)
    counters[index].value--
    setState(() => ({ counters }))
  }

  const handleReset = () => {
    const counters = state.counters.map((c) => ({ id: c.id, value: 0 }))
    setState(() => ({ counters }))
  }

  const handleDelete = (counterId: number) => {
    const counters = state.counters.filter((c) => c.id !== counterId)
    setState(() => ({ counters }))
  }

  const handleRestart = () => {
    window.location.reload()
  }

  return (
    <div className="main__wrap">
      <main className="container">
        <div className="card__box">
          <NavBar
            totalCounters={state.counters.filter((c) => c.value > 0).length}
          />
          <Counters
            counters={state.counters}
            onReset={handleReset}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onRestart={handleRestart}
          />
        </div>
      </main>
    </div>
  )
}

export default App
