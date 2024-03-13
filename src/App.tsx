import { useEffect, useState } from 'react'
import './App.css'
import data from './assets/words.json'

function App() {
  const SelectDataFromJson = (numberOfItems: number, data: object[]) => {
    //randomly select different items from the data
    const selectedItems = [] as object[]
    while (selectedItems.length < numberOfItems) {
      const item = data[Math.floor(Math.random() * data.length)] as object
      if (!selectedItems.includes(item)) {
        selectedItems.push(item)
      }
    }

    return selectedItems
  }

  const [genres, setGenres] = useState(data.Genres)
  const [adjectives, setAdjectives] = useState(data.Adjectives)
  const [colors, setColors] = useState(data.Colors.Purple)
  const [objects, setObjects] = useState(data.Objects)
  const [artMediums2D, setArtMediums2D] = useState(data.ArtMediums['2D'])
  const [artMediums3D, setArtMediums3D] = useState(data.ArtMediums['3D'])
  const [artMediumsAll, setArtMediumsAll] = useState(data.ArtMediums['2D'].concat(data.ArtMediums['3D']))
  const [artStyles2D, setArtStyles2D] = useState(data.ArtStyles['2D'])
  const [artStyles3D, setArtStyles3D] = useState(data.ArtStyles['3D'])
  const [artStylesAll, setArtStylesAll] = useState(data.ArtStyles['2D'].concat(data.ArtStyles['3D']))

  console.log(colors)

  useEffect(() => {
    const genreText = document.getElementById('Genre') as HTMLSpanElement
    const adjectiveText = document.getElementById('Adjective') as HTMLSpanElement
    const colorText = document.getElementById('Color') as HTMLSpanElement
    const objectText = document.getElementById('Object') as HTMLSpanElement
    const artMediumText = document.getElementById('ArtMedium') as HTMLSpanElement
    const artStyleText = document.getElementById('ArtStyle') as HTMLSpanElement

    genreText.innerText = genres[Math.floor(Math.random() * genres.length)]
    adjectiveText.innerText = adjectives[Math.floor(Math.random() * adjectives.length)]
    colorText.innerText = colors[Math.floor(Math.random() * colors.length)]
    colorText.style.color = colorText.innerText
    objectText.innerText = objects[Math.floor(Math.random() * objects.length)]
    artMediumText.innerText = artMediumsAll[Math.floor(Math.random() * artMediumsAll.length)]
    artStyleText.innerText = artStylesAll[Math.floor(Math.random() * artStylesAll.length)]
  })


  return (
    <>
      <h1>Art Prompt Generator</h1>
      <div>
        <h3>Art Medium:</h3>
        <div>
          <span>2D</span>
          <span>3D</span>
          <span>Both</span>
        </div>

      </div>
      <div>
        In <span id='Genre'>a utopian</span> world, <span id='Adjective'>a flying</span>, <span id='Color'>green</span> <span id='Object'>robot</span> <span id='ArtMedium'>rendered</span> in <span id='ArtStyle'>an isometric</span> art style.
      </div>
    </>
  )
}

export default App
