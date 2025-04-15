import React from 'react'
import SnackCard from './components/SnackCard'
const snackReminders = [
    {
      name: "Fruit Burst",
      description: "A quick mix of apples, bananas, and berries for a vitamin-rich energy boost."
    },
    {
      name: "Nutty Bites",
      description: "Handful of almonds and walnuts to fuel your brain during work."
    },
    {
      name: "Yogurt Chill",
      description: "Cool down with a small bowl of low-fat Greek yogurt and honey."
    },
    {
      name: "Veggie Crunch",
      description: "Carrot and cucumber sticks with hummus for a crunchy, guilt-free snack."
    },
    {
      name: "Protein Power Bar",
      description: "Grab a protein bar for post-lunch energy and muscle support."
    },
    {
      name: "Cheese Nibbles",
      description: "A couple of cheese cubes with whole wheat crackers for a savory pick-me-up."
    },
    {
      name: "Energy Balls",
      description: "Homemade oat and date energy balls for a natural sugar boost."
    },
    {
      name: "Rice Cake Delight",
      description: "Peanut butter spread on rice cakes topped with banana slices."
    },
    {
      name: "Trail Mix Treat",
      description: "Small portion of trail mix — nuts, seeds, and dried fruits combo."
    },
    {
      name: "Boiled Egg Boost",
      description: "One or two boiled eggs — quick protein to fight afternoon fatigue."
    }
]
  

const HomePage = () => {
  return (
snackReminders.map((ele)=>(
    <SnackCard snack={ele}/>
))
  )
}

export default HomePage
