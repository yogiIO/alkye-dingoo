import React from 'react'
import { socialLogo } from '../common/footerSocial'

export default function Footer() {
    return (
        <div className=' w-full bg-black mt-auto'>
            <div className=' max-w-[1168px] sm:py-[75px] py-[40px] text-[#fff] m-auto flex flex-col gap-[30px] px-[33px]'>
                <div className=' flex sm:gap-[50px] gap-[25px]'>
                    {
                        socialLogo.map((item) => {
                            return <img className=' sm:h-[50px] sm:w-[50px] h-[25px] w-[25px]' src={item.path} key={item.key} alt="dingoo socials" />
                        })
                    }
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-1'>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Privacy Policy</div>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Contact Us</div>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Cookie preferences</div>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Corporate Information</div>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Privacy Policy</div>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Contact Us</div>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Cookie preferences</div>
                    <div className=' text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>Corporate Information</div>
                </div>
                <div className='text-[12px] leading-[25px] font-semibold  sm:text-[24px] sm: sm:leading-[50px] '>
                    © Alkye Test
                </div>
            </div>
        </div>
    )
}
