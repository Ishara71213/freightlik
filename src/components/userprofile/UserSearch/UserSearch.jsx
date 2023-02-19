import "./UserSearch.css";
import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";

export const UserSearch = () => {
  const [countries, setCountries] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const [countryIndex, setCountryIndex] = useState(0);

  const [searchData, setSearchData] = useState({
    userName: "",
    country: "",
    city: "",
  });

  // const userCollectionRef=collection(db, 'users')

  useEffect(() => {
    async function fetchCountries() {
      try {
        const resCountry = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const resCountries = await resCountry.json();
        setCountries(await resCountries.data);
        setDataStatus(true);
      } catch (err) {
        console.log(err);
      }
    }
    console.log("use effect running");
    fetchCountries();
  }, []);
  //search from data base

  // useEffect(()=>{

  //   const getUsers= async()=>{
  //     const data = await getDocs(userCollectionRef);
  //     setSearchData(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
  //   }
  // },[])

  console.log(setSearchData);

  const handleDropDownChangeCity = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };
  const handleDropDownChangeCont = (e) => {
    const countryValue = countries[e.target.value].country;
    setSearchData({ ...searchData, [e.target.name]: countryValue });
    setCountryIndex(e.target.value);
    setCountryIndex(e.target.value);
    console.log(countries[e.target.value]);
  };
  const handleUserNameChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("btnclick");
  };

  // console.log(searchData)
  return (
    <div className="userSearch-container">
      <input
        className="userNameSearch SearchNameInput"
        type="text"
        placeholder="User Name"
        name="userName"
        value={searchData.userName}
        onChange={handleUserNameChange}
      />
      <select
        className="userNameSearch SearchCountryInput"
        id="country"
        name="country"
        onChange={handleDropDownChangeCont}
      >
        <option className="DropDownFirstOption" value="">
          Country
        </option>
        {dataStatus &&
          countries.map((item, id) => (
            <option key={id} name="country" value={id}>
              {item.country}
            </option>
          ))}
      </select>

      <select
        className="userNameSearch SearchCityInput"
        id="city"
        name="city"
        onChange={(e) => handleDropDownChangeCity(e)}
      >
        <option className="DropDownFirstOption" value="">
          City
        </option>
        {dataStatus &&
          countries[countryIndex].cities.map((city, id) => (
            <option key={id} name="city" value={city}>
              {city}
            </option>
          ))}
      </select>
      <button className="userSearchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
