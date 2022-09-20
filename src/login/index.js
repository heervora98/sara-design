// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../style/login.css"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

const Login = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    // const onFinish = (values: any) => {
    //     console.log('Finish:', values);
    // };

    return (
        <>
            <div className='Login-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className='form-bg'>
                                <form>
                                    <div class="form-floating mb-3">
                                        <input type="name" class="form-control" id="floatingInput" placeholder="UserName" />
                                        <label for="floatingInput">User Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div>
                                        <button className='form-sub-btn'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
