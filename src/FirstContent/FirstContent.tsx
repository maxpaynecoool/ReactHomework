interface IFirstContent {
  imagesUrl: string
  description: string
  about: string
}

export const FirstContent = (prop: IFirstContent) => {
  return (
    <>
      <div className="descr">
        <p className="ellipse">
          <img src={prop.imagesUrl} />
        </p>
        <h2 className="description">
          {prop.description}
        </h2>
        <p className="about">
          {prop.about}
        </p>
      </div>
    </>
  )
}