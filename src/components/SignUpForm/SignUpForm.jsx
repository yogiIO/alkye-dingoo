import logoSrc from '../../assets/Logo/Logo.svg'
import srcPwd from '../../assets/Icons/eye-off.svg'

export default function SignUpForm({ step, leftTitle, leftAbout, inputPlaceholder, inputLabel, buttonText, formText, inputType, footer, handleSubmit, inputName, className, windowWidth, handleChangeInput }) {
    function handleTogglePassword(id){
        const inputElement = document.getElementById(id);
        if(inputElement.getAttribute('type') === 'password'){
            inputElement.setAttribute('type', 'text')
        }
        else{
            inputElement.setAttribute('type', 'password')
        }
    }
    return (
        <div className={`font-secondary-color flex flex-col sm:px-[90px] px-[42px] sm:pt-[99px] pt-[50px]  gap-[40px] flex-1 rounded-[inherit] ${className} `}>
            <div className=' flex items-center justify-start'>
                <img src={logoSrc} alt="dingoo" className=' h-[29.5px] w-[63.5px] sm:w-[135px] sm:h-[59px]' />
            </div>
            <div className='sm:grid flex flex-col gap-[31px] grid-cols-12'>
                <div className=' flex flex-col col-span-5'>
                    <div className=' font-normal sm:text-[24px] text-[12px] sm:leading-[50px] leading-[25px]'>STEP {step}</div>
                    <div className=' font-medium text-[24px] leading-[25px] sm:text-[48px] sm:leading-[55px]'>{leftTitle}</div>
                    <div className='text-[12px] leading-[25px] font-normal sm:text-[24px] sm:leading-[50px]'>{leftAbout}</div>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[25px] col-start-7 col-end-[-1]'>
                    {
                        inputLabel &&
                        <label htmlFor={inputName} className='text-[12px] leading-[23.5px] font-normal sm:text-[24px] sm:leading-[47px]'>{inputLabel}</label>
                    }
                    {
                        inputType === 'password' ?
                            <div className='border-[#939393] border rounded-[5px] flex items-center relative'>
                                <input className=' w-full focus:outline-none px-[25.5px] sm:px-[47px] pt-[13px] sm:pt-[26px] pb-[12px] sm:pb-[24px]  text-[#636363] rounded-[5px] font-medium text-[12px] leading-[25px] sm:text-[24px] sm:leading-[50px]' type="password" name={inputName} id={inputName} placeholder={inputPlaceholder} onChange={handleChangeInput} />
                                <img src={srcPwd} alt="show_password" className=' cursor-pointer sm:inline hidden absolute right-[15px]' onClick={() => handleTogglePassword(inputName)}/>
                            </div>
                            :
                            <input className='border-[#939393] border focus:outline-none px-[25.5px] sm:px-[47px] pt-[13px] sm:pt-[26px] pb-[12px] sm:pb-[24px] rounded-[5px] text-[#636363] font-medium text-[12px] leading-[25px] sm:text-[24px] sm:leading-[50px]' type="text" name={inputName} id={inputName} placeholder={inputPlaceholder} onChange={handleChangeInput} />
                    }
                    <div className=' flex justify-between items-center gap-3'>
                        {
                            formText && <span className={`flex-1 sm:text-[20px] sm:leading-[30px] font-light text-[10px] leading[15px] text-[#4E4E4E] ${windowWidth < 640 ? 'underline' : ''}`}>{formText}</span>
                        }
                        <button type="submit" className=' ml-auto px-[30px] py-[6px] sm:px-[37px] sm:py-[13px] bg-[#000] text-[12px] sm:text-[24px] text-[#fff] rounded-[5px] sm:rounded-[10px]'>{buttonText}</button>
                    </div>
                </form>

            </div>
            {
                footer &&
                <div className={`pb-[62px] sm:pb-[140px] text-[7px] leading-[15px] font-light sm:text-[14px]  sm:leading-[30px]`}>{footer}</div>
            }
        </div>
    )
}

