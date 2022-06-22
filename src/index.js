import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ProductsPage } from "./DB";
import { MultipleCards } from "./components/cards";
import { SignUpForm } from "./components/forms";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
// import { LearnersHubHome } from "./components/cardIter";
import { MultipleCards2 } from "./components/cards";
import { MultipleCards3 } from "./components/cards";
import "bootstrap-icons/font/bootstrap-icons.css";
import { LoginForm } from "./components/forms";
import { ContactForm } from "./components/forms";
// import img1 from "../images/image1.jpg";
// import img2 from "../images/image2.jpg";
// import img3 from "../images/image3.jpg";

const SayHi = () => {
  return (
    <AuthProvider>
      <MultipleCards />
      <MultipleCards2 />
      <MultipleCards3 />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <SignUpForm />
          <LoginForm />
        </div>
      </Container>
      <ContactForm />
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SayHi />);
