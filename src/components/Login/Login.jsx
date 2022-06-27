import "./style.css";

import { Button, Form, Input, Typography } from "antd";

import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage.setItem("userLogin", values);
    navigate("/dashboard");
  };

  return (
    <div className="grid justify-items-center content-center h-full">
      <div className="flex flex-col gap-5 drop-shadow-xl shadow-slate-900 p-10 rounded-lg bg-sky-900">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div className="text-center text-white text-3xl font-medium mb-3">
            LOGIN
          </div>
          <Form.Item
            className="text-white text-base"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your valid email!",
              },
            ]}
          >
            <Input className="w-[250px] rounded-lg p-2 text-gray-800 font-medium" />
          </Form.Item>

          <Form.Item
            name="password"
            className="text-white text-base"
            hidden={false}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="input-password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-gray-400 p-3 rounded-lg hover:scale-105 transition-transform ease-in-out scale-100"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
