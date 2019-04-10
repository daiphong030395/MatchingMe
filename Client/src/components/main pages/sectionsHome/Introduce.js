import React from "react";
import { Card, CardBody} from 'mdbreact';
// import banner from '../../../image/banner2.png'

class Introduce extends React.Component {
    render() {
        return(
            <Card className=" bg-img-foot">
            {/* <img src={banner} alt="Banner" /> */}
            <CardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                {/* <Breadcrumb>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                </Breadcrumb> */}
                {/* <FormInline className="md-form m-0" >
                    <input className="form-control form-control-sm" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
                    <Button size="sm" color="primary" className="my-0" type="submit"><Fa icon="search" /></Button>
                </FormInline> */}
                {/* <h6 className="align-items-center"> Đây là môi trường kết nối việc dạy và học. <br />
                     Hãy để chúng tôi mang đến người phù hợp nhất dành cho bạn</h6> */}
            </CardBody>
        </Card>
        )
    }
}

export default Introduce;