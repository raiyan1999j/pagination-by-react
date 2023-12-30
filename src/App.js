import react,{useState} from 'react';
import Input from './InputField/Input';
import Container from './Container/Container';

import './App.css';

function App(){
    const [statement,setState]= useState([]);
    const [pageNum,setPageNum]= useState([]);
    const [arrangePage,setArrPage] = useState([]);

    const getInput=(value)=>{
        let statementCopy = statement;
        let pageArr = [];

        for(let i=0;i<statement.length;i+=4){
            pageArr.push(statement.slice(i,i+4))
        }

        if(!pageNum.includes(arrangePage.length)){
            setPageNum([...pageNum,arrangePage.length])
        }

        setArrPage(pageArr);
        setState([...statementCopy,value]);
    }
    return(
        <>
            <Input
                inputGet={(value)=>{getInput(value)}}
            />
            <Container
                numberPage={pageNum}
                pageArrange={arrangePage}
            />
        </>
    )
}
export default App;