const Form = () =>{
  const global_premiun = 'w-[100%] min-h-[13.20vh] rounded-[10px] bg-purple-100 px-[17.87vw]'
  const composition_premiun = 'text-[15px] leading-[174%] tracking-[0.27px]'
  const utilities_text = 'text-white text-center'
  const utilities_flex = 'flex justify-center items-center'
  const block_drop_shadow = 'shadow-premiun-shadow'

  const global_form = 'w-[87.2vw] bg-white rounded-[10px] p-[6.4vw]'
  const global_input = 'border border-grey-100 w-[100%] min-h-[56px] rounded-[5px] px-[5.07vw]'
  const global_placeholder = 'placeholder-grey-200 placeholder:text-[14px] placeholder:tracking-[0.25px] placeholder:font-semibold placeholder:opacity-70'
  const global_button = 'w-[100%] min-h-[56px] bg-green-100 rounded-[5px] uppercase text-[15px] font-semibold text-white tracking-[0.9px]'
  const block_drop_shadow_button = 'shadow-button-shadow'
  
  return(
    <>
      <article className="flow__form">
        <div className={`premiun ${global_premiun} ${composition_premiun} ${utilities_text} ${utilities_flex} ${block_drop_shadow}`}>
          <p>
            <span className={`font-bold`}>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <form className={`${global_form} ${block_drop_shadow}`} id="myForm">
          <fieldset >
            <legend className="sr-only">Personal Information</legend>
              <label className="sr-only" htmlFor="firstName">First Name</label>
              <input className={`${global_input} ${global_placeholder}`} type="text" id="firstName" name="firstName" placeholder="First Name" autoComplete="name"/>
              <label className="sr-only" htmlFor="lastName">Last Name</label>
              <input className={`${global_input} ${global_placeholder}`} type="text" id="lastName" name="lastName" placeholder="Last Name" autoComplete="name" data-type="top"/>
              <label className="sr-only" htmlFor="email">Email Address</label>
              <input className={`${global_input} ${global_placeholder}`} type="email" id="email" name="email" placeholder="Email Address" autoComplete="email" data-type="top"/>
              <label className="sr-only" htmlFor="password">Password</label>
              <input className={`${global_input} ${global_placeholder}`} type="password" id="password" name="password" placeholder="Password" autoComplete="password" data-type="top"/>
              <button className={`${global_button} ${block_drop_shadow_button}`} type="submit" data-type="top">
                Claim your free trial
              </button>
              <p className="terms text-[11px] leading-[191%] text-center text-grey-300" data-type="top-terms">
                By clicking the button, you are agreeing to<br/> our <span className="font-bold text-red-100">Terms and Services</span> 
              </p>
          </fieldset>
        </form>
      </article>
    </>
  )
}

export default Form