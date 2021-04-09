import { Link } from "react-router-dom";

export interface AppNotFoundPageProps {}

const AppNotFoundPage: React.SFC<AppNotFoundPageProps> = () => {
  return (
    <>
      <div
        className="bg-img-hero-fixed"
        style={{
          backgroundImage: "url(./assets/svg/illustrations/error-404.svg)",
        }}
      >
        <main id="content" role="main">
          <div className="d-lg-flex">
            <div className="container d-lg-flex align-items-lg-center min-vh-lg-100 space-4">
              <div className="w-lg-60 w-xl-50">
                <div className="mb-4">
                  <img
                    className="max-w-23rem mb-3"
                    src="./assets/svg/illustrations/error-number-404.svg"
                    alt="SVG Illustration"
                  />
                  <p className="lead">
                    Oops! Looks like you followed a bad link. <br /> If you
                    think this is a problem with us, please
                    <a href="#">tell us.</a>
                  </p>
                </div>

                <Link
                  className="btn btn-wide btn-primary transition-3d-hover"
                  to="/"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AppNotFoundPage;
