const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test('works with astral sympols', () => {
    expect(reverseString('foo 𝌆 bar mañana mañana')).toEqual('anañam anañam rab 𝌆 oof')
  })
  test('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});
