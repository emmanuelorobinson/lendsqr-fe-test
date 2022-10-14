import "./UserTable.scss";

import Vthreedot from "../../assets/svgs/Vthreedot.svg";
import FilterIcon from "../../assets/svgs/FilterIcon.svg";

import React, { useMemo } from "react";
import { User } from "../../utils/localStorage";

import Pagination from "../Pagination/Pagination";
import MenuBox from "./MenuBox";

const filters = {
  orgName: "",
  userName: "",
  email: "",
  createdAt: "",
  phoneNumber: "",
  status: "",
};

interface Props {
  users: User[];
}

const pageSize = 10;

const UserTable = ({ users }: Props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [navId, setNavId] = React.useState("");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  const HandleMenu = (e: any) => {
    e.preventDefault();

    const id = e.currentTarget.id;

    const top = Number(document.getElementById(id)?.offsetTop) + 30;
    const right = Number(document.getElementById(id)?.offsetWidth) - 200;

    // render menu on position of click
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("active");
    menu?.setAttribute("style", `top: ${top}px; left: ${right}px;`);

    setNavId(id);
  };

  return (
    <div>
      <table className="table-box">
        <thead>
          <tr>
            <th>
              <div className="table-head">
                <p>ORGANIZATION</p> <img src={FilterIcon} alt="" sizes="18" />{" "}
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>USERNAME</p> <img src={FilterIcon} alt="" sizes="18" />{" "}
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>EMAIL</p> <img src={FilterIcon} alt="" sizes="18" />{" "}
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>PHONE NUMBER</p> <img src={FilterIcon} alt="" sizes="18" />{" "}
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>DATE JOINED</p> <img src={FilterIcon} alt="" sizes="18" />{" "}
              </div>
            </th>
            <th>
              <div className="table-head">
                <p>STATUS</p> <img src={FilterIcon} alt="" sizes="18" />{" "}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((user) => (
            <tr key={user.id} id={user.id}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.createdAt}</td>
              <td>Inactive</td>
              <td>
                <img
                  src={Vthreedot}
                  alt="threedot"
                  sizes="20"
                  style={{
                    cursor: "pointer",
                  }}
                  id={user.id}
                  onClick={HandleMenu}
                />
                <MenuBox id={navId} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-box">
        <div className="outline">
          <p>
            Showing <span>1</span> out of 57
          </p>
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default UserTable;
