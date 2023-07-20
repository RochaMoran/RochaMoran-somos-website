import { AiOutlineSearch } from "react-icons/ai";

export default function FindDoctor() {
  return (
    <section className="section find-doctor">
      <h4>FIND A DOCTOR</h4>
      <form className="find-doctor__form">
        <div className="control-input">
          <label>Search for Specialy, Practice or Provider</label>
          <select>
            <option>Specialy</option>
            <option>Practice</option>
          </select>
        </div>
        <div className="control-input">
          <label>Location Address, City or Zip</label>
          <input placeholder="e.g. New York. NY or 10034" />
        </div>
        <div className="control-input">
          <label>Insurance Name</label>
          <input placeholder="e.g. Medicare" />
        </div>
        <button className="find-doctor__submit">
          <AiOutlineSearch />
        </button>
      </form>
    </section>
  );
}
