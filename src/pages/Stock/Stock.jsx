import { useState, useEffect, useRef } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import searchIcon from '../../assets/search.svg';
import filter_active from '../../assets/filter_1.svg';
import filter_deactivate from '../../assets/filter_2.svg';
import './Stock.css';
import carros from "../../data/FakeData"
import Generic_card from '../../components/Generic-card/Generic-card';
import GenericSelect from '../../components/Generic-Select/Generic-Select';
import GenericChoice from '../../components/Generic-choice/Generic-choice';
import GenericInput from '../../components/Generic-Input/Generic-input';
import GenericCheckbox from '../../components/Generic-checkbox/Generic-checkbox';
import notFound from '../../assets/not-found.svg';
export default function Stock() {
    const [search, setSearch] = useState('');
    const [filteredCarros, setFilteredCarros] = useState([]);
    const [filterActive, setFilterActive] = useState(false);
    const [filters, setFilters] = useState({
        mark: '',
        model: '',
        motor: '',
        trade: '',
        condition: '',
        yearMin: '',
        yearMax: '',
        minPrice: '',
        maxPrice: '',
        minKilometers: '',
        maxKilometers: '',
        color: '',
        transmission: {
            manual: false,
            automatic: false,
            semiAutomatic: false,
            automatized: false,
        },
        direction: {
            hydraulic: false,
            electric: false,
            mechanical: false,
            electroHydraulic: false,
        },
        fuel: {
            gasoline: false,
            alcohol: false,
            diesel: false,
            flex: false,
            electrical: false,
            hybrid: false,
        },
        bodywork: {
            bugy: false,
            wagon: false,
            suv: false,
            sedan: false,
            hatch: false,
            coupe: false,
            pickup: false,
        },
        blindage: '',
    });

    const marks = [
        'Mercedes-Benz',
        'audi',
        'bmw',
        'mc laren',
        'ferrari',
        'lamborguini',
        'porsche',
        'Volvo'
    ]
    const models = [
        {
            mark: 'Mercedes-Benz',
            models: [
                'Todos',
                'classe a',
                'C 63 AMG',
                'S 450'
            ],
        }
    ]
    const motors = [
        '1.0',
        '1.4',
        '1.6',
        '2.0',
        '3.0',
        '4.0',
        'V6',
        'V8',

    ]
    const colorsModel = [
        'Preto',
        'Branco',
        'Cinza',
        'Prata',
        'Vermelho',
        'Azul',
        'Verde',
        'Amarelo',
        'Rosa',
        'Laranja',
        'Marrom',
    ]
    const transmission_type = [
        {
            id: 'transmission-1',
            label: 'Manual',
            value: 'manual',
            checked: filters.transmission.manual,
            onChange: (e) => updateCheckboxFilter('transmission', 'manual', e.target.checked),
        },
        {
            id: 'transmission-2',
            label: 'Automático',
            value: 'automatic',
            checked: filters.transmission.automatic,
            onChange: (e) => updateCheckboxFilter('transmission', 'automatic', e.target.checked),
        },
        {
            id: 'transmission-3',
            label: 'Semi-automático',
            value: 'semiAutomatic',
            checked: filters.transmission.semiAutomatic,
            onChange: (e) => updateCheckboxFilter('transmission', 'semiAutomatic', e.target.checked),
        },
        {
            id: 'transmission-4',
            label: 'Automatizado',
            value: 'automatized',
            checked: filters.transmission.automatized,
            onChange: (e) => updateCheckboxFilter('transmission', 'automatized', e.target.checked),
        },
    ];
    const direction_type = [
        {
            id: 'direction-1',
            label: 'Hidráulica',
            value: 'hydraulic',
            checked: filters.direction.hydraulic,
            onChange: (e) => updateCheckboxFilter('direction', 'hydraulic', e.target.checked),
        },
        {
            id: 'direction-2',
            label: 'Elétrica',
            value: 'electric',
            checked: filters.direction.electric,
            onChange: (e) => updateCheckboxFilter('direction', 'electric', e.target.checked),
        },
        {
            id: 'direction-3',
            label: 'Mecânica',
            value: 'mechanical',
            checked: filters.direction.mechanical,
            onChange: (e) => updateCheckboxFilter('direction', 'mechanical', e.target.checked),
        },
        {
            id: 'direction-4',
            label: 'Eletro-hidráulica',
            value: 'electro-hydraulic',
            checked: filters.direction.electroHydraulic,
            onChange: (e) => updateCheckboxFilter('direction', 'electroHydraulic', e.target.checked),
        },
    ];
    const fuel_type = [
        {
            id: 'fuel-1',
            label: 'Gasolina',
            value: 'gasoline',
            checked: filters.fuel.gasoline,
            onChange: (e) => updateCheckboxFilter('fuel', 'gasoline', e.target.checked),
        },
        {
            id: 'fuel-2',
            label: 'Álcool',
            value: 'alcohol',
            checked: filters.fuel.alcohol,
            onChange: (e) => updateCheckboxFilter('fuel', 'alcohol', e.target.checked),
        },
        {
            id: 'fuel-3',
            label: 'Diesel',
            value: 'diesel',
            checked: filters.fuel.diesel,
            onChange: (e) => updateCheckboxFilter('fuel', 'diesel', e.target.checked),
        },
        {
            id: 'fuel-4',
            label: 'Flex',
            value: 'flex',
            checked: filters.fuel.flex,
            onChange: (e) => updateCheckboxFilter('fuel', 'flex', e.target.checked),
        },
        {
            id: 'fuel-5',
            label: 'Elétrico',
            value: 'electrical',
            checked: filters.fuel.electrical,
            onChange: (e) => updateCheckboxFilter('fuel', 'electrical', e.target.checked),
        },
        {
            id: 'fuel-6',
            label: 'Híbrido',
            value: 'hybrid',
            checked: filters.fuel.hybrid,
            onChange: (e) => updateCheckboxFilter('fuel', 'hybrid', e.target.checked),
        },
    ];
    const bodywork_type = [
        {
            id: 'bodywork-1',
            label: 'Bugy',
            value: 'bugy',
            checked: filters.bodywork.bugy,
            onChange: (e) => updateCheckboxFilter('bodywork', 'bugy', e.target.checked),
        },
        {
            id: 'bodywork-2',
            label: 'Perua',
            value: 'wagon',
            checked: filters.bodywork.wagon,
            onChange: (e) => updateCheckboxFilter('bodywork', 'wagon', e.target.checked),
        },
        {
            id: 'bodywork-3',
            label: 'SUV',
            value: 'suv',
            checked: filters.bodywork.suv,
            onChange: (e) => updateCheckboxFilter('bodywork', 'suv', e.target.checked),
        },
        {
            id: 'bodywork-4',
            label: 'Sedã',
            value: 'sedan',
            checked: filters.bodywork.sedan,
            onChange: (e) => updateCheckboxFilter('bodywork', 'sedan', e.target.checked),
        },
        {
            id: 'bodywork-5',
            label: 'Hatch',
            value: 'hatch',
            checked: filters.bodywork.hatch,
            onChange: (e) => updateCheckboxFilter('bodywork', 'hatch', e.target.checked),
        },
        {
            id: 'bodywork-6',
            label: 'Coupé',
            value: 'coupe',
            checked: filters.bodywork.coupe,
            onChange: (e) => updateCheckboxFilter('bodywork', 'coupe', e.target.checked),
        },
        {
            id: 'bodywork-7',
            label: 'Pick-up',
            value: 'pickup',
            checked: filters.bodywork.pickup,
            onChange: (e) => updateCheckboxFilter('bodywork', 'pickup', e.target.checked),
        },
    ];
    const cleanFields = () => {
        setFilters({
            mark: '',
            model: '',
            motor: '',
            trade: '',
            condition: '',
            yearMin: '',
            yearMax: '',
            minPrice: '',
            maxPrice: '',
            minKilometers: '',
            maxKilometers: '',
            colors: '',
            transmission: {
                manual: false,
                automatic: false,
                semiAutomatic: false,
                automatized: false,
            },
            direction: {
                hydraulic: false,
                electric: false,
                mechanical: false,
                electroHydraulic: false,
            },
            fuel: {
                gasoline: false,
                alcohol: false,
                diesel: false,
                flex: false,
                electrical: false,
                hybrid: false,
            },
            bodywork: {
                bugy: false,
                wagon: false,
                suv: false,
                sedan: false,
                hatch: false,
                coupe: false,
                pickup: false,
            },
            blindage: '',
        })
    }
    useEffect(() => {
        console.log('Entrou no filters');
        console.log("Com eses valores");
        console.log(filters);
        const filtered = carros.filter(carro => {
            const transmissionSelected = Object.keys(filters.transmission).some(key => filters.transmission[key] && carro.transmission === key);
            const fuelSelected = Object.keys(filters.fuel).some(key => filters.fuel[key] && carro.fuel === key);
            const bodyworkSelected = Object.keys(filters.bodywork).some(key => filters.bodywork[key] && carro.bodywork === key);
            const directionSelected = Object.keys(filters.direction).some(key => filters.direction[key] && carro.direction === key);
            return (
                (!filters.mark || carro.mark === filters.mark) &&
                (!filters.model || filters.model.toLowerCase() === "todos" || carro.model.toLowerCase().trim() === filters.model.toLowerCase().trim()) &&
                (!filters.minPrice || carro.price >= filters.minPrice) &&
                (!filters.maxPrice || carro.price <= filters.maxPrice) &&
                (!filters.yearMin || carro.year >= filters.yearMin) &&
                (!filters.yearMax || carro.year <= filters.yearMax) &&
                (!filters.minKilometers || carro.kilometers >= filters.minKilometers) &&
                (!filters.maxKilometers || carro.kilometers <= filters.maxKilometers) &&
                (!filters.color || carro.color === filters.color) &&
                (!filters.motor || carro.motor === filters.motor) &&
                (!filters.condition || carro.condition === filters.condition) &&
                (!filters.trade || carro.trade === filters.trade) &&
                (!filters.blindage || carro.blindage === filters.blindage) &&
                (Object.values(filters.transmission).every(v => !v) || transmissionSelected) &&
                (Object.values(filters.fuel).every(v => !v) || fuelSelected) &&
                (Object.values(filters.bodywork).every(v => !v) || bodyworkSelected) &&
                (Object.values(filters.direction).every(v => !v) || directionSelected)
            );
        });
        setFilteredCarros(filtered);
    }, [filters, carros]);


    const updateCheckboxFilter = (category, key, checked) => {
        setFilters(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [key]: checked,
            },
        }));
    };
    const updateFilter = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <>

            <Header />
            <div className="container-stock ">
                <div className="filter-opening-mobile">
                    <button className='filter-button' onClick={() => setFilterActive(!filterActive)}>
                        {filterActive ?
                            <>
                                <img src={filter_deactivate} alt="" className='filter-icon' />
                                <span>
                                    Desativar os filtros
                                </span>
                            </>
                            : <>
                                <img src={filter_active} alt="" className='filter-icon' />
                                <span>
                                    Ativar Filtros
                                </span>
                            </>
                        }
                    </button>
                </div>
                <div className={`left-side-stock  ${!filterActive ? 'deactivate-filter' : ''}`} >
                    <h1 className={`title-filters`}>
                        Filtros
                        <div className="filters">
                            <GenericSelect label={'Selecione uma marca'} placeholder={'Todas as Marcas'} value={filters.mark} onChange={(e) => updateFilter('mark', e.target.value)} options={marks} />
                            <GenericSelect label={'Selecione um modelo'} disabled={!marks} placeholder={'Todos os modelos'} value={filters.model} onChange={(e) => updateFilter('model', e.target.value)} options={
                                models.find((item) => item.mark === filters.mark)?.models || []
                            } />
                            <GenericSelect label={'Selecione um motor'} placeholder={'Todos os motores'} value={filters.motor} onChange={(e) => updateFilter('motor', e.target.value)} options={
                                motors
                            } />
                            <GenericChoice label={'Aceita troca ?'} value={filters.trade} onChange={() => updateFilter('trade', !filters.trade)} />
                            <div className="condition">
                                <h6 className='generic-label'>Condição</h6>
                                <div className="container-condition">
                                    <div className="left-side-condition">
                                        <label htmlFor="condition-car-new" className="container-checkbox">
                                            Novo
                                            <input
                                                type="checkbox"
                                                name="condition-car-new"
                                                id="condition-car-new"
                                                checked={filters.condition === 'novo'}
                                                onChange={(e) => updateFilter('condition', e.target.checked ? 'novo' : '')}
                                                className="checkbox"
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="right-side-condition">
                                        <label htmlFor="condition-car-used" className="container-checkbox">
                                            Usado
                                            <input
                                                type="checkbox"
                                                name="condition-car-used"
                                                id="condition-car-used"
                                                checked={filters.condition === 'usado'}
                                                onChange={(e) => updateFilter('condition', e.target.checked ? 'usado' : '')}
                                                className="checkbox"
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <h6 className="generic-label">Ano</h6>
                            <div className="generic-container">
                                <GenericInput label={'de'} exemple={2024} type={'number'} value={filters.yearMin} onChange={(e) => updateFilter('yearMin', e.target.value)} placeholder={'Ano'} />
                                <GenericInput label={'Até'} exemple={2026} type={'number'} value={filters.yearMax} onChange={(e) => updateFilter('yearMax', e.target.value)} placeholder={'Ano'} />
                            </div>
                            <h6 className="generic-label">Price</h6>
                            <div className="generic-container">
                                <GenericInput label={'de'} mask={true} exemple={"R$ 2000,00"} type={'text'} value={filters.minPrice} onChange={(e) => updateFilter('minPrice', e.target.value)} placeholder={'Price'} />
                                <GenericInput label={'Até'} mask={true} exemple={"R$ 2000,00"} type={'text'} value={filters.maxPrice} onChange={(e) => updateFilter('maxPrice', e.target.value)} placeholder={'Price'} />
                            </div>
                            <h6 className="generic-label">Kilometros</h6>
                            <div className="generic-container">
                                <GenericInput label={'de'} exemple={"200"} type={'number'} value={filters.minKilometers} onChange={(e) => updateFilter('minKilometers', e.target.value)} placeholder={'KM'} />
                                <GenericInput label={'Até'} exemple={"1000"} type={'number'} value={filters.maxKilometers} onChange={(e) => updateFilter('maxKilometers', e.target.value)} placeholder={'KM'} />
                            </div>
                            <GenericSelect label={'Selecione uma cor'} placeholder={'Todos as cores'} value={filters.color} onChange={(e) => updateFilter('color', e.target.value)} options={
                                colorsModel
                            } />
                            <GenericCheckbox label={'Câmbio'} options={transmission_type} />
                            <GenericCheckbox label={'Direção'} options={direction_type} />
                            <GenericCheckbox label={'Combustível'} options={fuel_type} />
                            <GenericCheckbox label={'Carroceria'} options={bodywork_type} />
                            <GenericChoice label={'Blindagem ?'} value={filters.blindage}
                                onChange={() => updateFilter('blindage', !filters.blindage)} />
                            <button className='button-clean-field' onClick={cleanFields}>
                                Limpar Filtros
                            </button>
                        </div>
                    </h1>
                </div>
                <div className="right-side-stock">
                    <div className="container-search">
                        <input type="text"
                            className='input-search'
                            placeholder="Pesquisar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className='button-search'>
                            <img src={searchIcon} alt="" className='search-icon' />
                        </button>
                    </div>
                    {
                        filteredCarros.length === 0 ?
                            <div className="not-found-container">
                                <img src={notFound} alt="" className='not-found-image' />
                                <h1 className='not-found-text'>Nenhum carro encontrado</h1>
                                <p className="not-found-description">
                                    Não encontramos nenhum carro com base nos filtros selecionados, tente novamente com outros filtros ou sem filtros.
                                </p>
                            </div>
                            :
                            <div className="cards-stock">
                                {
                                    filteredCarros.map((carro, index) => (
                                        <Generic_card id={carro.id} key={carro.id} model={carro.model} imgs={carro.imgs} mark={carro.mark} price={carro.price} bodywork={carro.bodywork} traction={carro.traction} year={carro.year} kilometers={carro.kilometers} isStock={true} />
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}