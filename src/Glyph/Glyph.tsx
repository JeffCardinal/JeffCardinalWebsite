import { ReactNode } from 'react';
import './Glyph.css';

export default function Glyph(
  {link, id, children}: {link: string, id: string, children: ReactNode}) {
    return (
      <a href={link}>
        <div className="glyph" id={id}>
          {children}
        </div>
      </a>
    );
}
