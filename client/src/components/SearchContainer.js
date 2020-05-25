import React ,{Component} from "react";
import SearchForm from "./Search";
import API from "../utils/API";
import Result from "./Result";

class SearchContainer extends Component{

    state={
    
    search:"",
    result: [],

    }

componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          result: res.data.results.map((event, id) => ({
            firstName: event.name.first,
            lastName: event.name.last,
            picture: event.picture.large,
            email: event.email,
            phone: event.phone,
            dob: event.date,
            key: id,
          })),
        });
      })
      .catch((err) => console.log(err));
  }
  filterEmployees = (searchkey) => {
    var filterResult = this.state.result.filter(
      (person) => person.firstName.includes(searchkey)
    );

    this.setState({
      result: filterResult,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.filterEmployees(this.state.search);
  };
  handleInputChange = (event) => {
      console.log(event.target)
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='searching'>
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
        <div>
          <Result
          result={this.state.result} />
        </div>
      </div>
    );
  }
}

export default SearchContainer;