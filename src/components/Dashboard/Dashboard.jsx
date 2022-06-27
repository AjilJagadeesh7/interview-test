import { Button, List, Typography } from "antd";
import { Link, Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("userLogin");
    if (!data) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex">
      <div
        className={`bg-white w-64 flex flex-col justify-between items-center h-screen gap-5 p-2 py-10`}
      >
        <div className="w-full">
          <div className="flex justify-center w-full h-5 items-center mb-10">
            <Typography className="text-lg font-normal text-gray-500">
              Dashboard
            </Typography>
          </div>
          <div className="border rounded p-1">
            <List
              size="small"
              bordered
              dataSource={["Users list", "Photos"]}
              renderItem={(item, index) => (
                <Link
                  to={
                    item.toLowerCase().replace(/ /g, "") === "userslist"
                      ? "/dashboard"
                      : `/dashboard/${item.toLowerCase().replace(/ /g, "")}`
                  }
                >
                  <List.Item
                    className={`p-2 hover:bg-gray-200 cursor-pointer rounded-md ${
                      index === 0 ? "border-b" : ""
                    }`}
                  >
                    {item}
                  </List.Item>
                </Link>
              )}
            />
          </div>
        </div>

        <Button
          type="primary"
          className="bg-red-600 text-white p-2 rounded-md w-1/2 hover:scale-105 transition-transform scale-100"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </Button>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
