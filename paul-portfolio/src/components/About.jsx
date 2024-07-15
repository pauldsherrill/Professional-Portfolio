export default function About() {
  return (
    <div className="container-fluid body d-flex flex-column align-items-center">
      <div className="d-flex justify-content-around align-items-center col">
        <div className="about">
          <h1 className="audiowide-regular name text-start red-glow">
            PAUL SHERRILL
          </h1>
          <h1 className="audiowide-regular name text-start grey">
            WEB DEVELOPER
          </h1>
          <p className="audiowide-regular text-start grey">
            Hello there! I am a fullstack web developer currently enrolled at
            the University of Texas at Austin Fullstack Coding Bootcamp. I am
            proficient in many different languages and technologies but I
            specialize in JavaScript where I know both front-end and back-end
            logic. I just recently graduated from Texas Tech University in
            Lubbock where I studied Kinesiology with a minor in Athletic
            Coaching. While completing my undergrad, I also competed as a
            student-athlete on the track and field team. I am a hard-worker who
            loves to challenge myself on projects and am always trying to learn
            and perfect my coding (if thats even possible!). Feel free to look
            around my portfolio and dont hesitate to contact me for anything!
          </p>
        </div>
        <div>
          <img
            className="pic"
            id="dynamic-image"
            src="./assets/profile.JPG"
            alt="About Me Pic"
            width="500"
            height="400"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center nav-item mt-4">
        <a type="button" className="audiowide-regular button btn" href="work">
          VIEW MY WORK →
        </a>
      </div>
    </div>
  );
}
