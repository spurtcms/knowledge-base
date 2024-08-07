"use client"
import React, { useEffect, useState } from 'react'
import FilterJob from './FilterJob'
import Link from 'next/link'
import HomePageSkeleton from '../SkeletonLoader/HomePageSkeleton'
import NodataImg from '../NodataImg'
import { setRouter } from '@/app/api/serverAction'

export default function HomepageList({CategoryList,CategoryEntries}) {

  const [categoryList,setCategoryList]=useState()
  const [categoryEntries,setCategoryEntries]=useState(CategoryEntries)
  const [loader,setLoader]=useState(true)



useEffect(()=>{
  
  window.scrollTo(0, 0);

  let FindData=CategoryList?.categoriesList?.categories && CategoryList?.categoriesList?.categories.map((data)=>{
    let Arr=[]
    categoryEntries?.channelEntriesList?.channelEntriesList.map((res)=>{
      
      if((res?.categoriesId).includes(data?.id.toString())){
        Arr.push(res)
      }
    })
    data.filterData=Arr

    return data
  })

  if(FindData){
    setCategoryList(FindData)
    setLoader(false)
  }
  else{
    setCategoryList(CategoryList?.categoriesList?.categories)
    setLoader(false)
  }
  },[])
  

  const handleRoute=(slug)=>{
    setRouter(slug)
  }


  return (
    <>
    <main className="min-h-screen bg-white">
        <FilterJob categoryList={categoryList}/>
        <div className="max-w-screen-2xl m-auto">
          <div className="lg:px-20 px-4 sm:px-10 py-10">
            <h2 className="text-black font-semibold mb-10 text-[32px]">Browse By Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10">
                {categoryList?.length>0 && categoryList.map((response,index)=>(
                <> 
                <div className="border-gray-100 border rounded-md hover:shadow-md relative pb-24">
                  <div className="flex gap-6 items-center p-6 border-b border-gray-100">
                    <img src="img/card-img.svg" />
                    <div className="flex flex-col gap-0.5">
                      <h6 className="text-2xl text-black font-semibold">{response?.categoryName}</h6>
                      <p className="text-gray-300 text-sm font-medium">{response?.filterData?.length} articles</p>
                    </div>
                  </div>
                  {response?.filterData && response?.filterData.map((result,ind)=>(
                    <>
                    {ind <3 &&
                    <div className="flex justify-between items-center gap-10 group px-6 py-4 border-gray-100 border-b">
                      <Link href={`/categoriesDetails/${result?.slug}`} onClick={()=>handleRoute(response?.categorySlug)} className="text-gray-300 text-base font-medium group-hover:text-blue-600">
                        {result?.title}
                      </Link>
                      <Link href={`/categoriesDetails/${result?.slug}`}>
                      <img src="img/right-arrow.svg" />
                      </Link>
                    </div>}
                    </>
                  ))}
                  <div className="w-full my-8 flex justify-center absolute bottom-0">
                    
                    <Link href={`/allCategories/${response?.categorySlug}`} className="flex gap-2 px-6 h-9 items-center justify-center hover:text-white group text-gray-300 text-base font-normal border border-gray-100 hover:border-0 shadow-btn rounded bg-white hover:bg-black">
                    Show All
                    <img src="img/show.svg" className="group-hover:hidden" />
                    <img src="img/show-active.svg" className="hidden group-hover:block" />
                    </Link>
                    
                  </div>
                </div>
                </>
                )) 
                }
                {categoryList?.length==0 && 
                <>
                <NodataImg/>
                </>}
                {loader==true && 
                <HomePageSkeleton />
                }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
