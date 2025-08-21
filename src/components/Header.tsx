import '../index.css'
import { useState } from 'react'
export function Header() {
  const [isSelect, setIsSelect] = useState(false)

  const Language = () => {
    return (
      <div className='absolute top-10 right-5 w-25 flex flex-col gap-2 items-center mt-1 bg-[#282C44] dark:bg-white-800 rounded-lg shadow-lg overflow-hidden z-20 font-inter'>
        <p className='mt-2 hover:text-[#C778DD] cursor-pointer'>English</p>
        <p className='mb-2 hover:text-[#C778DD] cursor-pointer'>VietNamese</p>
      </div>
    )
  }

  return (
    <div className='bg-[#282C33] w-full h-20 text-white items-center font-inter'>
      <div className='mx-10 flex justify-between items-center'>
        <p className='font-fira font-semibold text-lg'>This Is Logo</p>
        <ul className='flex gap-5 mt-5 font-jetbrains'>
          <li className='hover:text-[#C778DD] hover:underline'>#home</li>
          <li className='hover:text-[#C778DD] hover:underline'>#words</li>
          <li className='hover:text-[#C778DD] hover:underline'>#about-me</li>
          <li className='hover:text-[#C778DD] hover:underline'>#contacts</li>
          <div
            className={`flex items-center gap-1 font-inter`}
            onClick={() => {
              setIsSelect(!isSelect)
            }}
          >
            <p>VN</p>
            <i className={`w-4 ${isSelect ? 'rotate-180' : ' '}`}>
              <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    d='M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z'
                    fill='#ffffff'
                  ></path>{' '}
                </g>
              </svg>
            </i>
          </div>
          {isSelect && <Language />}
        </ul>
      </div>
    </div>
  )
}
