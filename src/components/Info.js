import cardImage from '../assets/profilePic.jpeg'

function Info() {
  return (
    <div className='section--info'>
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
          <a
            href='mailto:kadessovaayazhan@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}
          >
            <i className='bi bi-envelope-fill'></i>{' '}
            <span style={{ color: 'white' }}>Email</span>
          </a>
        </button>
        <button className='btn-linkedin'>
          <a
            href='https://www.linkedin.com/in/ayazhankad/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'none' }}
          >
            <i className='bi bi-linkedin'></i>{' '}
            <span style={{ color: 'white' }}>Linkedin</span>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Info
