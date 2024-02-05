const Header = () => {
  const styles = {
    textShadow:
      " -1px -1px 0 rgba(0, 0, 0, 1),1px -1px 0 rgba(0, 0, 0, 1), -1px 1px 0 rgba(0, 0, 0, 1),1px 1px 0 rgba(0, 0, 0, 1)",
  }

  return (
    <h1
      className=" text-white text-5xl font-bold pb-2 text-center"
      style={styles}
    >
      Squeedle
    </h1>
  )
}
export default Header
