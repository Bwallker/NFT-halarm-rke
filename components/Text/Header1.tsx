import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  textColor?: 'white' | 'black';
}
export default function Header1(props: Props) {
  return (
    <h1
      className={props.textColor === 'white' ? 'text-white' : 'text-dark'}
      style={{ fontSize: '6rem' }}
    >
      {props.children}
    </h1>
  );
}
