import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      country: "",
      quali: "",
      search: "",
      image: "",
      hobby: [],
      data: [],
    };
    this.savedata = this.savedata.bind(this);
    this.search= this.search.bind(this);
  }

  delete(userid) {
    let data = new FormData();
    data.append("did", userid);
    axios.post('http://localhost/Data.php', data).then(() => {
      axios.post('http://localhost/Data.php').then((res) => {
        this.setState({ data: res.data });
      });
    });
  }

  edit(userid) {
    let data = new FormData();
    data.append("eid", userid);
    axios.post('http://localhost/Data.php', data).then((res) => {
      if (res.data) {
        const hobbiesArray = res.data.hobbies ? res.data.hobbies.split(",") : [];
        this.setState({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          country: res.data.country,
          quali: res.data.qualification,
          hobby: hobbiesArray,
          image:res.data.image,
        });
      }
    }).catch(error => {
      console.error('There was an error editing the data!', error);
    });
  }

  search(evt) {
    evt.preventDefault();
    let fd = new FormData();
    fd.append("search", this.state.search);
    axios.post("http://localhost/Data.php", fd).then((res) => {
      this.setState({ data: res.data ? res.data : [] });
    });
  }

  savedata = (evt) => {
    evt.preventDefault();
    let fd = new FormData();
    fd.append("id", this.state.id);
    fd.append("name", this.state.name);
    fd.append("email", this.state.email);
    fd.append("country", this.state.country);
    fd.append("q", this.state.quali);
    fd.append("h", this.state.hobby.join(","));
    if (this.state.image) {
      fd.append("image", this.state.image);
    }

    axios.post("http://localhost/Data.php", fd).then((res) => {
      console.log(res.data);
      Swal.fire({
        title: "data added Successful",
        text: res.data.message,
        icon: "success",
      });

      axios.get("http://localhost/Data.php").then((response) => {
        this.setState({ data: response.data });
      });
    }).catch((error) => {
      console.error('There was an error updating the data!', error);
    });
  };


  componentDidMount() {
    axios.get("http://localhost/Data.php").then((res) => {
      this.setState({ data: res.data });
    });
  }

  hobbies = (event) => {
    const { value, checked } = event.target;
    this.setState((prevState) => {
      const newHobbies = checked
        ? [...prevState.hobby, value]
        : prevState.hobby.filter(hobby => hobby !== value);
      return { hobby: newHobbies };
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1><b><u>ADD STUDENT DATA</u></b></h1>
          <form>
            <label>Enter Name</label><br />
            <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /><br /><br />
            <label>Enter Email</label><br />
            <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /><br /><br />
            <label>Select Country</label><br />
            <select value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })}>
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select><br /><br />
            <label>Qualification</label><br />
            <label>
              <input type="radio" name="qualification" value="10th" checked={this.state.quali === '10th'} onChange={(e) => this.setState({ quali: e.target.value })} /> 10th
            </label>
            <label>
              <input type="radio" name="qualification" value="12th" checked={this.state.quali === '12th'} onChange={(e) => this.setState({ quali: e.target.value })} /> 12th
            </label><br /><br />
            <label>Hobbies</label><br />
            <label>
              <input type="checkbox" value="Reading" checked={this.state.hobby.includes("Reading")} onChange={this.hobbies} /> Reading
            </label>
            <label>
              <input type="checkbox" value="Sports" checked={this.state.hobby.includes("Sports")} onChange={this.hobbies} /> Sports
            </label><br /><br />
            <label>Upload File</label><br />
            {this.state.id ? (
              <>
                <img src={`http://localhost/${this.state.image}`} alt="user" width="100" height="100" /><br />
                </>
            ) : (
              <d>{this.state.image}</d>
            )}
            <input type="file" accept="image/*" onChange={(e) => this.setState({ image: e.target.files[0] })} /><br /><br />
            <button type="submit" className="btn btn-primary" onClick={this.savedata }>
              {this.state.id ? "Update" : "Add"}
            </button>
          </form>
        </center>

        <center>
          <h3><u><b>DATA OF STUDENT</b></u></h3>
          <label>Search</label><br />
          <input type="text" onChange={(e) => this.setState({ search: e.target.value })} />
          <input type="submit" value="Search" onClick={this.search} /><br /><br />
          <table border="1" width="50%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Country</th>
                <th>Qualification</th>
                <th>Hobbies</th>
                <th>Delete</th>
                <th>Edit</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((re) => (
                <tr key={re.id}>
                  <td>{re.id}</td>
                  <td>{re.name}</td>
                  <td>{re.email}</td>
                  <td>{re.country}</td>
                  <td>{re.qualification}</td>
                  <td>{re.hobbies}</td>
                  <td><button onClick={() => this.delete(re.id)}>Delete</button></td>
                  <td><button onClick={() => this.edit(re.id)}>Edit</button></td>
                  <td>
                    {re.image ? (<img src={`http://localhost/${re.image}`} alt="user" width="100" height="100" />) : "No Image"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default Main;
