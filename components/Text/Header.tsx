import { ComponentProps, CSSProperties, Fragment, ReactNode } from 'react';
import classNames from 'classnames';
import { isArray } from 'util';
import { Button } from 'react-bootstrap';
type StyleUnit = 'normal' | 'bold' | 'bolder' | 'light' | 'lighter' | 'italics';
type TextColor = 'white' | 'black' | 'red';
export type Style = StyleUnit[] | StyleUnit;
export interface Props {
  children: ReactNode;
  textColor?: TextColor;
  fontStyle?: Style;
  className?: string;
  style?: CSSProperties;
}

const parseStyle = (style?: Style): string => {
  style = style ?? [];
  if (!Array.isArray(style)) {
    return parseStyleUnit(style);
  }
  let ret = '';
  style.forEach((s) => {
    ret += parseStyleUnit(s) + ' ';
  });
  return ret;
};

const parseStyleUnit = (style: StyleUnit): string => {
  switch (style) {
    case 'normal':
      return 'fw-normal';
    case 'bold':
      return 'fw-bold';
    case 'bolder':
      return 'fw-bolder';
    case 'light':
      return 'fw-light';
    case 'lighter':
      return 'fw-lighter';
    case 'italics':
      return 'fst-italic';
    case undefined:
      return '';
  }
};

const parseTextcolor = (color?: TextColor): string => {
  switch (color) {
    case 'white':
      return 'text-white';
    case undefined:
      return 'text-dark';
    case 'black':
      return 'text-dark';
    case 'red':
      return 'text-danger';
  }
};

export default function Header(
  fontSize: string
): (props: Props) => JSX.Element {
  const Header = (props: Props) => {
    return (
      <p
        className={classNames(
          parseTextcolor(props.textColor),
          parseStyle(props.fontStyle),
          props.className
        )}
        style={{ fontSize: fontSize, ...props.style }}
      >
        {props.children}
      </p>
    );
  };
  return Header;
}
