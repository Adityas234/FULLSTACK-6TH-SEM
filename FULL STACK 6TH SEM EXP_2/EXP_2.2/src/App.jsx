import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const websites = [
  {
    title: "Google",
    description: "Search engine for finding information on the web.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://www.google.com"
  },
  {
    title: "YouTube",
    description: "Video sharing platform for learning and entertainment.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    link: "https://www.youtube.com"
  },
  {
    title: "GitHub",
    description: "Platform for hosting and managing code repositories.",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://www.github.com"
  }
];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Card-Based Layout Using Bootstrap
      </h2>

      <div className="row">
        {websites.map((site, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={site.image}
                className="card-img-top"
                alt={site.title}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{site.title}</h5>
                <p className="card-text">{site.description}</p>
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
