import React,{useState,useEffect} from 'react'
import data from "../datalist.json"
import { useRouter } from 'next/router';
import Image from 'next/image';
const Courses = ({user}) => {
    const [disabled, setdisabled] = useState(false)
    const [disabled1, setdisabled1] = useState(true)
    const [query, setQuery] = useState('');
    console.log(data)
    console.log(user);
    const router = useRouter();
   const handleSearchChange=(e)=>{
    setQuery(e.target.value)
   }

   const filteredData = data.filter((course) =>
   course.course_name.toLowerCase().includes(query.toLowerCase())
 );

    
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    {/* <input
            className='text-[20px] text-white'
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search courses..."
        /> */}
        <div class="relative mb-4">
        <label for="search" class="leading-7 text-sm text-gray-50 text-[20px]">Search Here</label>
        <input type="text"  value={query} onChange={handleSearchChange}  placeholder="Search courses..." id="search" name="search" class="w-full bg-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="flex flex-wrap -m-4">
       {filteredData.map((course)=>(
        <div key={course.id} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src={course.image_link} alt="blog"/>
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">COURSE NAME</h2>
              <h1 className="title-font text-lg font-medium text-gray-300 mb-3">{course.course_name}</h1>
              <p className="leading-relaxed mb-3 text-gray-400 ">{course.description}</p>
              <p className="leading-relaxed mb-3 text-gray-400 ">COURSE TYPE --<span className='text-blue-400 font-serif font-semibold text-[20px]'>{course.course_type}</span></p>
              <div className="flex items-center flex-wrap">
                {user.value===null && course.course_type==="premium"?<><button disabled={disabled1} onClick={()=>{
                     router.push(`/course/${course.id}`);
                }} className="disabled:text-indigo-100 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button></>
                
                :<><button disabled={disabled} onClick={()=>{
                    router.push(`/course/${course.id}`);
                }} className="disabled:text-indigo-100 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button></>}
              </div>
            </div>
          </div>
        </div>
       ))}
        
      </div>
    </div>
  </section>
  )
}

export default Courses