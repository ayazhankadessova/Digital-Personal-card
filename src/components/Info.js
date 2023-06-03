import cardImage from '../assets/profilePic.jpeg'

function Info() {
  return (
    <div className='Info'>
      <img className='card--image' src={cardImage} alt='profile' />
      <h1>Ayazhan Kadessova</h1>
      <h4>Frontend Developer</h4>
      <p>
        <a href='https://github.com/ayazhankadessova' className='my-github'>
          ayazhankad
        </a>
      </p>
      <div className='button-group'>
        <button className='btn-mail'>
          <i className='bi bi-envelope-fill'></i> E-mail{' '}
        </button>
        <button className='btn-linkedin'>
          <i className='bi bi-linkedin'></i> Linkedin{' '}
        </button>
      </div>
    </div>
  )
}

export default Info
