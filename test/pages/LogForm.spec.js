import LogForm from '../../src/pages/LogForm';

describe('LogForm', () => {
  it('should return form with 4 nested inputs, 5 nested labels & 2 nested button', () => {
    const element = LogForm();
    expect(element.tagName).toBe('FORM');
    expect(element.className).toBe('log-form');
    expect(element.children.length).toBe(11);
    expect(element.children[0].tagName).toBe('LABEL'); // NOMBRE
    expect(element.children[1].tagName).toBe('INPUT'); // nombre
    expect(element.children[2].tagName).toBe('LABEL'); // EMAIL
    expect(element.children[3].tagName).toBe('INPUT'); // email
    expect(element.children[4].tagName).toBe('LABEL'); // EMPRESA
    expect(element.children[5].tagName).toBe('INPUT'); // empresa
    expect(element.children[6].tagName).toBe('LABEL'); // ANFITRION
    expect(element.children[7].tagName).toBe('INPUT'); // anfitrion
    expect(element.children[8].tagName).toBe('LABEL'); // TOMARFOTO
    expect(element.children[9].tagName).toBe('BUTTON'); //  btn foto
    expect(element.children[9].innerText).toBe('Tomar Foto');
    expect(element.children[10].tagName).toBe('BUTTON');
    expect(element.children[10].innerText).toBe('Registrarse');
  });
});
