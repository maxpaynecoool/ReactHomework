import { Socials } from './Socials'
import './footer.css'

export const Footer = () => {
  const socialsArray = [
    './icons/facebook.png',
    './icons/twitter.png',
    './icons/google-plus.png',
    './icons/pinterest.png',
    './icons/instagram.png',
    './icons/telegram.png'
  ]

  return (
    <div className='footer'>
      <div className='footerSocials'>
        <Socials imageUrl={socialsArray[0]} />
        <Socials imageUrl={socialsArray[1]} />
        <Socials imageUrl={socialsArray[2]} />
        <Socials imageUrl={socialsArray[3]} />
        <Socials imageUrl={socialsArray[4]} />
        <Socials imageUrl={socialsArray[5]} />
      </div>
      <p style={{color: 'white'}}>
        © 2015 Axure Themes
      </p>
    </div>
  )
}