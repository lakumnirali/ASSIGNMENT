import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { DeleteUserinadmin, PatchUser, PutUser, retriveUsers } from '../../../../store/action/users';
import CustomHooks from '../../../../hooks/CustomHooks';

const UsersAdmin = () => {
  const dispatch = useDispatch();
  const [basicModal, setBasicModal] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [update, setUpdate] = useState();
  const [updateStatus, setUpdateStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const toggleShow = () => setBasicModal(!basicModal);

  const { handleChange, updateData, inp } = CustomHooks(update);

  useEffect(() => {
    getData();
  }, [deleteStatus, updateStatus]);

  const getData = async () => {
    const getResponse = await dispatch(retriveUsers());
    const allUserList = getResponse.payload.data.map((val, key) => {
      return {
        id: val.id,
        username: val.username,
        email: val.email,
        mobile: val.mobile,
        password: val.password,
        role_id: val.role_id,
      };
    });
    setApiData(allUserList);
    setFilteredData(allUserList); // Initialize filteredData with all data
  };

  const getDatabyId = async (id) => {
    const patchResponse = await dispatch(PatchUser(id));
    updateData(patchResponse.payload.data);
    setUpdate(patchResponse.payload.data);
    setLoading(true);
  };

  const updateSave = async () => {
    const putResponse = await dispatch(PutUser(update.id, inp));
    setUpdateStatus(true);
    setLoading(true);
  };

  const delUser = async (id) => {
    const deleteResponse = await dispatch(DeleteUserinadmin(id));
    setDeleteStatus(true);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = apiData.filter(
      (user) =>
        (user.username && user.username.toLowerCase().includes(query)) ||
        (user.email && user.email.toLowerCase().includes(query)) ||
        (user.mobile && user.mobile.toLowerCase().includes(query)) ||
        (user.password && user.password.toLowerCase().includes(query)) ||
        (user.role_id && user.role_id.toString().toLowerCase().includes(query))
    );
    setFilteredData(filtered);
  };
  

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">
          Search:
        </label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>
          Search
        </button>
      </div>

      <MDBTable hover align="middle">
        <MDBTableHead>
          <tr className="bg-secondary bg-gradient">
            <th className="text-light fw-bold" scope="col">
              Sr.no
            </th>
            <th className="text-light fw-bold" scope="col">
              Username
            </th>
            <th className="text-light fw-bold" scope="col">
              Email
            </th>
            <th className="text-light fw-bold" scope="col">
              Mobile
            </th>
            <th className="text-light fw-bold" scope="col">
              Password
            </th>
            <th className="text-light fw-bold" scope="col">
              Role
            </th>
            <th className="text-light fw-bold" scope="col">
              Edit
            </th>
            <th className="text-light fw-bold" scope="col">
              Delete
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((user, key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.password}</td>
              <td>{user.role_id}</td>
              <td>
                <MDBBtn
                  data-id={user.id}
                  className="bg-success"
                  onClick={() => {
                    toggleShow();
                    getDatabyId(user.id);
                  }}
                >
                  <i data-id={user.id} className="fas fa-pen"></i>
                </MDBBtn>
              </td>
              <td>
                <MDBBtn
                  data-id={user.id}
                  className="bg-danger"
                  onClick={() => delUser(user.id)}
                >
                  <i className="far fa-trash-can" data-id={user.id}></i>
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

      <MDBModal className="shadow-custom" show={basicModal} setShow={setBasicModal} tabIndex="-1">
        {/* Modal content remains the same */}
      </MDBModal>
    </div>
  );
};

export default UsersAdmin;
