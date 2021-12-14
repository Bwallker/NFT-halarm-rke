import { ReactNode } from 'react';

import Header, { Props } from './Header';

export default function Header3(props: Props): JSX.Element {
  return Header('2.25rem')(props);
}
