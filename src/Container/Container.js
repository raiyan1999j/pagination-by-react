import react,{useState,useRef} from 'react';
import PageNumber from './PageNumber';
import Page from './Page';

function Container({numberPage,pageArrange}){
    const [pageNum,setNum] = useState(0);

    const pageSelect=(value)=>{
        let grabIt = Number(value);

        setNum(grabIt);

        console.log(value)
    }
    return(
        <>
            <div className='before:table before:content-"" after:table after:content-"" after:clear-both w-1/2 flex justify-center my-4'>
                 {
                    pageArrange.length === 0?'':
                    pageArrange[pageNum].map((value,index)=>{
                        return(
                            <Page
                                key={index}
                                subject={value}
                            />
                        )
                    })
                 }
            </div>

            <div className='flex justify-start items-center '>
                {numberPage.map((value,index)=>{
                    return(
                        <PageNumber
                            key={index}
                            selectPage={(val)=>{pageSelect(val)}}
                            pageNum={value}
                        />
                    )
                })}
            </div>
        </>
    )
}
export default Container;