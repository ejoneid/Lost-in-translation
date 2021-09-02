import "./TranslationBox.css";

const TranslationBox = (props) => {
    const { toTranslate } = props;

    return (
        <div id="translationDiv">
            {toTranslate.split(" ").map((word, wordIndex) => (
                <div className="wordDiv" key={wordIndex}>
                    {word.split("").map((char, charIndex) => (
                        <img
                            src={`./individial_signs/${char}.png`}
                            alt={char}
                            key={charIndex}
                        ></img>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TranslationBox;
