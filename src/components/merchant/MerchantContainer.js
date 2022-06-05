import React from "react";

// reactstrap components
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

import Header from "components/admin/Header.js";
import Sidebar from "components/Sidebar.js";
import { Link, Switch, Redirect } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import FooterBar from "../FooterBar";

import "admin-assets/css/argon-dashboard-react.css";
import "admin-assets/plugins/nucleo/css/nucleo.css";

import { MERCHANT_SIDEBAR_CONTENT } from "../../constants/sidebar_contents"
import { APP_MERCHANT_ROUTE } from "routes/merchant_routes";
import MerchantRoute from "components/MerchantRoute";

const MerchantContainer = (props) => {
  const [title, setTitle] = React.useState("");
  const [path, setPath] = React.useState("");

  return (
    <>
      <Sidebar
        {...props}
        logo={{
          innerLink: "/",
          imgSrc: require("images/logo.png"),
          imgAlt: "logo",
        }}
        content={MERCHANT_SIDEBAR_CONTENT}
      />
      <div className="main-content">
        <Header />

        <Container className="mt--8" fluid>
          <Row>
            <Col
              className="ml-3 mb-2 bg-transparent font-weight-bold text-white"
              xl="12"
            >
              <Link className="text-white" to="/">
                <span className="mx-1">
                  <FaHome />
                  Home
                </span>
              </Link>
              <span className="mx-1">{path}</span>
            </Col>
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-gradient-white shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">{title}</h3>
                </CardHeader>
                <CardBody>
                  <Switch>
                    {APP_MERCHANT_ROUTE.map((value, key) => {
                      return (
                        <MerchantRoute
                          setTitle={setTitle}
                          setPath={setPath}
                          key={key} //key gaboleh dihilangi karena untuk identifier map
                          nameRoute={value.name}
                          component={value.component}
                          path={value.path}
                          exact={value.exact}
                          isAdmin={value.isAdmin}
                          isNotFound={value.isNotFound}
                        />
                      );
                    })}
                  </Switch>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <FooterBar />
      </div>
    </>
  );
};

export default MerchantContainer;
