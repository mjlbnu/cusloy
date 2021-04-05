import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
}

const Logo = ({ color = 'white' }: LogoProps) => (
  <S.Wrapper color={color}>
    <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="a" x1=".5" x2=".5" y1="1" y2="0">
          <stop offset="0" stopColor="#fd5900" />
          <stop offset="1" stopColor="#ffde00" />
        </linearGradient>
      </defs>
      <path
        d="M505.637 62.358a14.962 14.962 0 00-16.963-.22l-86.102 56.733a14.969 14.969 0 00-6.387 9.565 14.888 14.888 0 002.256 11.265c4.95 7.383 7.559 15.996 7.559 24.917 0 24.814-20.186 45-45 45s-45-20.186-45-45c0-14.59 7.207-28.345 19.248-36.812 6.768-4.746 8.408-14.092 3.662-20.874L268.275 6.02c-5.566-8.027-18.984-8.027-24.551 0L173.09 106.933c-4.746 6.782-3.105 16.128 3.662 20.874C188.792 136.274 196 150.03 196 164.62c0 24.814-20.186 45-45 45s-45-20.186-45-45c0-8.92 2.607-17.534 7.559-24.917a14.887 14.887 0 002.256-11.265 14.966 14.966 0 00-6.387-9.565L23.326 62.14a14.961 14.961 0 00-16.963.22A15.013 15.013 0 00.445 78.253l60.995 240c1.875 7.56 9.199 12.612 17.02 11.162 117.833-19.629 237.247-19.629 355.079 0 .82.146 1.67.205 2.46.205 6.769 0 12.862-4.6 14.562-11.367l60.995-240a15.014 15.014 0 00-5.92-15.895z"
        fill="url(#a)"
      />
      <text
        fill="currentColor"
        strokeWidth="10"
        opacity="undefined"
        x="51.079"
        y="476.09"
        fontSize="165"
        fontFamily="'Rounded Mplus 1c Medium'"
        stroke="#currentColor"
      >
        L O Y
      </text>
    </svg>
  </S.Wrapper>
)

export default Logo
