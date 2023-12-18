import React from 'react'
import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsLinkedin } from "react-icons/bs"

function HeaderTop() {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between'>
            <div className='hidden lg:flex gap-1'>
              <div className="header_top__icon_wrapper">
                <BsFacebook />
              </div>
              <div className="header_top__icon_wrapper">
                <BsTwitterX />
              </div>
              <div className="header_top__icon_wrapper">
                <BsInstagram />
              </div>
              <div className="header_top__icon_wrapper">
                <BsLinkedin />
              </div>
            </div>
          </div>

          <div className='text-gray-500 text-[12px]'>
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $80
          </div>

          <div className='flex gap-4'>
            <select
              className='text-gray-500 text-[12px] w-[70px]'
              name="currency"
              id="currency"
            >
              <option value="USD">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="RUB">RUB ₽</option>
              <option value="UAH">UAH ₴</option>
            </select>

            <select
              className='text-gray-500 text-[12px] w-[70px]'
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Frensh">Frensh</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
