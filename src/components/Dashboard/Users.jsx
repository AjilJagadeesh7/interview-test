import React, { useEffect, useState } from "react";
import { Spin, Table } from "antd";

import useFetch from "react-fetch-hook";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const { isLoading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },
  ];
  useEffect(() => {
    if (data) {
      const item = data.map((item, key) => {
        return {
          key: key,
          id: item?.id,
          name: item?.name,
          email: item?.email,
          website: item?.website,
          username: item?.username,
          company: item?.company?.name,
          address: item?.address?.city,
          phone: item?.phone,
          addres: item?.address?.city,
          phon: item?.phone,
          addre: item?.address?.city,
          pho: item?.phone,
        };
      });
      setUsers(item);
    }
  }, [data]);

  useEffect(() => {}, []);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Spin />;
      </div>
    );
  }
  return (
    <div className="m-10">
      <div className="overflow-y-auto">
        <Table columns={columns} dataSource={users} />
      </div>
    </div>
  );
};
