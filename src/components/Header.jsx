const Header = ({ text, bgColor, textColor }) => {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <h1>{text}</h1>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

export default Header
