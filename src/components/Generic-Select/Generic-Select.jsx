import React from "react";
import "./Generic-Select.css";
export default function GenericSelect({
    options,
    value,
    onChange,
    placeholder,
    label,
    disabled = false,
}) {
    return (
        <div className="select-container">
            <label htmlFor="select-mark" className="select-label">{label} </label>
            <br />
            <select
                className="select"
                value={value}
                onChange={onChange}
                name="select-mark"
                disabled={disabled}
            >
                <option value="" disabled className="option-placeholder">
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option} value={option} className="option">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}