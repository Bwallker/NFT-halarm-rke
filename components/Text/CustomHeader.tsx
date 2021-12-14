import Header, { Props } from './Header';

export default function CustomHeader(props: Props & { fontSize?: string }) {
  return Header(props.fontSize ?? '1rem')(props);
}
