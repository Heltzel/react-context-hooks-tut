// import React, { Component } from 'react'
// import { ThemeContext } from '../contexts/ThemeContext'

// export default class ThemeToggle extends Component {
//   static contextType = ThemeContext
//   render() {
//     const { toggleTheme } = this.context
//     return (
//       <button onClick={toggleTheme} className="btn">
//         Toggle Theme
//       </button>
//     )
//   }
// }

import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme} className="btn">
      Toggle Theme
    </button>
  )
}
