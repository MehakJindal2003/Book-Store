import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} style={{marginBottom:'20px',borderRadius:'10px'}}/>
      <article style={{textAlign:'center'}}>By {author}</article>
      <h3 style={{textAlign:'center'}}>{name}</h3>
      <p style={{textAlign:'center'}}>{description}</p>
      <h3 style={{textAlign:'center'}}>Rs. {price}</h3>
      <div className="bookButtons">
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} id="b1">
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      </div> 
    </div>
  );
};

export default Book;