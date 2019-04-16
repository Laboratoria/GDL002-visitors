import createElement from '../lib/createElement';
import Button from '../components/Button';
import input from '../components/input';
import label from '../components/label';
// import '../styles/index.css'

export default () => createElement('form', {
  className: 'log-form',
  children: [label({ text: 'Nombre Completo' }),
    input({ placeholder: 'Nombre Completo' }),
    label({ text: 'Email' }),
    input({ placeholder: 'Email' }),
    label({ text: 'Empresa' }),
    input({ placeholder: 'Empresa' }),
    label({ text: 'Anfitrión' }),
    input({ placeholder: 'Anfitrión' }),
    label({ text: 'Tomar Fotografía' }),
    Button({ className: 'photo-btn', text: 'Tomar Foto' }),
    Button({ className: 'register-btn', text: 'Registrarse' })],
});
