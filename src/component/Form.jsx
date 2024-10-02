import { useFormik } from "formik"
import * as Yup from "yup"

const Form = () =>{
  const global_premiun = 'w-[100%] min-h-[13.20vh] rounded-[10px] bg-purple-100 px-[17.87vw]'
  const global_premiun_xl = 'sm:w-[37.5vw] sm:px-0 sm:min-h-[7.5vh] sm:px-[0.88vw] sm:py-[0.88vw]'
  const composition_premiun = 'text-15 leading-[174%] tracking-[0.27px]'
  const utilities_text = 'text-white text-center'
  const utilities_flex = 'flex justify-center items-center'
  const block_drop_shadow = 'shadow-premiun-shadow'

  const global_form = 'w-[100%] bg-white rounded-[10px] p-[6.4vw]'
  const global_form_xl = 'sm:w-[37.5vw] sm:p-[2.78vw]'
  const global_input = 'border border-grey-100 w-[100%] min-h-[56px] rounded-[5px] px-[5.07vw] text-[14px] font-semibold tracking-[0.25px] text-grey-200'
  const global_input_xl = 'sm:px-[2.22vw]'
  const global_placeholder = 'placeholder-grey-200 placeholder:text-14 placeholder:tracking-[0.25px] placeholder:font-semibold placeholder:opacity-70'
  const global_button = 'w-[100%] min-h-[56px] bg-green-100 rounded-[5px] uppercase text-15 font-semibold text-white tracking-[0.9px]'
  const global_terms = 'text-11 leading-[191%] text-center text-grey-300 w-[90%] mx-auto'
  const global_terms_xl = 'sm:w-[100%]'
  const global_terms_span = 'font-bold text-red-100'
  const block_drop_shadow_button = 'shadow-button-shadow'
  const utilities_msg_error = 'text-right text-11 mt-[0.75vh] font-medium italic text-red-100'
  const utilities_input_error = 'border-[2px] border-red-100'
  const utilities_icon_error = 'absolute bottom-1 right-10 -translate-y-1/2'

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First name cannot be empty"),
      lastName: Yup.string().required("Last name cannot be empty"),
      email: Yup.string()
        .required("Email cannot be empty")
        .email("Looks like this is not an email"),
      password: Yup.string()
        .required("Password cannot be empty")
        .min(6, "Password must be at least 6 characters"),
    }),
    
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

    console.log('first', formik.errors.firstName);
    console.log('last', formik.errors.lastName);

  return(
    <>
      <article className="flow__form">
        <div className={`premiun ${global_premiun} ${composition_premiun} ${utilities_text} ${utilities_flex} ${block_drop_shadow} ${global_premiun_xl}`}>
          <p>
            <span className={`font-bold`}>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <form className={`form ${global_form} ${block_drop_shadow} ${global_form_xl}`} id="myForm" onSubmit={formik.handleSubmit}>
          <fieldset >
            <legend className="sr-only">Personal Information</legend>
              <label className="sr-only" htmlFor="firstName">First Name</label>
              <div className="container__input relative">
                <input className={`${global_input} ${global_placeholder} ${global_input_xl} ${formik.errors.firstName && formik.touched.firstName && formik.errors.firstName && utilities_input_error }`} type="text" id="firstName" name="firstName" placeholder="First Name" autoComplete="name" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                { formik.errors.firstName && formik.touched.firstName && formik.errors.firstName && 
                  <img className={`${utilities_icon_error}`} src="./images/icon-error.svg" alt="exclamation mark" />
                }
              </div>
              <p className={`${utilities_msg_error}`}>
                {formik.errors.firstName && formik.touched.firstName && formik.errors.firstName}
              </p>
              <label className="sr-only" htmlFor="lastName">Last Name</label>
              <div className="container__input relative">
                <input className={`${global_input} ${global_placeholder} ${global_input_xl} ${formik.errors.lastName && formik.touched.lastName && formik.errors.lastName && utilities_input_error }`} type="text" id="lastName" name="lastName" placeholder="Last Name" autoComplete="name" data-type="top" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                { formik.errors.lastName && formik.touched.lastName && formik.errors.lastName && 
                  <img className={`${utilities_icon_error}`} src="./images/icon-error.svg" alt="exclamation mark" />
                }
              </div>
              <p className={`${utilities_msg_error}`}>
                {formik.errors.lastName && formik.touched.lastName && formik.errors.lastName}
              </p>
              <label className="sr-only" htmlFor="email">Email Address</label>
              <div className="contanier__input relative">
                <input className={`${global_input} ${global_placeholder} ${global_input_xl} ${formik.errors.email && formik.touched.email && formik.errors.email && utilities_input_error }`} type="email" id="email" name="email" placeholder="Email Address" autoComplete="email" data-type="top" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                { formik.errors.email && formik.touched.email && formik.errors.email && 
                  <img className={`${utilities_icon_error}`} src="./images/icon-error.svg" alt="exclamation mark" />
                }
              </div>
              <p className={`${utilities_msg_error}`}>
                {formik.errors.email && formik.touched.email && formik.errors.email}
              </p>
              <label className="sr-only" htmlFor="password">Password</label>
              <div className="container__input relative">
                <input className={`${global_input} ${global_placeholder} ${global_input_xl} ${formik.errors.email && formik.touched.email && formik.errors.email && utilities_input_error }`} type="password" id="password" name="password" placeholder="Password" data-type="top" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                { formik.errors.password && formik.touched.password && formik.errors.password && 
                  <img className={`${utilities_icon_error}`} src="./images/icon-error.svg" alt="exclamation mark" />
                }
              </div>
              <p className={`${utilities_msg_error}`}>
                {formik.errors.password && formik.touched.password && formik.errors.password}
              </p>
              <button className={`${global_button} ${block_drop_shadow_button}`} type="submit" data-type="top">
                Claim your free trial
              </button>
              <p className={`terms ${global_terms} ${global_terms_xl}`} data-type="top-terms">
                By clicking the button, you are agreeing to our <span className={`${global_terms_span}`}>Terms and Services</span> 
              </p>
          </fieldset>
        </form>
      </article>
    </>
  )
}

export default Form