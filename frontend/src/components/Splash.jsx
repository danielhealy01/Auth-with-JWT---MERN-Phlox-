import './splash.css'

export default function Splash() {
    return (
      <>
        <div className="gridContainer">
          <div className="grid">
            <div className="gridItem1">
              <p className="explain">Explain To You How All This</p>
              <h1>
                <span className="whiteSpan">Business Value Through </span>
                <span className="redSpan">Digital Products</span>
              </h1>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <p className="button">Show More</p>
            </div>
            <div className="gridItem2">
              <div className="photoBackground"></div>
              <div className="photo"></div>
            </div>
          </div>
        </div>
        <div className="hi">hi</div>
      </>
    );
}
