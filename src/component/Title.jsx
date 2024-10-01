const Title = () =>{
  const composition_h1 = 'text-[28px] font-bold -trancking-[0.29px] leading-[128.57%]'
  const composition_p = 'font-medium leading-[162.5%]'
  const utilities_text = 'text-white text-center'
  return(
    <>
      <article className="flow__title">
        <h1 className={`title ${composition_h1} ${utilities_text}`}>
          Learn to code by watching others
        </h1>
        <p className={`description ${composition_p} ${utilities_text}`}>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable.
        </p>
      </article>
    </>
  )
}

export default Title