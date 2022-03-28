import { diceButton } from './variables.js'
import { diceButtonRotateTimeline } from './animation.js'


diceButton.addEventListener('click', () => {
   diceButtonRotateTimeline.restart()

})


