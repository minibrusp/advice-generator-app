import { diceButton, adviceText, adviceNumber } from './variables.js'
import loadAdvice from './api.js'


let adviceSlip = {}

let diceButtonRotateTimeline = gsap.timeline({ paused: true, yoyo: true })


// diceButton
diceButtonRotateTimeline.to(diceButton, {
   duration: 3,
   rotate: "1080deg",
   ease: "bounce.out",
   onStart: async () => {
      diceButton.classList.add('active')
      try {
         let response = await loadAdvice()
         adviceSlip = await response.slip
      } catch (error) {
         console.log(error)
      }
   },
   onComplete: () => {
      diceButton.classList.remove('active')
   }
}).to(diceButton, {
   duration: 1,
   scale: 1.1,
   ease: "back"
}, "<").to(diceButton, {
   duration: 1,
   scale: 1,
   ease: "bounce.out",
   delay: 1.5
}, "<")


// advice text
let adviceTextTween = () => {
   gsap.to(adviceText, {
      duration: 1,
      text: {
         value: ""
      },
      ease: "power2"
   })
   gsap.to(adviceText, {
      duration: 1,
      ease: "power2",
      text: {
         value: () => adviceSlip.advice !== undefined ? adviceSlip.advice : 'unable to establish connection with the server. Please check your internet connection or try again.'
      },
      delay: 1,
   });
}


// advice number

let adviceNumberTween = () => {
   gsap.to(adviceNumber, {
      duration: 1,
      text: {
         value: "000"
      },
      ease: "power2"
   })
   gsap.to(adviceNumber, {
      duration: 1,
      text: {
         value: () => {
            if (adviceSlip.id !== undefined) {
               return adviceSlip.id < 100 ? `0${adviceSlip.id}` : adviceSlip.id
            } else {
               return "000"
            }
         }
      },
      ease: "power2",
      delay: 1,
   })
}

export { diceButtonRotateTimeline, adviceTextTween, adviceNumberTween }