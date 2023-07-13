import './header.css'

interface IHeader {
  head: string
  about: string
  button: string
}

export const Header = (props: IHeader) => {
  return (
    <div className='header'>
      <h1 className='headerHead'>
        {props.head}
      </h1>
      <p className='headerLine'>
        ___________
      </p>
      <p className='headerParagr'>
        {props.about}
      </p>
      <button className='headerButton' style={{display: props.button}}>
        Download
      </button>
    </div>
  )
}