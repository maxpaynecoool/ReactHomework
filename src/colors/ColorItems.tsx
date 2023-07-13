import './colorItems.css'

interface IColor {
  color: string
}

export const ColotItems = (props: IColor) => {
  return (
    <p className="palette" style={{backgroundColor: props.color}}>

    </p>
  )
}