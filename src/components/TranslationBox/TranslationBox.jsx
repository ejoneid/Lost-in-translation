import './TranslationBox.css'

const TranslationBox = props => {
    const { toTranslate } = props;

    return (
        <div id="translationDiv">
            { toTranslate.split('').map((char, index) => (
                <img src={`./individial_signs/${char}.png`} alt={char} key={index} ></img>
            )) }
        </div>
    )
}

export default TranslationBox