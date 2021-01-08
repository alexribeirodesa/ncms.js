function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>{process.env.MAGIC_KEY}</p>
    </div>
  )
}

export default Home
