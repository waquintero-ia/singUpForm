const Title = () =>{
  const composition_h1 = 'font-bold -trancking-[0.29px] leading-[128.57%]'
  const composition_h1_xl = 'sm:leading-[110%] sm:tracking-[-0.52px]'
  const composition_p = 'font-medium leading-[162.5%]'
  const utilities_text = 'text-white text-center'
  const utilities_text_xl = 'sm:text-left'
  const composition_container_xl = 'sm:w-[36.46vw] sm:mr-[3.125vw]'
  return(
    <>
      <article className={`container flow__title ${composition_container_xl}`}>
        <h1 className={`title ${composition_h1} ${utilities_text} ${composition_h1_xl} ${utilities_text_xl}`}>
          Learn to code by watching others
        </h1>
        <p className={`description ${composition_p} ${utilities_text} ${utilities_text_xl}`}>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.
        </p>
      </article>
    </>
  )
}

export default Title