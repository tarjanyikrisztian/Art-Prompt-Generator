import { useEffect, useState } from 'react'
import './App.css'
import data from './assets/words.json'

function App() {
  const [genres, setGenres] = useState(data.Genres)
  const [adjectives, setAdjectives] = useState(data.Adjectives)
  const [colors, setColors] = useState(data.Colors.Purple)
  const [objects, setObjects] = useState(data.Objects)
  const [artMediums2D, setArtMediums2D] = useState(data.ArtMediums['2D'])
  const [artMediums3D, setArtMediums3D] = useState(data.ArtMediums['3D'])
  const [artStyles2D, setArtStyles2D] = useState(data.ArtStyles['2D'])
  const [artStyles3D, setArtStyles3D] = useState(data.ArtStyles['3D'])

  const [currentGenre, setCurrentGenre] = useState(0)
  const [currentAdjective, setCurrentAdjective] = useState(0)
  const [currentColor, setCurrentColor] = useState(0)
  const [currentObject, setCurrentObject] = useState(0)
  const [currentArtMediumType, setCurrentArtMediumType] = useState("2D")
  const [currentArtMedium, setCurrentArtMedium] = useState(0)
  const [currentArtStyle, setCurrentArtStyle] = useState(0)


  const SelectDataFromJson = (numberOfItems: number, data: string[]) => {
    //randomly select different items from the data
    const selectedItems = [] as string[]
    while (selectedItems.length < numberOfItems) {
      const item = data[Math.floor(Math.random() * data.length)] as string
      if (!selectedItems.includes(item)) {
        selectedItems.push(item)
      }
    }

    return selectedItems
  }

  const setSelectColorsFromGroups = () => {
    //select 2 colors from each group of colors
    const selectedColors = [] as string[]
    const red = SelectDataFromJson(2, data.Colors.Red)
    const orange = SelectDataFromJson(2, data.Colors.Orange)
    const yellow = SelectDataFromJson(2, data.Colors.Yellow)
    const green = SelectDataFromJson(2, data.Colors.Green)
    const blue = SelectDataFromJson(2, data.Colors.Blue)
    const purple = SelectDataFromJson(2, data.Colors.Purple)
    const pink = SelectDataFromJson(2, data.Colors.Pink)
    const brown = SelectDataFromJson(2, data.Colors.Brown)
    const white = SelectDataFromJson(2, data.Colors.White)
    const gray = SelectDataFromJson(2, data.Colors.Gray)
    selectedColors.push(...red, ...orange, ...yellow, ...green, ...blue, ...purple, ...pink, ...brown, ...gray, ...white)

    setColors(randomizeListOrder(selectedColors))
  }

  const randomizeListOrder = (list: string[]) => {
    //randomize the order of the list
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = list[i]
      list[i] = list[j]
      list[j] = temp
    }
    return list
  }

  const randomValue = (max: number) => {
    //randomly select a number between a range
    return Math.floor(Math.random() * ((max-1) - 0 + 1) + 0)
    
  }

  //D4, D6, D8, D10, D12, and D20
  const randomizeSelections = () => {
    setGenres(randomizeListOrder(SelectDataFromJson(12, data.Genres)))
    setAdjectives(randomizeListOrder(SelectDataFromJson(10, data.Adjectives)))
    setSelectColorsFromGroups()
    setObjects(randomizeListOrder(data.Objects))
    setArtMediums2D(randomizeListOrder(data.ArtMediums['2D']))
    setArtMediums3D(randomizeListOrder(data.ArtMediums['3D']))
    setArtStyles2D(randomizeListOrder(data.ArtStyles['2D']))
    setArtStyles3D(randomizeListOrder(data.ArtStyles['3D']))
  }

  const selectRandomValues = () => {
    //select random index from the data
    setCurrentGenre(randomValue(genres.length))
    setCurrentAdjective(randomValue(adjectives.length))
    setCurrentColor(randomValue(colors.length))
    setCurrentObject(randomValue(objects.length))
    setCurrentArtMedium(randomValue(artMediums2D.length))
    setCurrentArtStyle(randomValue(artStyles2D.length))
    setCurrentArtMedium(randomValue(artMediums3D.length))
    setCurrentArtStyle(randomValue(artStyles3D.length))
  }

  const randomize = () => {
    randomizeSelections()
    selectRandomValues()
    console.table({currentGenre, currentAdjective, currentColor, currentObject, currentArtMedium, currentArtStyle})
  }

  useEffect(() => {
    randomize()
  }, [])

    const genreUpdate = () => {
      const genre = document.getElementById('Genre') as HTMLElement
    for (let i = 0; i < genre?.children.length; i++)
      if (i === currentGenre) {
        genre.children[i].classList.add('visible')
        genre.children[i].classList.remove('close')
        genre.children[i].classList.remove('far')
        genre.children[i].classList.remove('distant')
      } else if (i === currentGenre - 1 || i === currentGenre + 1) {
        genre.children[i].classList.remove('visible')
        genre.children[i].classList.add('close')
        genre.children[i].classList.remove('far')
        genre.children[i].classList.remove('distant')
      } else if (i === currentGenre - 2 || i === currentGenre + 2) {
        genre.children[i].classList.remove('visible')
        genre.children[i].classList.remove('close')
        genre.children[i].classList.add('far')
        genre.children[i].classList.remove('distant')
      } else {
        genre.children[i].classList.remove('visible')
        genre.children[i].classList.remove('close')
        genre.children[i].classList.remove('far')
        genre.children[i].classList.add('distant')
      }
      genre.style.transform = `translateY(${0 - (currentGenre * 2)}rem)`
    }

    const adjectiveUpdate = () => {
      const adjective = document.getElementById('Adjective') as HTMLElement
      for (let i = 0; i < adjective?.children.length; i++)
        if (i === currentAdjective) {
          adjective.children[i].classList.add('visible')
          adjective.children[i].classList.remove('close')
          adjective.children[i].classList.remove('far')
          adjective.children[i].classList.remove('distant')
        } else if (i === currentAdjective - 1 || i === currentAdjective + 1) {
          adjective.children[i].classList.remove('visible')
          adjective.children[i].classList.add('close')
          adjective.children[i].classList.remove('far')
          adjective.children[i].classList.remove('distant')
        } else if (i === currentAdjective - 2 || i === currentAdjective + 2) {
          adjective.children[i].classList.remove('visible')
          adjective.children[i].classList.remove('close')
          adjective.children[i].classList.add('far')
          adjective.children[i].classList.remove('distant')
        } else {
          adjective.children[i].classList.remove('visible')
          adjective.children[i].classList.remove('close')
          adjective.children[i].classList.remove('far')
          adjective.children[i].classList.add('distant')
        }
      adjective.style.transform = `translateY(${0 - (currentAdjective * 2)}rem)`
    }

    const colorUpdate = () => {
      const color = document.getElementById('Color') as HTMLElement
      for (let i = 0; i < color?.children.length; i++)
        if (i === currentColor) {
          color.children[i].classList.add('visible')
          color.children[i].classList.remove('close')
          color.children[i].classList.remove('far')
          color.children[i].classList.remove('distant')
        } else if (i === currentColor - 1 || i === currentColor + 1) {
          color.children[i].classList.remove('visible')
          color.children[i].classList.add('close')
          color.children[i].classList.remove('far')
          color.children[i].classList.remove('distant')
        } else if (i === currentColor - 2 || i === currentColor + 2) {
          color.children[i].classList.remove('visible')
          color.children[i].classList.remove('close')
          color.children[i].classList.add('far')
          color.children[i].classList.remove('distant')
        } else {
          color.children[i].classList.remove('visible')
          color.children[i].classList.remove('close')
          color.children[i].classList.remove('far')
          color.children[i].classList.add('distant')
        }
      color.style.transform = `translateY(${0 - (currentColor * 2)}rem)`
    }

    const objectUpdate = () => {
      const object = document.getElementById('Object') as HTMLElement
      for (let i = 0; i < object?.children.length; i++)
        if (i === currentObject) {
          object.children[i].classList.add('visible')
          object.children[i].classList.remove('close')
          object.children[i].classList.remove('far')
          object.children[i].classList.remove('distant')
        } else if (i === currentObject - 1 || i === currentObject + 1) {
          object.children[i].classList.remove('visible')
          object.children[i].classList.add('close')
          object.children[i].classList.remove('far')
          object.children[i].classList.remove('distant')
        } else if (i === currentObject - 2 || i === currentObject + 2) {
          object.children[i].classList.remove('visible')
          object.children[i].classList.remove('close')
          object.children[i].classList.add('far')
          object.children[i].classList.remove('distant')
        } else {
          object.children[i].classList.remove('visible')
          object.children[i].classList.remove('close')
          object.children[i].classList.remove('far')
          object.children[i].classList.add('distant')
        }
      object.style.transform = `translateY(${0 - (currentObject * 2)}rem)`
    }

    const changeArtMediumType = (type: string) => {
      if (type === "2D") {
        setCurrentArtMediumType("2D")
      }
      else {
        setCurrentArtMediumType("3D")
      }
    }


    useEffect(() => {
      genreUpdate()
      adjectiveUpdate()
      colorUpdate()
      objectUpdate()
    })

  return (
    <>
    <input type="number"  min="1" max="19" step="1" value="1" />
      <h1>Art Prompt Generator</h1>
      <div>
        <h3>Art Medium:</h3>
        <div>
          {currentArtMediumType === "2D" ?
            (
              <>
                <span className='slide selected' onClick={() => changeArtMediumType("2D")}>2D</span>
                <span className='slide' onClick={() => changeArtMediumType("3D")}>3D</span>
              </>
            ) : (
              <>
                <span className='slide' onClick={() => changeArtMediumType("2D")}>2D</span>
                <span className='slide selected' onClick={() => changeArtMediumType("3D")}>3D</span>
              </>
            )}
        </div>

      </div>
      <div className='prompt'>
        In
        <span id='Genre' className='option'>
          { //create a div for each genre
            genres.map((genre, index) => {
              return <div key={index} className='subOption'>{genre}</div>
            })
          }</span> world, <span id='Adjective' className='option'>
          { //create a div for each adjective
            adjectives.map((adjective, index) => {
              return <div key={index} className='subOption'>{adjective}</div>
            })
          }
        </span>
        ,
        <span id='Color' className='option'>
          { //create a div for each color
            colors.map((color, index) => {
              return <div key={index} className='subOption' style=
                {{ color: color }}
              >{color.split(/(?=[A-Z])/).join(' ')}</div>
            })
          }
        </span>
        <span id='Object' className='option'>
          { //create a div for each object
            objects.map((object, index) => {
              return <div key={index} className='subOption'>{object}</div>
            })
          }
        </span>
        <span id='ArtMedium' className='option'>
          { //create a div for each art medium
            currentArtMediumType === "2D" ?
              artMediums2D.map((artMedium, index) => {
                return <div key={index} className='subOption'>{artMedium}</div>
              }) :
              artMediums3D.map((artMedium, index) => {
                return <div key={index} className='subOption'>{artMedium}</div>
              })
          }
        </span>
        in
        <span id='ArtStyle' className='option'>
          { //create a div for each art style
            currentArtMediumType === "2D" ?
              artStyles2D.map((artStyle, index) => {
                return <div key={index} className='subOption'>{artStyle}</div>
              }) :
              artStyles3D.map((artStyle, index) => {
                return <div key={index} className='subOption'>{artStyle}</div>
              })
          }
        </span>
        art style.
      </div>
      <div>
        <button onClick={randomize}>Randomize</button>
      </div>
    </>
  )
}

export default App
