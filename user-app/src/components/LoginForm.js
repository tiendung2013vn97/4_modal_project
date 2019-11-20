import React from 'react'
import { Form, Icon, Input, Button, Card } from 'antd';

class LoginForm extends React.Component {
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmitLoginForm(values)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
            },
        };
        return (
            <div className="box-login-container">
                <Card className="box-login" hoverable>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit} >
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button loading={this.props.isLoadingLogin} type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="/register">register now!</a>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

LoginForm = Form.create({ name: 'login_form' })(LoginForm);
export default LoginForm