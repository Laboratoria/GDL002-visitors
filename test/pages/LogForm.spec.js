import LogForm from '../../src/pages/LogForm';

describe('LogForm', () => {
  it('should return section with 4 nested inputs, 1 nested div and 1 nested button', () => {
    const element = LogForm();
    expect(element.tagName).toBe('SECTION');
    expect(element.className).toBe('log-form');
    expect(element.children.length).toBe(6);
    expect(element.children[0].tagName).toBe('INPUT');
    expect(element.children[1].tagName).toBe('INPUT');
    expect(element.children[2].tagName).toBe('INPUT');
    expect(element.children[3].tagName).toBe('INPUT');
    expect(element.children[4].tagName).toBe('DIV');
    expect(element.children[5].tagName).toBe('BUTTON');
    expect(element.children[5].innerText).toBe('Registrarse');
  });
});
