import { useEffect, useRef, useState } from 'react';

 const SliderBar = (props:any) => {
    const {setValue} = props
    const [percentValue, setPercent] = useState<any>(0);
    const sliderInputRef: any = useRef(null);
    useEffect(() => {
        const sliderInput: any = document.querySelector('.input-slider');

        const handleInputChange = () => {
            const { value, min, max } = sliderInput;
            const calculatedPercent = ((value - min) / (max - min)) * 100;
            setPercent(calculatedPercent);
            setValue(calculatedPercent)
        };

        sliderInput.addEventListener('input', handleInputChange);
        return () => {
            sliderInput.removeEventListener('input', handleInputChange);
        };
    }, []);
    return (
        <fieldset className="slider-container">
            <input
                ref={sliderInputRef}
                type="range"
                id="input-slider"
                className="input-slider"
                min="0"
                max="100"
                step="1"
                value={percentValue}
            ></input>
        </fieldset>
    );
};
export default SliderBar;