export default function Home() {
  return (
    <div className="fixed top-16 w-full  h-screen">
      <div className="w-full h-full ">
        {/* 总结下跑马灯： 父元素 */}
        <div className="carousel">
          <div className="group">
            <div className="card">A1</div>
            <div className="card">B</div>
            <div className="card">C</div>
            <div className="card">D</div>
            <div className="card">E</div>
          </div>
          <div aria-hidden className="group">
            <div className="card">A22</div>
            <div className="card">B</div>
            <div className="card">Cdd</div>
            <div className="card">D</div>
            <div className="card">E</div>
          </div>
        </div>

        <div className="carousel">
          <div className="group2">
            <div className="card">A1</div>
            <div className="card">B</div>
            <div className="card">C</div>
            <div className="card">D</div>
            <div className="card">E</div>
          </div>
          <div aria-hidden className="group2">
            <div className="card">A22</div>
            <div className="card">B</div>
            <div className="card">Cdd</div>
            <div className="card">D</div>
            <div className="card">E</div>
          </div>
        </div>
      </div>
    </div>
  );
}
