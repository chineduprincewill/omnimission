import React from 'react'
import BankDetailForm from './forms/BankDetailForm'
import InformationForm from './forms/InformationForm'
import JobExperienceForm from './forms/JobExperienceForm'
import NextofKinForm from './forms/NextofKinForm'
import RefereesForm from './forms/RefereesForm'
import BiometricDataForm from './forms/BiometricDataForm'
import PersonnelPhotosForm from './forms/PersonnelPhotosForm'
import QualificationsForm from './forms/QualificationsForm'

const PersonnelForms = ({ view, setView }) => {

    return (
        <div className='pl-2 pt-1 md:pt-2 md:pl-8'>
        {view === 'personnel_information' && <InformationForm view={view} />}
        {view === 'job_experience' && <JobExperienceForm view={view} setView={setView} />}
        {view === 'bank_detail' && <BankDetailForm view={view} />}
        {view === 'next_of_kin' && <NextofKinForm view={view} />}
        {view === 'referees' && <RefereesForm view={view} setView={setView} />}
        {view === 'biometric_data' && <BiometricDataForm view={view} setView={setView} />}
        {view === 'personnel_photos' && <PersonnelPhotosForm view={view} setView={setView} />}
        {view === 'qualifications' && <QualificationsForm view={view} setView={setView} />}
        </div>
    )
}

export default PersonnelForms