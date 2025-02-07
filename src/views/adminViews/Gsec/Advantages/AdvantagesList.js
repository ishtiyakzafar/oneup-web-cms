import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import UpdateModal from './UpdateModal';
import { getAdvantage } from 'services/gsecServices';
import { deleteAdvantage } from 'services/gsecServices';


const AdvantagesList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getAdvantage();
                setData(res.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [])

    const handleDelete = (id) => {
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
                    await deleteAdvantage(id);
                    setData((prev) => prev.filter((item) => item._id !== id));
                } catch (error) {
                    Swal.showValidationMessage(`
                  Request failed: ${error}
                `);
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
        });
    }

    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Advantages</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item._id}>
                                <td>{item.advantage}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-sm btn-danger me-3'>Delete</button>
                                    <UpdateModal item={item} setData={setData} />
                                </td>
                            </tr>
                        ))
                    }
                    {!loading && data.length === 0 && <tr>
                        <td className='text-center' colSpan={2}>No record found</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
};

export default AdvantagesList;