import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets//portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'
import './projects.css'

const portfolioData =[
  {
    id:1,
    image:Img1,
    title:'Portfolio Item 1',
    github:'https://github.com/Eljokercodes/memory-game.git',
    demo:'https://eljokercodes.github.io/memory-game'
  },
  {
    id:2,
    image:Img2,
    title:'Portfolio Item 2',
    github:'https://github.com/Eljokercodes/Typing-speed-test-game.git',
    demo:'https://eljokercodes.github.io/Typing-speed-test-game'
  },
  {
    id:3,
    image:Img3,
    title:'Portfolio Item 3',
    github:'https://github.com/Eljokercodes/Image-slider.git',
    demo:'https://eljokercodes.github.io/Image-slider'
  },
  {
    id:4,
    image:Img4,
    title:'Portfolio Item 4',
    github:'https://github.com/Eljokercodes/Guess-the-word.git',
    demo:'https://eljokercodes.github.io/Guess-the-word'
  },
  {
    id:5,
    image:Img5,
    title:'Portfolio Item 5',
    github:'https://github.com/Eljokercodes/TO-DO-LIST.git',
    demo:'https://eljokercodes.github.io/TO-DO-LIST'
  },
  {
    id:6,
    image:Img6,
    title:'Portfolio Item 6',
    github:'https://github.com/Eljokercodes/quiz-app.git',
    demo:'https://eljokercodes.github.io/quiz-app'
  },
]
function Projects() {
  return (
    <section className="projects" id='projects'>
      <div className="top-section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects-container">

        {portfolioData.map(({id,image,title,github,demo})=>{
          return(
              <article key={id} className='potfolio-item'>
          <div className="portfolio-item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio-item-btns">
            <a href={github} target='_blank' className='btn'>Github</a>
            <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
          )
        })}
        
      </div>
    </section>
  )
}

export default Projects