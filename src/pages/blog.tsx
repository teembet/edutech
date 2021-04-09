import { Link } from "react-router-dom";

import blog1 from "../assets/img/blog1.svg";
import blog2 from "../assets/img/blog2.svg";
import blog3 from "../assets/img/blog3.svg";
import blog4 from "../assets/img/blog4.svg";
import person from "../assets/img/person.svg";
import { Pagination } from "react-bootstrap";

export interface AppBlogProps {}

const AppBlog: React.SFC<AppBlogProps> = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );

  return (
    <>
      <main>
        <div className="hero-page-about">
          <h1 className="d-none d-sm-block text-primary animated slideInDown">
            EduTech Blog
          </h1>

          <p className="d-none d-sm-block animated slideInDown">
            Check out our Blog to stay up to date with great contents
          </p>

          <h3 className="d-block d-sm-none text-primary">EduTech Blog</h3>

          <p className="d-block d-sm-none" style={{ fontSize: ".9em" }}>
            Check out our Blog to stay up to date with great contents
          </p>
        </div>

        <div style={{ backgroundColor: "black" }}>
          <div className="container space-bottom-2">
            <div className="row space-top-3 space-bottom-2">
              <div className=" col-lg-12">
                <div className="mb-4">
                  <h1 className="white-text animated slideInDown">
                    What's New
                  </h1>
                </div>
              </div>

              <div className="row col-lg-12 mx-n2 mx-lg-n3 animated slideInUp">
                <div
                  className="col-lg-8"
                  style={{ padding: "5% 0", position: "relative" }}
                >
                  <Link
                    to={{
                      pathname: "/blog-details",
                      state: {
                        identity: "ways",
                      },
                    }}
                  >
                    <img
                      src={blog1}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block card-hover"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </Link>
                </div>

                <div
                  className="col-lg-4"
                  style={{ padding: "5%", position: "relative" }}
                >
                  <div className="row mx-n2 mx-lg-n3">
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "ways",
                        },
                      }}
                    >
                      <h3 className="text-hover">
                        4 Ways Tech Can Elevate Learning in the Virtual
                        Classroom
                      </h3>
                    </Link>

                    <p className="white-text">
                      Today’s higher ed students are members of Generation
                      Z—digital natives who are accustomed to technology in
                      every facet of their lives. o have a real stake in their
                      own education, ...
                    </p>

                    <div className="row " style={{ width: "100%" }}>
                      <div className="col-4">
                        <h1 className="blog-title-image">DL</h1>
                      </div>
                      <div className="col-8 blog-name-placement">
                        <p style={{ color: "white" }}>Danielle Leboff </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row col-lg-12 mx-n2 mx-lg-n3"
                style={{ justifyContent: "space-between" }}
              >
                <div className="row col-lg-6 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "state",
                        },
                      }}
                    >
                      <img
                        src={blog3}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "state",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          The State of Educational Technology in a Post-Pandemic
                          World
                        </h3>
                      </Link>

                      <p className="white-text">
                        Some may say 2020 is the year of educational technology.
                        When COVID-19 pushed schools to go remote, educators and
                        students became more reliant on technology than ever
                        before. ...
                      </p>

                      <div className="row" style={{ width: "100%" }}>
                        <div className="col-4">
                          <h1 className="blog-title-image">MC</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Micah Castelo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row col-lg-6 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "how",
                        },
                      }}
                    >
                      <img
                        src={blog4}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "how",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          How to Best Use Data in Remote Learning
                        </h3>
                      </Link>

                      <p className="white-text">
                        Many experts have noted the benefits of data analytics
                        in education. With data, schools can improve ROI on tech
                        investments and empower teachers to make informed
                        decisions about their instructional practices. ...
                      </p>

                      <div className="row " style={{ width: "100%" }}>
                        <div className="col-4">
                          <h1 className="blog-title-image">JB</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Jennifer Brown</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row col-lg-12 mx-n2 mx-lg-n3"
                style={{ justifyContent: "space-between" }}
              >
                <div className="row col-lg-3 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "takeaway",
                        },
                      }}
                    >
                      <img
                        src={blog1}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "takeaway",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          Takeaways From Distance Learning
                        </h3>
                      </Link>

                      <p className="white-text">
                        The Covid-19 pandemic has wreaked havoc: tragic loss of
                        life, economic disruption, and educational turmoil. In
                        the wake of such chaos, many of us are searching for
                        fragments that suggest something—anything! —good will
                        come out of this chapter in world history. ...
                      </p>

                      <div
                        className="row"
                        style={{ marginBottom: "0 !important", width: "100%" }}
                      >
                        <div className="col-4">
                          <h1 className="blog-title-image">CK</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Christopher Klein </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row col-lg-3 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "better",
                        },
                      }}
                    >
                      <img
                        src={blog1}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "better",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          A Better Breakout Room Experience for Students
                        </h3>
                      </Link>

                      <p className="white-text">
                        The pandemic has completely transformed the way we teach
                        and the way students interact. At the beginning of the
                        school year, I imagined breakout rooms being a popular
                        feature among students during remote learning. was
                        disappointed when I saw students sitting in silence with
                        ...
                      </p>

                      <div
                        className="row"
                        style={{ marginBottom: "0 !important", width: "100%" }}
                      >
                        <div className="col-4">
                          <h1 className="blog-title-image">SS</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Samantha Shane </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row col-lg-3 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "guide",
                        },
                      }}
                    >
                      <img
                        src={blog1}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "guide",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          7 Guidelines for Setting Up Clear Online Lessons
                        </h3>
                      </Link>

                      <p className="white-text">
                        When our classrooms moved online this year, many of us
                        scrambled to find ways to engage students with lessons
                        remotely, only to find that it was no simple task. Many
                        of us, myself included, didn’t know where to start.Even
                        the most basic communications, like ...
                      </p>

                      <div
                        className="row"
                        style={{ marginBottom: "0 !important", width: "100%" }}
                      >
                        <div className="col-4">
                          <h1 className="blog-title-image">ES</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Elizabeth Skopec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row col-lg-3 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "eqip",
                        },
                      }}
                    >
                      <img
                        src={blog1}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "eqip",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          Get Equipped For Success: Digital Learning In Higher
                          Education
                        </h3>
                      </Link>

                      <p className="white-text">
                        Online higher education was gaining strides long before
                        the pandemic ushered in a new era of remote work and
                        learning. In many aspects, academia was far ahead of
                        other industries in terms of online learning, but that
                        doesn’t mean last year’s massive transition ...
                      </p>

                      <div
                        className="row"
                        style={{ marginBottom: "0 !important", width: "100%" }}
                      >
                        <div className="col-4">
                          <h1 className="blog-title-image">CR</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Christopher Rousset</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row col-lg-12 mx-n2 mx-lg-n3"
                style={{ justifyContent: "space-between" }}
              >
                <div className="row col-lg-4 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "adopt",
                        },
                      }}
                    >
                      <img
                        src={blog1}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "adopt",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          How To Adopt An eLearning Model For Your Corporate
                          Training Programs
                        </h3>
                      </Link>

                      <p className="white-text">
                        Any organization is only as good as its employees. If
                        you want your company to thrive, you need to make sure
                        that your employees are growing their skills. To
                        facilitate employee development, training programs are
                        important.  With remote work becoming the norm, ...
                      </p>

                      <div
                        className="row"
                        style={{ marginBottom: "0 !important", width: "100%" }}
                      >
                        <div className="col-4">
                          <h1 className="blog-title-image">SB</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Shane Barker </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row col-lg-4 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "learning",
                        },
                      }}
                    >
                      <img
                        src={blog1}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "learning",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          Learning Ecosystem: Past, Present, And Future
                        </h3>
                      </Link>

                      <p className="white-text">
                        The elements in an ecosystem interact directly or
                        indirectly with one another and influence one another.
                        In a broader sense, an ecosystem means any group of
                        elements that form an interactive set that influence one
                        another. A good example of an ecosystem is ...
                      </p>

                      <div
                        className="row"
                        style={{ marginBottom: "0 !important", width: "100%" }}
                      >
                        <div className="col-4">
                          <h1 className="blog-title-image">SD</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Satyabrata Das</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row col-lg-4 mx-n2 mx-lg-n3">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <Link
                      to={{
                        pathname: "/blog-details",
                        state: {
                          identity: "eLearning",
                        },
                      }}
                    >
                      <img
                        src={blog1}
                        alt=""
                        className="img-fluid img-data d-none d-lg-block card-hover"
                      />
                      <img
                        src={blog2}
                        alt=""
                        className="img-fluid img-data d-lg-none"
                      />
                    </Link>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <Link
                        to={{
                          pathname: "/blog-details",
                          state: {
                            identity: "eLearning",
                          },
                        }}
                      >
                        <h3 className="text-hover">
                          eLearning Is The Tool To Stay Ahead
                        </h3>
                      </Link>

                      <p className="white-text">
                        New data indicates that 77% of new learning courses will
                        be delivered through an app or online platform in 2020.
                        It's the future, and it means teachers are dead. The new
                        breed of teachers may be virtual learners themselves, so
                        they are no longer needed to meet the ...
                      </p>

                      <div
                        className="row"
                        style={{ marginBottom: "0 !important", width: "100%" }}
                      >
                        <div className="col-4">
                          <h1 className="blog-title-image">EM</h1>
                        </div>
                        <div className="col-8 blog-name-placement">
                          <p style={{ color: "white" }}>Emmy Michelle </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12"
                style={{ justifyContent: "center", display: "flex" }}
              >
                {/* {paginationBasic} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AppBlog;
