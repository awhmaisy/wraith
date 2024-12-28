export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-unifont" style={{ color: '#eee', backgroundColor: '#000', fontFamily: 'Unifont' }}>
      <main className="flex flex-col  items-start">
        <video
          src="/PM-ANIMATED.mp4"
          width={340}
          height={340}
          autoPlay
          loop
          muted
          playsInline
          className="rounded"
        >
          foq it no working..
        </video>
        <br /><br /><br /><br />
        <pre className="text-sm text-left font-unifont max-w-sm" style={{ fontFamily: 'Unifont' }}>
          <p>i have been learning various things and playing board games in between. these are a few of my projects i&apos;ve been working on, some of which will be coming soon!</p>
          <br /><br />
          <p>board games</p>
          <ul>
            <li><span className="text-[#ea9ae5]">I</span>    (24) - didnt have node installed oops    [<a href="https://maisydeploys.vercel.app/" className="text-[#ea9ae5]">♡</a>]</li>
            <li><span className="text-[#ea9ae5]">II</span>   (24) - summer studies                    [<a href="https://m0412.netlify.app/" className="text-[#ea9ae5]">♡</a>]</li>
            <li><span className="text-[#ea9ae5]">III</span>  (24) - fall 2024 blog                    [<a href="https://awhmaisy.com" className="text-[#ea9ae5]">♡</a>]</li>
            <li><span className="text-[#ea9ae5]">IV</span>   (25) - ASCII tarot reader                [<a href="https://github.com/awhmaisy/gorthaur" className="text-[#ea9ae5]">♡</a>]</li>
            <li><span className="text-[#ea9ae5]">V</span>    (25) - engraved clip / muzzle guard      [<a href="https://awhmaisy.com" className="text-[#ea9ae5]">soon</a>]</li>
            <li><span className="text-[#ea9ae5]">VI</span>   (25) - target package tee                [<a href="https://awhmaisy.com" className="text-[#ea9ae5]">soon</a>]</li>
          </ul>
          <br /><br />
          <p>Links</p>
          <ul>
            <li><a href="https://twitter.com/awhmaisy" className="text-[#ea9ae5]">- X</a></li>
            <li><a href="https://github.com/awhmaisy" className="text-[#ea9ae5]">- gh</a></li>
            <li><a href="https://instagram.com/awhmaisy" className="text-[#ea9ae5]">- instagram</a></li>
            <li><a href="https://are.na/mei-higashi" className="text-[#ea9ae5]">- are.na</a></li>
          </ul>
        </pre>
      </main>
    </div>
  );
}