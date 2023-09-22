import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login2() {
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const submit = () => {
    console.log("working fine");
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: data.title,
    body: data.body,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => {
  if (response.status === 201) {
    // Status code 200 indicates success, so display the modal
    const modalButton = document.getElementById("modalButton");
    if (modalButton) {
      modalButton.click();
    }
  } else {
    // Handle the case where the response status is not 200 (e.g., display an error message)
    console.error('Error:', response.status);
  }
  return response.json();
})
  .then((json) => console.log(json));
    setData({
      title: "",
      body: "",
    });
  };

  return (
    <>
      <div className="container-test d-flex justify-content-center align-items-center">
        <div className="box-register d-flex justify-content-center align-items-center">
          <div className="">
            <div>
              <input
                placeholder="title"
                onChange={handleChange}
                value={data?.title}
                name="title"
              />
            </div>
            <div>
              <input
                placeholder="body"
                onChange={handleChange}
                value={data?.body}
                name="body"
                type="text"
              />
            </div>

            <button className="buttonSend" onClick={submit} test-data="sendButton">
              SEND
            </button>
          </div>
        </div>
      </div>

      {/* //Boostrap MODAL */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="modalButton"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" test-data="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel" test-data="modalTtile">MODAL HAVE OPEN</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="d-flex justify-content-center align-items-center">
<div>
<img src="https://cdn4.vectorstock.com/i/1000x1000/97/73/party-hat-vector-9859773.jpg" test-data="image" style={{ width: "100px", height:"100px" }}></img>
</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Login2;
