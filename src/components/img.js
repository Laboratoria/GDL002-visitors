import createElement from '../lib/createElement';

export default props => createElement('img', {
  src: props.src,
  alt: props.alt,
});
