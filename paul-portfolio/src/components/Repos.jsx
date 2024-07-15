import { useParams } from "react-router-dom";

function Repos({ repos }) {
  const { repoId } = useParams();
  const repo = repos.find((r) => r.id === parseInt(repoId));

  if (!repo) {
    return <div>Repo not found</div>;
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="pt-3">
        <div className="container-fluid d-flex justify-content-around col">
          <div className="about">
            <h1 className="audiowide-regular text-start red-glow">
              {repo.title}
            </h1>
            <p className="audiowide-regular text-start grey">
              {repo.descriptionOne}
            </p>
            <div className="mt-4">
              <img
                className="pic"
                src={repo.imageOne}
                alt="Website Pic"
                width="100%"
                height="330"
              />
            </div>
          </div>
          <div className="about">
            <div className="mb-4">
              <img
                className="pic"
                src={repo.imageTwo}
                alt="Website Pic"
                width="100%"
                height="330"
              />
            </div>
            <p className="audiowide-regular text-start grey">
              {repo.descriptionTwo}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-around nav-item mt-4">
          <a
            target="_blank"
            type="button"
            className="audiowide-regular button btn"
            href={repo.github}
          >
            GITHUB REPOSITORY
          </a>
          {repo.site && (
            <a
              target="_blank"
              type="button"
              className="audiowide-regular button btn"
              href={repo.site}
            >
              DEPLOYED SITE
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Repos;
