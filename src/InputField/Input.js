import react,{useRef} from 'react';

function Input({inputGet}){
    const inputRef = useRef();

    const passData=()=>{
        let wrap ={
            unique: Date.now(),
            subject: inputRef.current.value
        }
        inputGet(wrap);
        inputRef.current.value = '';
    }
    return(
        <>
            <input type="text" ref={inputRef} className='border-2 border-blue-500 rounded-md'/>
            <button onClick={passData} className='bg-green-400 rounded-lg text-white px-4 py-2 hover:bg-green-600'>
                Submit
            </button>
        </>
    )
}
export default Input;