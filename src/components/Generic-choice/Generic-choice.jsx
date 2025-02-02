import React from 'react';
import './Generic-choice.css';
export default function GenericChoice({
    label,
    onChange,
    value,
}
) {
    return (
        <div className="choice">
            <h6 className="generic-label">{label}</h6>
            <div className="container-choice">
                <div className="right-side-choice">
                    {value === true &&
                        (
                            <>
                                <button className="button-choice-true" onClick={onChange}>Sim</button>
                                <button className="button-choice" onClick={onChange}>Não</button>
                            </>

                        )
                    }
                    {value === false && (
                        <>
                            <button className="button-choice" onClick={onChange}>Sim</button>
                            <button className="button-choice-false" onClick={onChange}>Não</button>
                        </>
                    )}
                    {value === '' && (
                        <>
                            <button className="button-choice" onClick={onChange}>Sim</button>
                            <button className="button-choice" onClick={onChange}>Não</button>
                        </>
                    )
                    }
                </div>
            </div>
        </div>
    )
}