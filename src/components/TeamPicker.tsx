import azsLogoSrc from '../images/azs_logo_transparent.png'
import bytomLogo from '../images/bytom_logo.png'

const TeamPicker = () => {
  return (
    <>
      <div className='flex justify-center  flex-row items-center'>
        <button>
          <img
            className='m-5  rounded-full hover:border-4 border-green-700/75 hover:z-50 hover:shadow-xl'
            src={azsLogoSrc}
            alt='azs logo'
            width={150}
            height={150}
            onClick={() => alert('clicked')}
          />
        </button>
        <h1 className='mx-4'>vs</h1>
        <button>
          <img
            className='m-5  rounded-full hover:border-4 border-green-700/75 hover:z-50 hover:shadow-xl flex'
            src={bytomLogo}
            alt='bytom logo'
            width={150}
            height={150}
            onClick={() => alert('clicked')}
          />
        </button>
      </div>
    </>
  )
}

export default TeamPicker
