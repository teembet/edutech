import partners from "../assets/img/partners.svg";

export interface AppPartnersProps {}

const AppPartners: React.SFC<AppPartnersProps> = () => {
  return (
    <>
      <div className="hero-pages p-2">
        <h6 className="text-center">PARTNERS</h6>
        <h1 className="text-primary text-center d-none d-lg-block d-md-block">
          Join Us To Bridge The Gap <br /> To Learning
        </h1>

        <h2 className="text-primary text-center d-block d-lg-none d-md-none">
          Join Us To Bridge The Gap To Learning
        </h2>
        <p className="text-center d-none d-lg-block d-md-block">
          We are constantly open to partnership oppoutunities <br /> with
          progressive education establishments and global <br /> changemakers
        </p>

        <p className="text-center d-block d-lg-none d-md-none">
          We are constantly open to partnership oppoutunities with progressive
          education establishments and global changemakers
        </p>

        <button
          className="btn btn-lg  btn-primary"
          style={{
            padding: "16px 32px",
            borderRadius: "4px",
            background: "rgb(15, 66, 164)",
          }}
        >
          View Solutions
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <img src={partners} className="img-fluid" alt="" />
            <br />
            <br />
            <h3 className="text-center">Ahmadu Bello University</h3>
            <br />
            <p className="text-center">
              Since our partnership with this prestigious institution began in
              2015, we have helped solve the problem of access to quality
              education by facilitating the successful deployment of Africa’s
              first online MBA program after which, has come the launch of
              several other degree programs across both undergraduate and
              postgraduate levels.
            </p>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.abu.edu.ng/"
                className="btn btn-lg btn-outline-primary"
                style={{
                  padding: "16px 32px",
                  borderRadius: "4px",
                }}
              >
                View Solutions
              </a>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>

      <div
        className="container space-2"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0F42A4",
          borderRadius: "8px",
        }}
      >
        <h3 className="text-center text-light">
          Ready To Partner With Us
          <br />
          To Get More People Access To
          <br />
          Quality Education?
        </h3>
        <br />
        <button
          className="btn btn-lg btn-outline-primary"
          style={{
            padding: "16px 32px",
            borderRadius: "4px",
            background: "#fff",
          }}
        >
          View Solutions
        </button>
      </div>
    </>
  );
};

export default AppPartners;
