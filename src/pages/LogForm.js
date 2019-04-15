import createElement from '../lib/createElement';
import RegisterButton from '../components/RegisterButton';
import input from '../components/input';

export default () => createElement('section', {
  className: 'log-form',
  children: [input({ placeholder: 'Nombre Completo' }),
    input({ placeholder: 'Email' }),
    input({ placeholder: 'Empresa' }),
    input({ placeholder: 'Anfitrión' }),
    document.createElement('div'),
    RegisterButton()],
});
