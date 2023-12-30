import react from 'react';

function Page({subject}){
    return(
        <>
            <div className='float-left h-[80px] w-[80px] rounded-md bg-green-400 text-white flex items-center justify-center mx-3'>
                {subject.subject}
            </div>
        </>
    )
}
export default Page;