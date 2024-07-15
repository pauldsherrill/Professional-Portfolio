export default function Resume() {
  return (
    <div className="container-fluid body d-flex flex-column align-items-center justify-content-center audiowide-regular">
      <h1 className="name text-start red-glow title mb-4">MY RESUME</h1>
      <a
        href="./assets/paulsherrillresume.pdf"
        download="paulsherrillresume.pdf"
        className="btn nav-link mb-4"
      >
        DOWNLOAD
      </a>
      <container className="apply-background p-5 rounded w-75">
        <div className="d-flex flex-column align-items-center mb-3">
          <h1 className="red-glow">PAUL SHERRILL</h1>
          <p> Lubbock, TX 79415- sherrillpaul21@gmail.com- (512)-296-0676</p>
        </div>
        <div>
          <h3 className="red-glow">PROFESSIONAL SUMMARY</h3>
          <p className="ms-4">
            Motivated and accomplished former student-athlete with a degree in
            kinesiology and working towards a certification in web development
            at a top program and university in the nation. Hard worker with a
            positive attitude; good team player, able to take initiative,
            prioritize time management, and manage a heavy workload.
            Solution-driven worker, adept at contributing to highly
            collaborative work environments, finding solutions and determining
            customer satisfaction. Proven education developing consumer-focused
            websites with a background in sales and marketing and a passion for
            growth and helping others.
          </p>
        </div>
        <div className="row">
          <h3 className="red-glow">SKILLS</h3>
          <div className="col-md-6">
            <ul>
              <li>Interpersonal Communication Skills</li>
              <li>Customer Relationship Building</li>
              <li>Front-End Development Skills: HTML, CSS, JavaScript</li>
              <li>Libraries and Frameworks</li>
              <li>Code Debugging</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Node.js Knowledge</li>
              <li>Teamwork and Collaboration</li>
              <li>Problem-Solving</li>
              <li>Responsive Web Design Web Technologies: jQuery, Bootstrap</li>
              <li>Back-End and Database Skills</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="red-glow">WORK HISTORY</h3>
          <div className="ms-4">
            <p className="mb-0">SALES REPRESENTATIVE | 06/2024 to Current</p>
            <p className="mb-0">Vector Marketing - Lubbock, Texas</p>
            <ul>
              <li>Called and scheduled demo appointments with customers</li>
              <li>
                Presented and pitched Cutco products on zoom and in person
              </li>
              <li>Sold and earned commission based pay.</li>
            </ul>
          </div>
          <div className="ms-4">
            <p className="mb-0">DELIVERY DRIVER | 06/2022 to Current</p>
            <p className="mb-0">Papa Johns Pizza - Lubbock, Texas</p>
            <ul>
              <li>Completed deliveries in my car in a timely manner</li>
              <li>Handled and prepared food coming out of the oven</li>
              <li>
                Interacted with customers to take orders and/or answer questions
              </li>
              <li>Kept the store clean and organized.</li>
            </ul>
          </div>
          <div className="ms-4">
            <p className="mb-0">INTERN | 06/2019 to 08/2019</p>
            <p className="mb-0">
              Achieve Manual Physical Therapy - Lakeway, Texas
            </p>
            <ul>
              <li>
                Listened to patients explain feelings or improvements since last
                session
              </li>
              <li>
                Examined and assisted patients with executing physical therapy
                exercises
              </li>
              <li>
                Kept equipment clean and ready to use after patients finished.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="red-glow">EDUCATION</h3>
          <div className="ms-4">
            <p className="mb-0">
              University of Texas At Austin - Online | Full Stack Coding
              Certification
            </p>
            <p className="mb-0"> Expected in 08/2024</p>
            <ul>
              <li>
                Completing professional development in font-end and back-end
                programming
              </li>
            </ul>
          </div>
          <div className="ms-4">
            <p className="mb-0">
              Texas Tech University - Lubbock, Texas | Bachelor of Science -
              Kinesiology
            </p>
            <p className="mb-0">05/2024</p>
            <ul>
              <li>Minor: Athletic Coaching</li>
              <li>GPA: 3.312</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="red-glow">INTERCOLLEGIATE ATHLETICS</h3>
          <div className="ms-4">
            <p className="mb-0">Texas Tech University Athletics, Lubbock, TX</p>
            <p className="mb-0"> Track and Cross Country Runner</p>
            <ul>
              <li>Walked on for 4 years</li>
              <li>
                Devoted an average of 30+ hours per week to training, meetings,
                competitions, traveling, etc.
              </li>
              <li>
                Earned multiple all-conference honors and an all-American honor
              </li>
            </ul>
          </div>
        </div>
      </container>
    </div>
  );
}
