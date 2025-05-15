import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import StatesComponent from '../../../../common/StatesComponent';
import LgaComponents from '../../../../common/LgaComponents';
import TownComponent from '../../../../common/TownComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addPersonnel } from '../../../../apis/personnelActions';
import { AppContext } from '../../../../context/AppContext';
import { countIntegerDigits } from '../../../../apis/functions';

const InformationForm = ({ view }) => {

    const { token } = useContext(AppContext);
    const [saving, setSaving] = useState(false);
    const [residential_address, setResidential_address] = useState();
    const [residential_city, setResidential_city] = useState();
    const [phone_number, setPhone_number] = useState();
    const [title, setTitle] = useState();
    const [residential_state_id, setResidential_state_id] = useState();
    const [state_of_origin_id, setState_of_origin_id] = useState();
    const [residential_lga_id, setResidential_lga_id] = useState();
    const [town_unit_id, setTown_unit_id] = useState();
    const [date_of_birth, setDate_of_birth] = useState();
    const [nin, setNin] = useState();
    const [surname, setSurname] = useState();
    const [first_name, setFirst_name] = useState();
    const [marital_status, setMarital_status] = useState();
    const [middle_name, setMiddle_name] = useState();
    const [gender, setGender] = useState();
    const [has_health_challenges, setHas_health_challenges] = useState();
    const [health_challenges_details, setHealth_challenges_details] = useState();
    const [has_disabilities, setHas_disabilities] = useState();
    const [disabilities_details, setDisabilities_details] = useState();
    const [previously_incarcerated, setPreviously_incarcerated] = useState();
    const [incarceration_details, setIncarceration_details] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            residential_address, residential_city, phone_number, title, residential_state_id, state_of_origin_id, residential_lga_id, town_unit_id: 17, date_of_birth, nin, surname, first_name, marital_status, middle_name, gender, has_health_challenges, health_challenges_details, has_disabilities, disabilities_details, previously_incarcerated, incarceration_details, current_step: "contact_info", personnel_id: null
        }

        addPersonnel(token, data, setSuccess, setError, setSaving)
    }

    if(success){
        alert('Saving successful!')
    }

    useEffect(() => {
        if(countIntegerDigits(nin) > 11){
            alert('You cannot enter more than eleven figures!');
            setNin(Math.floor(nin / 10));
        }
    }, [nin])

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-extralight capitalize py-2 border-b border-gray-300 dark:border-gray-700 mb-4'>
            {view.replace("_", " ")}
            </h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <h2 className='w-full text-[#ffaa00] uppercase'>core identity</h2>
                    <input 
                        type='number'
                        value={nin}
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='NIN'
                        onChange={(e) => setNin(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Surname'
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='First name'
                        onChange={(e) => setFirst_name(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Middle name'
                        onChange={(e) => setMiddle_name(e.target.value)}
                    />
                    <div className='grid w-full md:w-[48%]'>
                        <span className={`${date_of_birth ? 'hidden' : 'block'} max-w-max bg-gray-100 dark:bg-gray-800 p-2 z-10 border-t border-l dark:border-gray-700 rounded-l-md text-gray-400`}>Date of birth</span>
                        <input 
                            type='date'
                            className={`${!date_of_birth && 'mt-[-40px]'} w-full p-2 rounded-md border dark:border-gray-700 bg-transparent`}
                            onChange={(e) => setDate_of_birth(e.target.value)}
                            required
                        />
                    </div>
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Gender</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="male">male</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="female">female</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="other">other</option>
                    </select>
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        onChange={(e) => setMarital_status(e.target.value)}
                        required
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Marital status</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="single">single</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="married">married</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="divorced">divorced</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="widowed">widowed</option>
                    </select>
                </div>

                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <h2 className='w-full text-[#ffaa00] uppercase'>contact & location</h2>
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Phone number'
                        onChange={(e) => setPhone_number(e.target.value)}
                        required
                    />
                    <StatesComponent setState={setResidential_state_id} placeholder='Select Residential state' />
                    <LgaComponents state_id={residential_state_id} setLga={setResidential_lga_id} placeholder='Select Residential LGA' />
                    <TownComponent lga_id={residential_lga_id} setTown={setTown_unit_id} placeholder='Select Town unit' />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Residential address'
                        onChange={(e) => setResidential_address(e.target.value)}
                        required
                    />
                    <input 
                        type='text'
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        placeholder='Residential city'
                        onChange={(e) => setResidential_city(e.target.value)}
                        required
                    />
                    <StatesComponent setState={setState_of_origin_id} placeholder='Select State of origin' />
                </div>

                <div className='w-full grid md:flex md:flex-wrap md:gap-4 space-y-4 md:space-y-0 items-center'>
                    <h2 className='w-full text-[#ffaa00] uppercase'>other information</h2>
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        onChange={(e) => setHas_health_challenges(e.target.value)}
                        required
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Any health challenge?</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="yes">yes</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="no">no</option>
                    </select>
                    {
                        has_health_challenges === "yes" &&
                        <textarea 
                            rows='2'
                            className='w-full md:w-[98%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                            placeholder='Detail of health challenge'
                            onChange={(e) => setHealth_challenges_details(e.target.value)}
                        ></textarea>
                    }
                    
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        onChange={(e) => setHas_disabilities(e.target.value)}
                        required
                    >
                        <option className='dark:bg-gray-800 dark:text-white' value="">Any disability?</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="yes">yes</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="no">no</option>
                    </select>
                    {
                        has_disabilities === "yes" && 
                        <textarea 
                            rows='2'
                            className='w-full md:w-[98%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                            placeholder='Detail of disability'
                            onChange={(e) => setDisabilities_details(e.target.value)}
                        ></textarea>
                    }
                    <select
                        className='w-full md:w-[48%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                        onChange={(e) => setPreviously_incarcerated(e.target.value)}
                        required
                    >
                        <option  className='dark:bg-gray-800 dark:text-white'value="">Been incarcerated?</option>
                        <option className='dark:bg-gray-800 dark:text-white' value="yes">yes</option>
                        <option  className='dark:bg-gray-800 dark:text-white'value="no">no</option>
                    </select>
                    {
                        previously_incarcerated === "yes" &&
                        <textarea 
                            rows='2'
                            className='w-full md:w-[98%] p-2 rounded-md border dark:border-gray-700 bg-transparent'
                            placeholder='Detail of incarceration'
                            onChange={(e) => setIncarceration_details(e.target.value)}
                        ></textarea>
                    }
                </div>
                <div className='pt-4'>
                    <button
                        className={`flex justify-center px-4 py-2 rounded-md bg-[#ffaa00] hover:bg-[#7a5b1e] text-black`}
                    >
                        {
                            saving ? 
                                <AiOutlineLoading3Quarters size={24} className='animate-spin' /> : 'Save and next'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InformationForm