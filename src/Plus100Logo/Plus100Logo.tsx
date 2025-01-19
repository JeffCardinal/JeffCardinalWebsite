import Plus100LogoPill from './Plus100LogoPill.png'
import './Plus100Logo.css'

export default function Plus100Logo({link}:{link: string}) {
    return(
      <a href={link}>
        <img src={Plus100LogoPill} />
      </a>
    )
}
