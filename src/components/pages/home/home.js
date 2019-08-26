import React, { Component, Fragment } from "react";

// import styles
import "./home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="page-header d-none d-md-block">
          <div className="dark-overlay">
            <div className="container">
              <div className="inner d-flex flex-column justify-content-center">
                <h1 className="text-light display-4">
                  Найди свою команду с нами
                </h1>
                <p className="text-light">
                  Здесь можно найти команду начинающих разработчиков для
                  совместной работы над любым проектом
                </p>
                <div>
                  <a href="/teams" className="btn text-light">
                    Найти команду
                  </a>
                  <a href="/projects" className="btn text-light orange-border">
                    Смотреть проекты
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="underline">Hello WebDev Trainee project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolorum, sequi sapiente, reiciendis corrupti expedita iste accusamus
            vitae facilis culpa, nesciunt officia. Dolor, facilis reiciendis
            porro dolore ipsum repellendus ad inventore dignissimos nobis nihil
            distinctio enim vero asperiores quia, aspernatur consequatur saepe
            animi ex minus aperiam voluptatum magni quis, odio assumenda!
            Quibusdam nisi at, labore debitis impedit esse maiores expedita
            eaque quasi asperiores repellendus quaerat earum tempora
            necessitatibus repudiandae, dolorem consequuntur praesentium, quam
            obcaecati id veritatis! Culpa voluptatem aspernatur voluptas fugit
            dolorum nulla totam provident error. A dolore animi dicta. Quidem
            sequi repudiandae, molestiae culpa mollitia vero adipisci unde
            blanditiis.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Home;
