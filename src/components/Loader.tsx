import ClimbingBox from "react-spinners/ClimbingBoxLoader"

const Loader = () => {
    return (
        <div className='w-[100dvw] h-[100dvh] flex items-center justify-center'>
            <ClimbingBox 
            color="#326CF9"
            size={50}
            loading

            />
        </div>
    )
}

export default Loader
