import LogForm from '../../src/pages/LogForm';

describe('LogForm', () => {
  it('should return form with 4 nested inputs & 2 nested button', () => {
    const element = LogForm();
    expect(element.tagName).toBe('FORM');
    expect(element.className).toBe('log-form');
    expect(element.children.length).toBe(6);
    expect(element.children[0].tagName).toBe('INPUT');
    expect(element.children[1].tagName).toBe('INPUT');
    expect(element.children[2].tagName).toBe('INPUT');
    expect(element.children[3].tagName).toBe('INPUT');
    expect(element.children[4].tagName).toBe('BUTTON');
    expect(element.children[4].innerText).toBe('Tomar Foto');
    expect(element.children[5].tagName).toBe('BUTTON');
    expect(element.children[5].innerText).toBe('Registrarse');
  });
});
