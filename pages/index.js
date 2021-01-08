function Home() {
  const myMagicKey = process.env.MAGIC_KEY;
  return (
    <div>
      <h1>Home</h1>
      <p>{myMagicKey}</p>
    </div>
  )
}

export default Home
