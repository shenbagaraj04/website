import img from '../assets/about.png'

export default function About(){
    const config={
        line1:'I treated myself to chocolate gateau for breakfast.',
        line2:'I made myself ill by eating too much.',
        line3:'I punished myself later by having celery sticks for dinner.'
    }
    return<section id='About' className='flex flex-col md:flex-row bg-primary2 px-5 justify-center '>
     <div className='md:w-1/2 py-5' >
  <img src={img}></img>

     </div>
     <div className='md:w-1/2 flex '>   
        <div className='flex flex-col justify-center font-hero'>
        <h1 className='text-4xl border-b-2 w-[160px] mb-5 font-bold border-[white] '>About me </h1>
        <p className='text-2xl mb-5'>{config.line1}</p>
        <p className='text-2xl mb-5'>{config.line2}</p>
        <p className='text-2xl mb-5'>{config.line3}</p>
        </div>

</div>

    </section>
}