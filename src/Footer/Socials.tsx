interface ISocials {
  imageUrl: string
}

export const Socials = (props: ISocials) => {
  

  return (
    <>
      <img id="soc" src={props.imageUrl} width='30px'/>
    </>
  )
}