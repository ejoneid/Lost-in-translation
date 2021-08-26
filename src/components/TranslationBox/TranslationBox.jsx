
const TranslationBox = props => {
    const { toTranslate } = props;

    return (
        <div>
            { toTranslate.split('').map((char, index) => (
                <img src={`./individial_signs/${char}.png`} alt={char} key={index} ></img>
            )) }
        </div>
    )
}

export default TranslationBox