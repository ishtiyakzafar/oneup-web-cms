import React, { useEffect, useState } from 'react';
import './IpoContent.css';
import { useHistory } from 'react-router-dom';
import { deleteIpoContent } from 'services/ipo_content';
import Swal from 'sweetalert2';
import { getAllIpoContent } from 'services/ipo_content';
const IpoContent = () => {
  const [loading, setLoading] = useState(false);
  const [ipoContents, setIpoContents] = useState([]);
  const history = useHistory();
  const fetchIpoContentList = async () => {
    try {
      setLoading(true);
      const res = await getAllIpoContent();
      setIpoContents(res.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchIpoContentList();
  }, [])
  const handleDeleteIpoContent = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this record!",
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      preConfirm: async () => {
        try {
          await deleteIpoContent(id);
          fetchIpoContentList();
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }
  return (
    <div className='ipoContent'>
      <div className='ipo_card'>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Issue Code</th>
                <th scope="col">View/Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                ipoContents.map((item) => (
                  <tr key={item._id}>
                    <td>{item.issuecode}</td>
                    <td>
                      <button onClick={() => history.push(`/admin/ipo-content/${item._id}`)} className='btn btn-primary'>View/Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteIpoContent(item._id)} className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};
export default IpoContent;