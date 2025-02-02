export default function GenericCheckbox({
    label,
    options,
}) {
    return (
        <div className="condition">
            <h6 className="generic-label">{label}</h6>
            {options.map((option) => (
                <label
                    key={option.id} // `key` no contêiner pai
                    htmlFor={`condition-${option.id}`}
                    className="container-checkbox"
                >
                    {option.label}
                    <input
                        type="checkbox"
                        name={`condition-${option.id}`}
                        id={`condition-${option.id}`}
                        value={option.value}
                        checked={option.checked} // Diretamente ligado ao estado
                        onChange={option.onChange} // Função de mudança
                        className="checkbox"
                    />
                    <span className="checkmark"></span>
                </label>
            ))}
        </div>
    );
}
