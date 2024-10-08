
import React from "react";

export default function HomePageSkeleton() {
  return (
    <>
     { [1,2,3].map((s)=>(
        <>
        <div className="border-gray-100 border rounded-md hover:shadow-md space-y-2.5 animate-pulse">
        <div className="flex gap-6 items-center p-6 border-b border-gray-100">
            <div class="flex items-center justify-center h-10 mb-2 bg-gray-300 rounded-full overflow-hidden dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
          <div className="flex flex-col gap-0.5">
          <div class="w-32 h-3 bg-gray-300 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24"></div>
          </div>
        </div>
            {[1,2,3].map((d)=>(
                <>
                    <div className="flex justify-between items-center gap-10 group px-6 py-4 border-gray-100 border-b">
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-2 w-full"></div>
                    </div>
                </>
            ))}
        <div className="py-8 flex justify-center">
         <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
      </div>
        </>
      ))}
      
    </>
  );
}
