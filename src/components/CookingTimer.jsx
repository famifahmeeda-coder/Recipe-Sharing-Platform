import React, { useEffect, useState } from "react"

const CookingTimer = ({ minutes }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    if (timeLeft <= 0) {
      setIsRunning(false)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning, timeLeft])

  const startTimer = () => {
    setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(minutes * 60)
  }

  const formatTime = () => {
    const minutesLeft = Math.floor(timeLeft / 60)
    const secondsLeft = timeLeft % 60

    return `${String(minutesLeft).padStart(2, "0")}:${String(
      secondsLeft
    ).padStart(2, "0")}`
  }

  return (
    <div>
      <h2>Cooking Timer</h2>

      <h1>{formatTime()}</h1>

      <button onClick={startTimer}>
        Start
      </button>

      <button onClick={pauseTimer}>
        Pause
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>

      {timeLeft === 0 && (
        <p>⏰ Cooking time is completed!</p>
      )}
    </div>
  )
}

export default CookingTimer