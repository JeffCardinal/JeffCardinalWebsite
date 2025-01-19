import { useEffect, useState } from 'react';
import './TypeText.css';

export default function TypeText({text}:{text:string}) {
  const [textDisplay, setTextDisplay] = useState("");

  useEffect(() => {
    let n = 0;
    let currentText = "";

    const startTyping = () => {
      const typeWriter = () => {
        if (n < text.length) {
          currentText += text[n];
          setTextDisplay(currentText);
          setTimeout(typeWriter, 100);
          n++;
        }
      };
      typeWriter();
    };

    setTextDisplay("");
    const delay = setTimeout(startTyping, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, [text]);

  return (
    <>
      <div className="Description" id="demo">{textDisplay}</div>
    </>
  );
}
