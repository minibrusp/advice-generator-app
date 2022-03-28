import { diceButton } from './variables.js'
import { diceButtonRotateTimeline, adviceTextTween, adviceNumberTween } from './animation.js'


diceButton.addEventListener('click', () => {
   adviceTextTween()
   adviceNumberTween()
   diceButtonRotateTimeline.restart()

})


