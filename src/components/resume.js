import res from '../assets/resume.jpg'

export default function Resume(){
    return <section id='Resume' className='flex flex-col md:flex-row px-5 bg-primary2'>
        <div className="flex md:w-1/2 px-5 py-5 justify-center md:justify-end ">
            <img  className=" w-[300px]" src={res}></img>
            </div>
        <div className='md:w-1/2 flex justify-center' >
            <div className='flex flex-col justify-center'> 
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>Resume upload here <a href='#' className='btn'>Dowload</a></p>
            </div>
                
            </div> 
    </section>
}