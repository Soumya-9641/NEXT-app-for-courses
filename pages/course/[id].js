import React ,{useState,useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import data from "../datalist.json"
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';

const Slug = ({item}) => {
  console.log(data);
  console.log(item.video_links)

  return (
    <>
    <div className='sticky top-0 z-50 text-gray-600 body-font bg-gray-600'>
    <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href={'/'}>
      <Image className=''src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg'  alt='' width={50} height={50}/>
      </Link> 
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Course.com</span>
      </a>
    </div>
    </div>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image alt="content" className="object-cover object-center h-100% w-full " src={item.image_link} width={900} height={900}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-50 text-lg">{item.course_name}</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base text-gray-400">{item.course_type}</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg text-gray-200 mb-4">{item.description}</p>
          
            {item.video_links.map((link,index)=>(
              
              <div key={index} className="flex flex-wrap -m-2">
            
            <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
             
                <div className="flex-grow">
                <a href={link} target='_blank' rel="noopener noreferrer">
                     <h2 className="text-gray-100 title-font font-medium">videoLink {index+1}</h2>
                </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
            ))}
            {/* {item.video_links}
            */}
          
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  ); 
};

export async function getServerSideProps(context) {
    const { id } = context.params;
    //console.log(id)
    const itemId = parseInt(id, 10);
    // Fetch the data for the specific item using the id
    const item =  data.find((item) => item.id === itemId);
  
    return {
      props: {
        item: item || null,
      },
    };
  }

export default Slug;