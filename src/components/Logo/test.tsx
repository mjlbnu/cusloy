import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Loyalty/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Loyalty/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Loyalty/i).parentElement).toHaveStyle({
      width: '11.3rem'
    })
  })

  it('should render a big logo', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Loyalty/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a big logo without text if hideOnMobile', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testado 'screen' (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Loyalty/i).parentElement).toHaveStyleRule(
      'width',
      '5.9rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
