/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Blog from '../Blog/Blog'

const BlogSection = () => {
    return (
        <>
            <div className='flex justify-around items-center py-10'>
                <div>
                    <span className='text-[#6A6A6A] text-sm font-[400] leading-5'>Showing 01 - 12 of 150 items</span>
                </div>
                <div className='flex justify-center items-center gap-5 text-white'>
                    <MdOutlineKeyboardArrowLeft className='text-[#6A6A6A] font-semibold' />
                    <span className='text-[#6A6A6A] font-semibold'>1</span>
                    <span className='text-[#6A6A6A] font-semibold'>2</span>
                    <span className='text-[#6A6A6A] font-semibold'>3</span>
                    <span className='text-[#6A6A6A] font-semibold'>4</span>
                    <span className='text-[#6A6A6A] font-semibold'>...</span>
                    <span className='text-[#6A6A6A] font-semibold'>8</span>
                    <MdOutlineKeyboardArrowRight className='text-[#6A6A6A] font-semibold' />
                </div>
            </div>
            <div className='video mx-68 pb-20'>
                <Blog />
            </div>
        </>
    )
}

export default BlogSection