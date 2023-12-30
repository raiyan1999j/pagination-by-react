import react from 'react';

function PageNumber({pageNum,selectPage}){

    const selection=()=>{
        selectPage(pageNum)
    }
    
    return(
        <>
            <div className='flex justify-center items-center mr-2 h-[25px] w-[25px] rounded-md bg-blue-400 text-white hover:cursor-pointer'
            onClick={selection}
            >
                {pageNum}
            </div>
        </>
    )
}
export default PageNumber;