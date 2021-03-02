import armor from "../assets/img/armoura.svg";

export interface AppEduCollectPageProps {}

const AppEduCollectPage: React.SFC<AppEduCollectPageProps> = () => {
  return (
    <>
      <div className="hero-pages">
        <h6 className="text-center">EDUCOLLECT</h6>
        <h1 className="text-primary d-none d-sm-block text-center">
          Quick Access To Affordable
          <br />
          Education Finance
        </h1>

        <h3 className="text-primary d-block d-sm-none text-center">
          Quick Access To Affordable Education Finance
        </h3>
        <div className="container">
          <p className="text-center d-none d-sm-block">
            EduCollect provides access to Educational loans without collateral
            and relatively low <br />
            interest rates. We allow students to secure educational loans, to
            enable them have <br /> access to quality education.
          </p>
          <p className="text-center d-block d-sm-none">
            EduCollect provides access to Educational loans without collateral
            and relatively low interest rates. We allow students to secure
            educational loans, to enable them have access to quality education.
          </p>
        </div>

        <button
          className="btn btn-lg  btn-primary"
          style={{
            padding: "16px 32px",
            borderRadius: "4px",
            background: "rgb(15, 66, 164)",
          }}
        >
          Learn More
        </button>
      </div>

      <div className="row">
        <div className="offset-sm-2 col-sm-8">
          <div
            style={{ marginTop: "-80px" }}
            className="embed-responsive embed-responsive-16by9"
          >
            <iframe
              src="https://www.youtube.com/embed/cpABTFhi4SI"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center" }}>KEY BENEFITS</h3>

            <div className="container ">
              <div className="row space-1">
                <div className="col-sm-6 col-lg-4 ">
                  <div className="card-center">
                    <div className="card-icon">
                      <span className="span-iconss">
                        <img src={armor} alt="" />
                      </span>
                    </div>
                    <h3 className="card-headers">Virtual Classroom</h3>
                    <div>
                      <p className="text-dark text-center">
                        Feel free to use these in any private or public space.
                        Please do not repackage and redistribute these as your
                        own. If you want to include them in your design tool
                        like Origami or Framer, contact us!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 ">
                  <div className="card-center">
                    <div className="card-icon">
                      <span className="span-iconss">
                        <img src={armor} alt="" />
                      </span>
                    </div>
                    <h3 className="card-headers">User Management</h3>
                    <div>
                      <p className="text-dark text-center">
                        Feel free to use these in any private or public space.
                        Please do not repackage and redistribute these as your
                        own. If you want to include them in your design tool
                        like Origami or Framer, contact us!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 ">
                  <div className="card-center">
                    <div className="card-icon">
                      <span className="span-iconss">
                        <img src={armor} alt="" />
                      </span>
                    </div>
                    <h3 className="card-headers">Big Data Analytics</h3>
                    <div>
                      <p className="text-dark text-center">
                        Feel free to use these in any private or public space.
                        Please do not repackage and redistribute these as your
                        own. If you want to include them in your design tool
                        like Origami or Framer, contact us!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ background: "#2B478B" }} className="space-3">
        <div className="container">
          <h2 className="text-light">
            Why Should I Use
            <br />
            EduCollect?
          </h2>
          <br />
          <div className="row g-sm-3">
            <div className="col-sm-4">
              <div
                style={{
                  background: "#fff",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="p-4 space-1"
              >
                <h3>
                  For Academic <br /> Purposes
                </h3>
                <p>
                  Education at this early stage is crucial and funding should
                  not be a barrier. Let us ease your burden by ensuring you can
                  give your wards the quality education they need.
                </p>
              </div>
            </div>
            <div className="col-sm-4 ">
              <div
                style={{
                  background: "#fff",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="p-4 space-1"
              >
                <h3>
                  For Professional
                  <br />
                  Trainings
                </h3>
                <p>
                  You shouldn’t have to deal with the stress of completing your
                  fees at once, so we’re here to ease that for you with easily
                  accessible loans to aid your academic pursuits.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                style={{
                  background: "#fff",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="p-4 space-1"
              >
                <h3>
                  For Educational <br /> Establishments
                </h3>
                <p>
                  Striving to further your academic achievements shouldn’t be
                  limited by financial resources, so we’re here to bridge that
                  gap for you by offering you collateral-free financing to keep
                  your dream alive.
                </p>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                border: "2px solid #0F42A4",
                boxSizing: "border-box",
                borderRadius: "4px",
                padding: "16px 32px",
                color: "#0F42A4",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppEduCollectPage;
