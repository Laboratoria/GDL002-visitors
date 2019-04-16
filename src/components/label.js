import createElement from '../lib/createElement';

export default props => createElement('label', {
  innerText: props.text,
});
