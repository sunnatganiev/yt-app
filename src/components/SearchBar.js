import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')

  // const onInputChange = (e) => {
  //   setTerm(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

// class SearchBar extends React.Component {
// state = { term: "" };

// onInputChange = (e) => {
//   this.setState({ term: e.target.value });
// };

// onFormSubmit = (e) => {
//   e.preventDefault();

//   this.props.onFormSubmit(this.state.term);
// };

//   render() {
//     return (
//       <div className="ui segment search-bar">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label htmlFor="">Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
