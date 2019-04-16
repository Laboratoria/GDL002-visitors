import createElement from '../lib/createElement';
import Button from '../components/Button';
import RegisterButton from '../components/RegisterButton';
import input from '../components/input';

export default () => createElement('form', {
  className: 'log-form',
  children: [input({ placeholder: 'Nombre Completo' }),
    input({ placeholder: 'Email' }),
    input({ placeholder: 'Empresa' }),
    input({ placeholder: 'Anfitrión' }),
    Button({ text: 'Tomar Foto' }),
    RegisterButton()],
});
