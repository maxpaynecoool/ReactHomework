import { ColotItems } from './ColorItems'
import './colors.css'

export const Colors = () => {
  return (
    <div>
      <h1 className='colors'>
        Colors
      </h1>
      <div className='colorsPalette'>
        <ColotItems color='#212121'/>
        <ColotItems color='#E72424'/>
        <ColotItems color='#86878B'/>
        <ColotItems color='#333333'/>
        <ColotItems color='#000000'/>
      </div>
    </div>
  )
}