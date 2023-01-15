import loader from '../assets/icons/loader.svg';

const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
        <img src={loader} width={100} height={100} alt="loading" />
    </div>
  )
}

export default Loader