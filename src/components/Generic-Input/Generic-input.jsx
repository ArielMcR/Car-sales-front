import './Generic-input.css';
import { useState } from 'react';

export default function GenericInput({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    exemple,
    mask = false,
    theme = 'dark',
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(
        mask ? formatCurrency(value || '') : value
    );

    function formatCurrency(val) {
        if (!val) return '';
        val = val.toString().replace(/\D/g, '');
        val = (val / 100).toFixed(2);
        val = val.replace('.', ',');
        val = val.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `R$ ${val}`;
    };

    const handleInputChange = (e) => {
        let val = e.target.value;

        if (mask) {
            val = val.replace(/\D/g, '');
            const formatted = formatCurrency(val);
            setInputValue(formatted);
            onChange({ ...e, target: { ...e.target, value: val } });
        } else {
            setInputValue(val);
            onChange(e);
        }
    };

    return (
        <div className={`input-container-${theme.trim() !== 'dark' ? 'light' : 'dark'}`}>
            {type === 'textarea' ? (
                <>
                    <textarea
                        id='input-textarea'
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="input-textarea"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(value.length > 0)}
                    />
                    <label htmlFor="input-textarea" className={`${value.length > 0 ? 'label-text-area' : 'label-text-deactivate'}`}>{label}</label>
                </>
            ) : (
                <>
                    <input
                        id='input'
                        type={type}
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                    />
                    <label htmlFor="input" className='label-input'>{label}</label>
                    <h1 className={`${theme != "dark" ? "example-light" : "example"}`}>Ex.: {exemple}</h1>
                </>
            )}
        </div>
    );
}
