import { FirstContent } from "../FirstContent/FirstContent"
import './content.css'

export const Content = () => {
  const imagesUrls = [
    './icons/light.png',
    './icons/keyboard.png',
    './icons/lightning.png'
  ]
  const description = [
    'Thoughtful Design',
    'Well Crafted',
    'Easy to Customize']
  const about = [
    'Thoughtful Design. Thoughtful Design. Thoughtful Design. Thoughtful Design. Thoughtful Design.',
    'Well Crafted. Well Crafted. Well Crafted. Well Crafted. Well Crafted.',
    'Easy to Customize. Easy to Customize. Easy to Customize. Easy to Customize. Easy to Customize.'
  ]

  return (
    <div className="content">
      <FirstContent
        imagesUrl={imagesUrls[0]}
        description={description[0]}
        about={about[0]}
      />
      <FirstContent
        imagesUrl={imagesUrls[1]}
        description={description[1]}
        about={about[1]}
      />
      <FirstContent
        imagesUrl={imagesUrls[2]}
        description={description[2]}
        about={about[2]}
      />
    </div>
  )
}