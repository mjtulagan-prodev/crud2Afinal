import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [houseBlockLotNo, setHouseBlockLotNo] = useState('');
    const [street, setStreet] = useState('');
    const [subdivisionVillage, setSubdivisionVillage] = useState('');
    const [barangay, setBarangay] = useState('');
    const [cityMunicipality, setCityMunicipality] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [residentialAddress, setResidentialAddress] = useState('');
    const [permHouseBlockLotNo, setPermHouseBlockLotNo] = useState('');
    const [permStreet, setPermStreet] = useState('');
    const [permSubdivisionVillage, setPermSubdivisionVillage] = useState('');
    const [permBarangay, setPermBarangay] = useState('');
    const [permCityMunicipality, setPermCityMunicipality] = useState('');
    const [permProvince, setPermProvince] = useState('');
    const [permAddress, setPermAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodtype, setBloodtype] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [gsisIdNo, setGsisIdNo] = useState('');
    const [pagibigIdNo, setPagibigIdNo] = useState('');
    const [philhealthNo, setPhilhealthNo] = useState('');
    const [sssNo, setSssNo] = useState('');
    const [tinNo, setTinNo] = useState('');
    const [agencyEmployeeNo, setAgencyEmployeeNo] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [telephoneNo, setTelephoneNo] = useState('');
    const [spouseSurname, setSpouseSurname] = useState('');
    const [spouseFirstName, setSpouseFirstName] = useState('');
    const [spouseMiddleName, setSpouseMiddleName] = useState('');
    const [spouseOccupation, setSpouseOccupation] = useState('');
    const [spouseEmployerBusinessName, setSpouseEmployerBusinessName] = useState('');
    const [spouseBusinessAddress, setSpouseBusinessAddress] = useState('');
    const [spouseTelephoneNo, setSpouseTelephoneNo] = useState('');
    const [childrenNames, setChildrenNames] = useState('');
    const [childrenDateOfBirth, setChildrenDateOfBirth] = useState('');
    const [fatherSurname, setFatherSurname] = useState('');
    const [fatherFirstName, setFatherFirstName] = useState('');
    const [fatherMiddleName, setFatherMiddleName] = useState('');
    const [motherMaidenSurname, setMotherMaidenSurname] = useState('');
    const [motherMaidenFirstName, setMotherMaidenFirstName] = useState('');
    const [motherMaidenMiddleName, setMotherMaidenMiddleName] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setHouseBlockLotNo(item.house_block_lot_no);
            setStreet(item.street);
            setSubdivisionVillage(item.subdivision_village);
            setBarangay(item.barangay);
            setCityMunicipality(item.city_municipality);
            setProvince(item.province);
            setZipcode(item.zipcode);
            setResidentialAddress(item.residential_address);
            setPermHouseBlockLotNo(item.perm_house_block_lot_no);
            setPermStreet(item.perm_street);
            setPermSubdivisionVillage(item.perm_subdivision_village);
            setPermBarangay(item.perm_barangay);
            setPermCityMunicipality(item.perm_city_municipality);
            setPermProvince(item.perm_province);
            setPermAddress(item.perm_address);
            setEmail(item.email);
            setPhone(item.phone);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodtype(item.bloodtype);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setGsisIdNo(item.gsis_id_no);
            setPagibigIdNo(item.pagibig_id_no);
            setPhilhealthNo(item.philhealth_no);
            setSssNo(item.sss_no);
            setTinNo(item.tin_no);
            setAgencyEmployeeNo(item.agency_employee_no);
            setCitizenship(item.citizenship);
            setTelephoneNo(item.telephone_no);
            setSpouseSurname(item.spouse_surname);
            setSpouseFirstName(item.spouse_first_name);
            setSpouseMiddleName(item.spouse_middle_name);
            setSpouseOccupation(item.spouse_occupation);
            setSpouseEmployerBusinessName(item.spouse_employer_business_name);
            setSpouseBusinessAddress(item.spouse_business_address);
            setSpouseTelephoneNo(item.spouse_telephone_no);
            setChildrenNames(item.children_names);
            setChildrenDateOfBirth(item.children_date_of_birth);
            setFatherSurname(item.father_surname);
            setFatherFirstName(item.father_first_name);
            setFatherMiddleName(item.father_middle_name);
            setMotherMaidenSurname(item.mother_maiden_surname);
            setMotherMaidenFirstName(item.mother_maiden_first_name);
            setMotherMaidenMiddleName(item.mother_maiden_middle_name);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            house_block_lot_no: houseBlockLotNo,
            street,
            subdivision_village: subdivisionVillage,
            barangay,
            city_municipality: cityMunicipality,
            province,
            zipcode,
            residential_address: residentialAddress,
            perm_house_block_lot_no: permHouseBlockLotNo,
            perm_street: permStreet,
            perm_subdivision_village: permSubdivisionVillage,
            perm_barangay: permBarangay,
            perm_city_municipality: permCityMunicipality,
            perm_province: permProvince,
            perm_address: permAddress,
            email,
            phone,
            height,
            weight,
            bloodtype,
            date_of_birth: dateOfBirth,
            place_of_birth: placeOfBirth,
            sex,
            civil_status: civilStatus,
            gsis_id_no: gsisIdNo,
            pagibig_id_no: pagibigIdNo,
            philhealth_no: philhealthNo,
            sss_no: sssNo,
            tin_no: tinNo,
            agency_employee_no: agencyEmployeeNo,
            citizenship: citizenship,
            telephone_no: telephoneNo,
            spouse_surname: spouseSurname,
            spouse_first_name: spouseFirstName,
            spouse_middle_name: spouseMiddleName,
            spouse_occupation: spouseOccupation,
            spouse_employer_business_name: spouseEmployerBusinessName,
            spouse_business_address: spouseBusinessAddress,
            spouse_telephone_no: spouseTelephoneNo,
            children_names: childrenNames,
            children_date_of_birth: childrenDateOfBirth,
            father_surname: fatherSurname,
            father_first_name: fatherFirstName,
            father_middle_name: fatherMiddleName,
            mother_maiden_surname: motherMaidenSurname,
            mother_maiden_first_name: motherMaidenFirstName,
            mother_maiden_middle_name: motherMaidenMiddleName
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post(`http://localhost:8000/api/items/`, data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    const styles = {
    formContainer: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#00A36C'
        
    },
    formGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        backgroundColor: '#005A9C',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
    
};

    return (
        <form onSubmit={handleSubmit} style={styles.formContainer}>
            <div style={styles.formGroup}>
                <h2>PERSONAL DATA INFORMATIONS</h2>
                <label style={styles.label}>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>House Block Lot No:</label>
                <input type="text" value={houseBlockLotNo} onChange={(e) => setHouseBlockLotNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Street:</label>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Subdivision Village:</label>
                <input type="text" value={subdivisionVillage} onChange={(e) => setSubdivisionVillage(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Barangay:</label>
                <input type="text" value={barangay} onChange={(e) => setBarangay(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>City Municipality:</label>
                <input type="text" value={cityMunicipality} onChange={(e) => setCityMunicipality(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Province:</label>
                <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Zipcode:</label>
                <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Residential Address:</label>
                <input type="text" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Permanent House Block Lot No:</label>
                <input type="text" value={permHouseBlockLotNo} onChange={(e) => setPermHouseBlockLotNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Permanent Street:</label>
                <input type="text" value={permStreet} onChange={(e) => setPermStreet(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Permanent Subdivision Village:</label>
                <input type="text" value={permSubdivisionVillage} onChange={(e) => setPermSubdivisionVillage(e.target.value)} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Permanent Barangay:</label>
                <input type="text" value={permBarangay} onChange={(e) => setPermBarangay(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Permanent City Municipality:</label>
                <input type="text" value={permCityMunicipality} onChange={(e) => setPermCityMunicipality(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Permanent Province:</label>
                <input type="text" value={permProvince} onChange={(e) => setPermProvince(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Permanent Address:</label>
                <input type="text" value={permAddress} onChange={(e) => setPermAddress(e.target.value)} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Height:</label>
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Weight:</label>
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>Blood Type:</label>
                <input type="text" value={bloodtype} onChange={(e) => setBloodtype(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Place of Birth:</label>
                <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Civil Status:</label>
                <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>GSIS ID No:</label>
                <input type="text" value={gsisIdNo} onChange={(e) => setGsisIdNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Pag-IBIG ID No:</label>
                <input type="text" value={pagibigIdNo} onChange={(e) => setPagibigIdNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>PhilHealth No:</label>
                <input type="text" value={philhealthNo} onChange={(e) => setPhilhealthNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>SSS No:</label>
                <input type="text" value={sssNo} onChange={(e) => setSssNo(e.target.value)} style={styles.input} />
            </div>

            <div style={styles.formGroup}>
                <label style={styles.label}>TIN No:</label>
                <input type="text" value={tinNo} onChange={(e) => setTinNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Agency Employee No:</label>
                <input type="text" value={agencyEmployeeNo} onChange={(e) => setAgencyEmployeeNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Telephone No:</label>
                <input type="text" value={telephoneNo} onChange={(e) => setTelephoneNo(e.target.value)} style={styles.input} />
            </div>
            <h1>Family Background</h1>
            <div style={styles.formGroup}>
                <label style={styles.label}>Spouse Surname:</label>
                <input type="text" value={spouseSurname} onChange={(e) => setSpouseSurname(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Spouse First Name:</label>
                <input type="text" value={spouseFirstName} onChange={(e) => setSpouseFirstName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Spouse Middle Name:</label>
                <input type="text" value={spouseMiddleName} onChange={(e) => setSpouseMiddleName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Spouse Occupation:</label>
                <input type="text" value={spouseOccupation} onChange={(e) => setSpouseOccupation(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Spouse Employer Business Name:</label>
                <input type="text" value={spouseEmployerBusinessName} onChange={(e) => setSpouseEmployerBusinessName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Spouse Business Address:</label>
                <input type="text" value={spouseBusinessAddress} onChange={(e) => setSpouseBusinessAddress(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Spouse Telephone No:</label>
                <input type="text" value={spouseTelephoneNo} onChange={(e) => setSpouseTelephoneNo(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Children Names:</label>
                <input type="text" value={childrenNames} onChange={(e) => setChildrenNames(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Children Date of Birth:</label>
                <input type="text" value={childrenDateOfBirth} onChange={(e) => setChildrenDateOfBirth(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Father Surname:</label>
                <input type="text" value={fatherSurname} onChange={(e) => setFatherSurname(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Father First Name:</label>
                <input type="text" value={fatherFirstName} onChange={(e) => setFatherFirstName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Father Middle Name:</label>
                <input type="text" value={fatherMiddleName} onChange={(e) => setFatherMiddleName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Mother Maiden Surname:</label>
                <input type="text" value={motherMaidenSurname} onChange={(e) => setMotherMaidenSurname(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Mother Maiden First Name:</label>
                <input type="text" value={motherMaidenFirstName} onChange={(e) => setMotherMaidenFirstName(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label style={styles.label}>Mother Maiden Middle Name:</label>
                <input type="text" value={motherMaidenMiddleName} onChange={(e) => setMotherMaidenMiddleName(e.target.value)} style={styles.input} />
            </div>

            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
};

export default ItemForm;
