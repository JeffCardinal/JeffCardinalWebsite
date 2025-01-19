import './Modal.css'

export default function Modal({show}:{show: boolean}) {
    const showHideClassName = show ? "show" : "hide";
    return(
      <div className="overlay">
        <div className={`modal ${showHideClassName}`}>Hello from Modaland!</div>
      </div>
    )
}
