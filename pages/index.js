const myMagicKey = "KEY: "+process.env.MAGIC_KEY;

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>({myMagicKey})</p>
      <p>jCMS</p>
    </div>
  )
}

export default Home
