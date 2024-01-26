import React, { useEffect, useState } from "react";

export default function Users() {
    const url = "http://firstrealestate-001-site1.anytempurl.com/api/admin/getAllAccount"
;

    const [users, setUsers] = useState([]);
    // const [email, setEmail] = useState([]);
    function fetchUsers() {
        fetch(url)
            .then((res => res.json()))
            .then((data => setUsers(data)))

    }

    useEffect(() => {

        fetchUsers();
    }, []);
    return (
        <div className="">
            <h1>Quản lí tài khoản</h1>
            <button>Tìm kiếm sản phẩm</button><br></br>
            <input type="text" placeholder="Nhập email" ></input>
            <input type="text" placeholder="Vai trò"></input>
            <button >Tìm kiếm</button>

            <div className="">
                <h1>Bảng kết quả tìm kiếm</h1>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>roleId</th>
                        <th>username</th>
                        <th>password</th>
                        <th>createAt</th>
                        <th>updateAt</th>
                        <th>phoneNumber</th>
                        <th>email</th>
                        <th>address</th>
                        <th>status</th>
                        <th>role</th>
                        
                    </tr>

                    {users.map((user) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.roleId}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.createAt}</td>
                                <td>{user.updateAt}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.status ? "Đang hoạt động" : "Tạm ngừng"}</td>
                                <td>{user.role}</td>

                            </tr>
                        )


                    })}
                </table>

            </div>

        </div>

    )


}