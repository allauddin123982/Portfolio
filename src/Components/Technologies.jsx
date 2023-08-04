import React from 'react'

const Technologies = () => {
  return (
    <>
    <div className=" md:flex m-5 md:m-20">
        <div className="col-span-3  text-white p-10 md:p-20 text-justify">
            <h1 className='text-3xl md:text-5xl  tracking-widest'>Technologies I'm working with</h1>
            <p className='text-gray-300 pt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, saepe! Quaerat impedit quae distinctio eos maxime quisquam tempora.
            </p>

        </div>
        <div className="text-green-400 text-2xl md:text-4xl p-10">
            <ul className='flex flex-col gap-y-10' >
                <li>Next.js</li>
                <li>React.js</li>
                <li>Node.js</li>
            </ul>
           
            
        </div>
        <div className="text-green-400 text-2xl md:text-4xl p-10  md:ps-20">
        <ul className='flex flex-col gap-y-10' >
                <li>Tailwind</li>
                <li>SCSS</li>
                <li>Remix.js</li>
            </ul>
           
        </div>
    </div>
    
    
    </>
  )
}

export default Technologies