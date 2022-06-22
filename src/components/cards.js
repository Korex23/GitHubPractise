// import img1 from "../../public/images/image1";
// import img2 from "../../images/image1";
// import img3 from "../images/image3.jpg";
// import img4 from "../images/image4.jpg";
import DataBase from "../DB.json";
import { CardComponent } from "../components/cardIter";
import { LearnersHubHome } from "../components/cardIter";
import { LearnersHubPage } from "../components/cardIter";

export const MultipleCards = () => {
  return (
    <div className="row mx-3 g-3">
      {DataBase.products.map((product) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardComponent {...product}></CardComponent>
          </div>
        );
      })}
    </div>
  );
};

export const MultipleCards2 = () => {
  return (
    <div className="row mx-3 g-3">
      {DataBase.learners1.map((learner) => {
        return (
          <div className="col-sm-12 col-md-4 col-lg-4">
            <LearnersHubHome {...learner}></LearnersHubHome>
          </div>
        );
      })}
    </div>
  );
};

export const MultipleCards3 = () => {
  return (
    <section>
      {DataBase.learners2.map((learn) => {
        return <LearnersHubPage {...learn}></LearnersHubPage>;
      })}
    </section>
  );
};
