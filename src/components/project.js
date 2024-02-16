import im from '../assets/ecommerce-websites.jpg'
import im1 from '../assets/food-ecommerce.jpg'
import im2 from '../assets/website-blog.jpg'
export default function Project(){
    const config ={
        projects :[
            {
                image : im,
                des : 'ecommerce website react js templates',
                link:'https://www.google.com/'
            },
            {
                image : im1,
                des : 'food-ecommerce website react js templates',
                link:'https://www.youtube.com'
            },
            {
                image : im2,
                des : 'wesite blog react js templates',
                link:'https://www.facebook.com'
            }

        ]
    }
    return <section id='Project'className="flex flex-col px-5 py-5 justify-center bg-primary1 text-white ">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl border-b-2 w-[130px] mb-5 font-bold border-[white]">Projects</h1>
            <p>text-4xl border-b-2 w-[130px] mb-5 font-bold b</p>
            </div> 
           </div>
        <div className="w-full  ">
            <div className='flex flex-col md:flex-row gap-5  px-5' >
                {config.projects.map((project)=>(
                    <div className='relative'>
                <img className="h-[200px] w-[500px]" src={project.image}></img>
                <div className='project-desc'>
                    <p className=' text-center py-5 px-5'>{project.des}</p>
                    <div className='flex justify-center'>
                        <a target='_blank' className='btn' href={project.link}>View project</a>
                    </div>
                    </div>
                    
                </div>
                ))
            }
          
           
           
          
            </div>
          
        </div>
        </section>
}