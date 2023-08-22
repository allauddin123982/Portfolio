import React from 'react'
import mongo from '../Images/mongodb.png'
import react from '../Images/react.png'
import andr from '../Images/androidlogo.png'
import node from '../Images/node.png'
import reactNat from '../Images/reactNative.png'
import exp from '../Images/express.png'
import fb from '../Images/firebase.png'
import vsc from '../Images/vscode.png'
const Technologies = () => {
  return (
    <>
    <div id='tech-sec' className=" m-5 md:m-10">
        <div className="  text-white p-10 md:p-16 text-center">
            <h1 className='text-3xl md:text-4xl  tracking-widest'>Technologies I'm working with</h1>
            <p className='text-gray-300 pt-5 flex justify-center text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, saepe! Quaerat impedit quae distinctio eos maxime quisquam tempora.
            </p>

        </div>
        <div className="bg-[#101010] p-7 rounded-xl flex flex-wrap max-w-[1400px] mx-auto justify-center gap-x-20 gap-y-12 md:gap-x-40 md:gap-y-16">
          <img src={mongo} alt="" className=' w-[100px] h-[40px] md:w-[200px] md:h-[50px]' />
          <img src={react} alt="" className='w-[100px] h-[40px] md:w-[200px] md:h-[60px]' />
          <img src={andr} alt="" className='w-[100px] h-[40px] md:w-[200px] md:h-[40px]' />
          <img src={node} alt="" className='w-[100px] h-[40px] md:w-[150px] md:h-[30px]' />
          <img src={reactNat} alt="" className='w-[110px] h-[40px] md:w-[240px] md:h-[60px]' />
          <img src={exp} alt="" className='w-[100px] h-[40px] md:w-[200px] md:h-[50px]' />
          <img src={fb} alt="" className='w-[100px] h-[40px] md:w-[200px] md:h-[50px]' />
          <img src={vsc} alt="" className='w-[100px] h-[40px] md:w-[200px] md:h-[50px]' />
        </div>
    </div>  
    
    
    </>
  )
}

export default Technologies