const myMagicKey = "KEY: "+process.env.MAGIC_KEY;

function Home() {
  return (
    <div>
      <h1>Home 5</h1>
      <p>({myMagicKey})</p>
      <p>jCMS</p>
    </div>
  )
}

export default Home
