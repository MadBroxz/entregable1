// import "./styles/QuoteBox.css"

// const QuoteBox = ({ quote, handleChangeQuote }) => {

//     const { phrase, author } = quote;

//     return (

//     <article className="quotebox">
//         <h1 className="q__title">INFOGALAX</h1>
//             <div className="q__box">
//                 <p>{phrase}</p>
//             <button className="q__btn" onClick={handleChangeQuote}>Random</button>
//             </div>
//             <span className="q__author"> {author} </span>
//     </article>

// )
// };
// export default QuoteBox;

import "./styles/QuoteBox.css";

    const QuoteBox = ({ quote, handleChangeQuote, currentPlanet }) => {
    const { phrase, author} = quote;

    return (
        <article className="quotebox">
    <div className="container">
        <h1 className="q__title">INFOGALAX</h1>
            <div className="q__box">
                <div className="q__overlay">
                    <div className="q__text">
                        <p>{phrase}</p>
                    </div>
                </div>
            </div>
        <button className="q__btn" onClick={handleChangeQuote}>
            <img src="/Btn.png" alt="Btn" />
        </button>
    </div>
        <img className="planet" src={`/${currentPlanet}.png`} alt="" />
        <span className="q__author"> {author} </span>
        </article>
    );
    };

export default QuoteBox;
