import { Link } from "react-router-dom";

import blog2 from "../assets/img/blog2.svg";
import blog3 from "../assets/img/blog3.svg";
import person from "../assets/img/person.svg";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
// @ts-ignore
import Fade from "react-reveal/Fade";
export interface AppBlogSingleProps {}

const AppBlogSingle: React.SFC<AppBlogSingleProps> = (props: any) => {
  return (
    <>
      <main>
        {props.location?.state?.identity === "ways" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                4 Ways Tech Can Elevate Learning in the Virtual Classroom
              </h1>

              <h4 className="d-block d-sm-none">
                4 Ways Tech Can Elevate Learning in the Virtual Classroom
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Danielle Leboff
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <p className="white-text">
                        Today’s higher ed students are members of Generation
                        Z—digital natives who are accustomed to technology in
                        every facet of their lives. To have a real stake in
                        their own education, Generation Z will benefit from
                        dynamic, immersive learning experiences and the ability
                        to engage and collaborate with their peers.
                        <br />
                        <br />
                        As college courses transitioned online due to the
                        COVID-19 pandemic, the need for flexible tech-based
                        learning activities for engaging students inside and
                        outside the classroom has surged. The right tech-based
                        learning tools and platforms provide students with an
                        immersive experience that matches the way they’ve become
                        accustomed to learning. It also makes it easy to teach
                        online, providing instructors with valuable real-time
                        insights into student progress and understanding.
                        <br />
                        <br />
                        Switching from a face-to-face classroom to an online
                        course requires adjustment for instructors and students
                        alike. If the medium is the message, then you can’t
                        replicate the exact same lecture you had planned for a
                        face-to-face classroom in the online world—at least not
                        without making a few adjustments that will benefit
                        student learning. Moving into online teaching requires
                        an agile approach. Here are four ways instructors can
                        leverage the tools that students are already comfortable
                        with to create high-quality and dynamic learning
                        experiences in the virtual classroom.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        1) Temperature checks
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Insight—and the feedback it generates—is essential in
                        online or hybrid courses, helping online teachers tailor
                        the learning experience to student needs. Feedback, when
                        combined with frequent testing, is equally important for
                        students who want to know where they are excelling and
                        where to focus their study efforts for future
                        assignments.
                        <br />
                        <br />
                        Frequent, low-stakes assessments or ‘temperature checks’
                        give students a number of chances to demonstrate their
                        comprehension of course concepts as the term progresses.
                        Gauging individual student success early and often—and
                        acting on insights—has been shown to significantly
                        impact student retention. These regular evaluations also
                        provide online instructors with an opportunity to share
                        specific feedback on areas to improve, rather than just
                        a percentage or letter grade.
                        <br />
                        <br />
                        To get regular insights on student understanding, have
                        students complete a short ten-minute pre-lecture
                        assignment on their laptops or cellphones. Comprehension
                        checks—in the form of polling or discussion
                        questions—can also be interspersed between lecture
                        slides so instructors can see how students are feeling
                        about newly introduced course concepts, even in online
                        environments.
                      </p>

                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        2) Anonymous discussions
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Today’s college students are much less tolerant of a
                        one-size-fits-all approach to their college education.
                        For instructors, this means shifting from a homogeneous
                        approach to one that is more personalized. Customizing
                        courses based on student learning styles also plays a
                        role in creating inclusive classroom experiences.
                        Promoting inclusivity is ultimately about embracing the
                        different identities, backgrounds and lived experiences
                        that students bring to their classrooms. This starts
                        with equipping educators with the means to understand
                        important and often invisible differences among students
                        in online classrooms.
                        <br />
                        <br />
                        Online polling questions and anonymous discussion
                        threads make it easier to capture the diversity of lived
                        experiences and viewpoints throughout the learning
                        process—even when course material may be polarizing or
                        sensitive in nature. This, in turn, creates a more
                        empathetic teaching and learning environment. Questions
                        and discussion threads can be interspersed with lecture
                        slides, so students who are tuning in asynchronously can
                        participate as well. These interactions generate student
                        data that can be used by instructors to provide timely
                        feedback and tailor future course content.
                      </p>

                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        3) Peer-reviewed assignments
                      </h3>
                      <br />
                      <br />

                      <p className="white-text">
                        Helping Gen Z engage with course material starts with
                        active learning. As part of creating engagement with
                        students, it is important that they learn to give, as
                        well as receive, constructive feedback from their peers
                        as part of the grading process. Peer-reviewed
                        assessments help students develop higher-order thinking
                        skills and make evaluative judgments based on assignment
                        criteria. In giving and receiving feedback, students
                        strengthen essential soft skills that help prepare them
                        for further academic pursuits and professional life.
                        <br />
                        <br />
                        Instructors can assign small groups or partners to
                        review one another’s work as a part of online
                        instruction. This can also be helpful for video
                        assignments, which are purpose-built to assess soft
                        skills, as well as an understanding of course concepts.
                        <br />
                        <br />
                        This exercise—where students are both giving and
                        receiving—builds their investment in coursework. It also
                        clarifies the relationship between their assignments and
                        where they can improve. Students are made to engage with
                        course content in different ways, which encourages the
                        self-reflexivity that strengthens their critical
                        thinking skills over the course of their online
                        education. Peer-reviewed assignments are designed to
                        help students develop into lifelong thinkers and writers
                        who learn to question their own work, values, and
                        engagement instead of simply responding to assignment
                        instructions.
                      </p>

                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        4) Discussion forums
                      </h3>
                      <br />
                      <br />

                      <p className="white-text">
                        Generation Z is highly collaborative and approaches
                        learning with a community-based mindset. They enjoy
                        learning from their peers as well as their instructors
                        and often comprehend course material better in a group
                        setting. Discussion forums and chat channels give
                        students the opportunity to talk about course topics
                        with each other and with the professor, replicating the
                        feel of a traditional classroom. Opportunities for
                        discussion can be interspersed with lecture slides, to
                        break up course content into more digestible chunks.
                        <br />
                        <br />
                        Virtual discussions help students absorb the class
                        material and share ideas with one another. Students are
                        able to gather their thoughts and ideas before sharing
                        their reflective responses. Discussion forums are also a
                        flexible option for engagement in asynchronous classes,
                        as students can add their responses when they view
                        lecture videos on their own time.
                        <br />
                        <br />
                        Discussions forums build community with peers and
                        faculty members in online learning environments. They
                        create opportunities for students to practice and
                        sharpen a number of skills, including the ability to
                        articulate and defend positions, consider different
                        points of view, and create in-depth reflective
                        responses. Discussion threads give all students a voice,
                        especially those who are normally quiet in a
                        face-to-face classroom environment, and those who need
                        more time to compile their thoughts or want to avoid
                        potential conflict or disagreement. They empower
                        students to view and respond to their peers in a safe
                        and respectful manner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "state" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animted slideInDown">
                Sell More Products by Letting Your Customers Design Them for You
              </h1>

              <h4 className="d-block d-sm-none">
                Sell More Products by Letting Your Customers Design Them for You
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Micah Castelo
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <p className="white-text">
                        Some may say 2020 is the year of educational technology.
                        When COVID-19 pushed schools to go remote, educators and
                        students became more reliant on technology than ever
                        before.
                        <br />
                        <br />
                        The transition to this learning environment also
                        revealed new insights on the state of technology in
                        education. The “education system is evolving at an
                        unprecedented rate, and making effective edtech
                        investments will be critical in the year ahead,”
                        according to a recent report by Promethean.
                        <br />
                        <br />
                        Yet there are remaining challenges that need to be
                        addressed. As the report notes:
                        <br />
                        <br />
                        <q>
                          Roadblocks like lack of technologies, students without
                          access to at-home internet connectivity and teachers
                          desperately needing more professional training are
                          widening the digital divide. Administrators have been
                          hard-pressed to provide both short-term solutions and
                          forward-thinking guidance.
                        </q>
                        <br />
                        <br />
                        To get a clearer picture of what the state of ed tech
                        will look like in a post-pandemic world and how schools
                        can prepare for future obstacles, Promethean conducted a
                        survey of nearly 1,200 U.S. school administrators and
                        teachers. Here are key findings from their report.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        Deep Disparities in Digital Access Persist
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        The digital divide is the top challenge school districts
                        are facing, according to the report.
                        <br />
                        <br />
                        Thirty-one percent of survey respondents said it’s their
                        biggest barrier to maximizing student success this
                        school year, followed by the impact of the summer slide
                        (26 percent), lack of technology training for teachers
                        (13 percent) and lack of district-level technology
                        resources (6 percent).
                        <br />
                        <br />
                        Although delivering education through technology is a
                        top priority for many districts, they’ll need to ensure
                        equity and accessibility are top of mind, according to
                        the report.
                      </p>

                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        Technology Training for Teachers Is a Must
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Effective technology training will also be crucial
                        moving forward. Forty-three percent of respondents said
                        schools need to prioritize training teachers on
                        technology to make remote and hybrid learning
                        successful, according to the report. Meanwhile, 34
                        percent of educators said their school lacks a formal
                        technology strategy.
                        <br />
                        <br />
                        <q>
                          An effective implementation strategy begins with
                          ensuring that all instructors are competent and
                          confident with the solutions they are expected to
                          utilize, from interactive displays and 1:1 devices to
                          software that powers online learning,” the report
                          notes. “Further, schools need to offer continued
                          professional development opportunities with edtech to
                          help educators master the evolutions in classroom
                          technologies and their capabilities.
                        </q>
                      </p>

                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        Educators Continue to Embrace Innovation
                      </h3>
                      <br />
                      <br />

                      <p className="white-text">
                        Promethean also found that educators’ welcome
                        innovation. The majority (69 percent) said they are
                        “constantly striving to innovate” with technology.
                        <br />
                        <br />
                        The pandemic has also accelerated digital transformation
                        in schools, which is quickly shaping what education will
                        look like and how it will be delivered in the coming
                        years. Eighty-two percent said that combining technology
                        use with traditional resources and teaching methods is
                        the most likely trend they’ll see in the next ten years.
                        More specifically, respondents expect to see the biggest
                        growth in remote learning (63 percent), virtual learning
                        (54 percent) and online content and resources (50
                        percent) in schools over the next three years.
                        <br />
                        <br />
                        “In a post-COVID world, the classroom is no longer
                        contained within four walls,” according to the report.
                        “Edtech will be the key to expanding beyond them.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "how" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                How to Best Use Data in Remote Learning
              </h1>

              <h4 className="d-block d-sm-none">
                How to Best Use Data in Remote Learning
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Jennifer Brown
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <p className="white-text">
                        Many experts have noted the benefits of data analytics
                        in education. With data, schools can improve ROI on tech
                        investments and empower teachers to make informed
                        decisions about their instructional practices.
                        <br />
                        <br />
                        Today, it’s even more imperative to embrace data
                        analytics and learn how to best use it. Doing so can
                        help school leaders and educators get a better sense of
                        what is and isn’t working during remote learning.
                        <br />
                        <br />
                        For example, Loudoun County (Va.) Public Schools
                        leveraged data analytics to identify which families did
                        not have access to the internet and supplied them with
                        Wi-Fi hotspots when the pandemic hit. The district is
                        also using data analytics to see whether students’
                        engagement levels are high enough to meet individualized
                        education program (IEP) requirements, says Rachel
                        Johnson, the district’s director of enterprise
                        solutions.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        Best Practices for Smarter Data Collection and Analysis
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        a project is formally started, named, and defined at a
                        broad level during this phase. Project sponsors and
                        other important stakeholders due diligently decide
                        whether or not to commit to a project. Depending on the
                        nature of the project, feasibility studies are
                        conducted. Or, as it may require, in an IT project –
                        requirement gathering and analysis are performed in this
                        phase. In the construction industry, a project charter
                        is completed in this phase.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                          textDecoration: "underline",
                        }}
                      >
                        Project Planning Phase
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        With the right data analytics solution, schools can get
                        a holistic snapshot of student and operational outcomes,
                        allowing them to identify pain points and strategically
                        act on those insights.
                        <br />
                        <br />
                        But how can they best use data to improve teaching and
                        student learning and meet districtwide goals?
                        <br />
                        <br />
                        One thing to consider is finding a data analytics
                        dashboard that captures both the qualitative and
                        quantitative factors contributing to remote learning.
                        While it’s important to get the numbers that show how
                        students are performing academically with online
                        instruction or how they’re using digital tools, those
                        are just a few pieces of the puzzle. Collecting
                        quantitative data on certain initiatives is also key to
                        measuring their impact over time and developing any
                        prevention or intervention strategies.
                        <br />
                        <br />
                        For instance, BrightBytes’ cloud-based data and
                        predictive analytics platform gives K–12 schools more
                        visibility into social and emotional learning, which is
                        even more crucial now that many students are missing out
                        on daily face-to-face interactions with their peers and
                        teachers. With the platform’s dynamic survey,
                        administrators and teachers can send students
                        customizable questionnaires and gauge whether they feel
                        supported academically, socially and emotionally during
                        remote learning.
                        <br />
                        <br />
                        Another best practice is to create a data leadership
                        team. This team should be in charge of looking at the
                        data and finding trends that can help inform next steps
                        to take to better support students and staff during
                        remote learning.
                        <br />
                        <br />
                        The data leadership team should also have the necessary
                        training and knowledge to carry out its mission and
                        purpose successfully. If the team doesn’t know how to
                        handle the data, then it will be of no use.
                        <br />
                        <br />
                        Data leadership coaching sessions, which BrightBytes
                        also offers, shows teams how to interpret the data they
                        collect and implement specific strategies based on those
                        insights. Working with a data leadership coach can also
                        encourage more meaningful conversations about remote
                        learning plans and the adoption of educational
                        technology between school and IT leaders, educators,
                        board members, parents and the rest of the school
                        community.
                        <br />
                        <br />
                        Overall, there’s no question that data analytics is
                        critical for student and staff success, particularly
                        during remote learning. But to have a strong, long-term
                        data analytics strategy, school leaders will need to
                        know what type of data to look for, how to analyze it
                        and how to use it to provide ongoing support and
                        guidance for educators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "takeaway" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                Takeaways From Distance Learning
              </h1>

              <h4 className="d-block d-sm-none">
                Takeaways From Distance Learning
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Christopher Klein
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <p className="white-text">
                        The Covid-19 pandemic has wreaked havoc: tragic loss of
                        life, economic disruption, and educational turmoil. In
                        the wake of such chaos, many of us are searching for
                        fragments that suggest something—anything! —good will
                        come out of this chapter in world history.
                        <br />
                        <br />
                        Those anxious to boost learning through edtech met
                        recent disappointment reading Dr. Arran Hamilton and
                        Professor John Hattie’s recent report “Not All That
                        Glitters Is Gold"; it suggests that the overall impact
                        of digital technology on learning has not fundamentally
                        changed since the 1970s. Quality of teaching, they
                        suggest, remains the single most important component to
                        successful education, no matter what the context and no
                        matter what the tools.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        A ‘TECH-TONIC’ SHIFT
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        In pre-Covid times, the adoption of edtech was slowed,
                        primarily, by two factors: limited time for professional
                        development and the existence of good-enough
                        conventional teaching methods. However, there’s good
                        reason to believe that things will be different moving
                        forward. For those of us who have been teaching
                        virtually for almost a year now, pushing pedagogy
                        through an electronic pipeline has bred creative
                        adaptations.
                        <br />
                        <br />I believe the pandemic will be viewed as an
                        incubation period when teachers’ love for children
                        spurred unprecedented technological innovations. My hope
                        is that the material conditions for supporting
                        larger-scale changes are here and will begin showing up
                        in the next wave of educational research studies. In
                        fact, new research supporting this view is already
                        emerging.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        DURABLE ENHANCEMENTS
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Some enhancements of pandemic-era instruction will
                        persist. Here’s what I think those durable power-ups
                        are, as well as how to apply them to your classroom.
                        <br />
                        <br />
                        <b> More experience and familiarity with edtech:</b> The
                        first and most obvious improvement is that all teachers
                        are now more adept users of technology in general. As
                        new edtech continues to emerge, its adoption will be
                        accelerated by improved instructor skill and confidence.
                        Teachers will become better and better at experimenting
                        with new tools and quickly zeroing in on the ones that
                        truly work.
                        <br />
                        <br />
                        <b>
                          More consistent consideration of end-user experience:
                        </b>
                        While student-centered learning has long been a primary
                        goal among educators, teaching through a tech lens has
                        made “end-user first” essential. This has meant
                        simplifying communications, reducing visual clutter on
                        lesson presentations, and seeking regular feedback from
                        students. Ideally, teachers will survey their students
                        frequently—and let them know what their feedback has
                        influenced so that students have more ownership of their
                        learning.
                        <br />
                        <br />
                        <b>Increased cognitive empathy:</b>
                        Regardless of your opinion on the student-camera issue,
                        increased sensitivity to student anxiety and trauma can
                        only improve relationships. But the true benefit of
                        allowing students this privacy is that many teachers
                        without visual access to student faces have come to rely
                        on other—arguably more accurate—ways of gauging student
                        comprehension. Interactive technology like Nearpod, Pear
                        Deck, and Flipgrid will continue to provide the most
                        equitable form of classroom participation, the one where
                        all students contribute. When teachers use interactive
                        tools to check for understanding in class, they’re
                        better prepared to identify and clear up misconceptions
                        before kids leave the room.
                        <br />
                        <br />
                        <b>
                          A better understanding of how to use in-class time:
                        </b>
                        Teachers will continue to use synchronous and
                        asynchronous learning where they have the most impact.
                        Students will get back the small-group collaboration and
                        peer interactions they’ve been craving, while
                        maintaining their access to on-demand content. Ideally,
                        teachers will continue to create lean six-minute videos
                        that distill what would have previously been 30-minute
                        lectures, and they’ll continue to supplement these
                        videos with info-gap activities; structured partner
                        discussions; and time for meaningful, student-generated
                        questions.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        GAME CHANGERS
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Other shifts will be more transformative; these
                        big-picture changes will, I believe, dramatically alter
                        student motivation and engagement.
                        <br />
                        <br />
                        <b>More effective differentiation:</b>
                        Harnessing curiosity and joy in learning will be more
                        achievable because teacher- and organization-curated
                        curricular and pedagogical materials archives will
                        improve. This will open the floodgates for blended and
                        self-paced learning to occur more consistently.
                        Effective differentiation can become the norm as
                        teachers harness learners in producing the conditions of
                        their own differentiation. Kareem Farah’s Modern
                        Classroom Project is already turning this vision into
                        reality.
                        <br />
                        <br />
                        <b>Greater emphasis on mastery:</b>
                        The tension between offering unlimited reassessment
                        (which we know is key for fostering a growth mindset)
                        and the difficulty in grading on a deadline will fade.
                        Constant, tech-augmented, individualized feedback will
                        fuel and channel student energy, leading the shift from
                        grading as compliance to mastery-based grading
                        policies—and shed the busywork that doesn’t just bore
                        students but demoralizes them by tanking their grades.
                        Mastery-based grading would foreground the criteria for
                        success of the content standards and inspire students by
                        showing them how to reach their goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "better" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                A Better Breakout Room Experience for Students
              </h1>

              <h4 className="d-block d-sm-none">
                A Better Breakout Room Experience for Students
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Samantha Shane
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <p className="white-text">
                        The pandemic has completely transformed the way we teach
                        and the way students interact. At the beginning of the
                        school year, I imagined breakout rooms being a popular
                        feature among students during remote learning. I was
                        disappointed when I saw students sitting in silence with
                        their screens off, so I focused on building a community
                        of students that would connect and learn from each
                        other, and ensure that with our limited time, each
                        breakout room would be purposeful and meaningful.
                        <br />
                        <br />
                        I’ve found that the success of breakout rooms hinges on
                        a strong action plan. Here are five strategies I’ve
                        found that improve the overall breakout room experience.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        5 TIPS FOR BETTER BREAKOUT ROOMS
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        <b>1. Individual tasks first, then group tasks: </b> To
                        ensure that time is purposeful when students enter
                        breakout rooms, assign students individual tasks before
                        group work. This strategy helps foster meaningful
                        discussions, and students focus on listening and
                        speaking to each other about their tasks instead of just
                        focusing on finishing the work. This builds a connection
                        and encourages students to synthesize their ideas.
                        <br />
                        Another idea is to have students record their
                        discussion, which holds them accountable for their
                        contributions. I’ve found that using the recording for
                        formative assessment when students create, evaluate, or
                        explore a topic can be very useful.
                        <br />
                        <br />
                        <b> 2. Team-building activities: </b> Starting class
                        with an energizing community builder allows students to
                        form relationships, share ideas, and practice
                        communication skills. When I let students choose their
                        groups and limit the number of participants in breakout
                        rooms, students talk more and have a more intimate and
                        relaxing experience. As students become increasingly
                        comfortable with each other, I switch groups but
                        continue to keep the number of students in the breakout
                        rooms small.
                        <br />
                        The need for social and emotional activities has become
                        more apparent during the pandemic and remote learning.
                        Using only SEL strategies in the breakout rooms and
                        allowing students to work on content individually
                        fosters a strong sense of community in the class. SEL
                        strategies help build self-management, social awareness,
                        and responsibility.
                        <br />
                        These skills translate into creating a dynamic classroom
                        where students understand their purpose and importance
                        in the classroom. When students complete the individual
                        content work, it allows them to practice the SEL skills
                        learned during breakout rooms. As time goes on, students
                        are more apt to participate in activities surrounding
                        content.
                        <br />
                        <br />
                        <b> 3. Student roles:</b> To promote ownership in the
                        breakout rooms, I assign a group leader or ask for a
                        volunteer. The group leader will help establish the
                        expectations and keep the group on task. If the
                        discussion or group assignment is falling silent or
                        off-task, the group leader can engage the students back
                        on track. Having a set role for students eliminates any
                        silence or awkwardness.
                        <br />
                        These roles also promote a sense of ownership of the
                        learning. I’ve considered assigning multiple roles to
                        students in breakout rooms—roles such as curator,
                        timekeeper, checker, or questioner. For example,
                        students with the role of curator can take notes and
                        organize information from all the group members.
                        Teachers can customize roles depending on the activity.
                        <br />
                        <br />
                        <b> 4. Virtual gallery walks: </b>When assigning
                        students to breakout rooms on Zoom, I select “Let
                        Participants Choose Room.” I assign some students at the
                        beginning to be the “movers” and other students to be
                        “presenters” so that each student knows their initial
                        role. The movers change between breakout rooms, and the
                        presenters stay in the rooms to share information. The
                        students switch roles once all students have moved
                        between all the virtual rooms. I use the broadcast
                        feature and timer to ensure that students are on task
                        and continually moving. Students record their findings
                        on a Google Doc as they move through the activity.
                        <br />
                        Another variation of the strategy is to have students
                        create shared meeting links, which I love because it
                        allows students to interact with almost everyone in the
                        class. Since the students frequently switch, discussions
                        rarely fall silent, and students build and extend their
                        discussions.
                        <br />
                        <br />
                        <b>5. Norms and expectations: </b> At the beginning of
                        the school year, my students set the class norms and
                        expectations. Allowing students to create the ground
                        rules of how the group will function enhances the
                        breakout room purpose. Students are aware of the
                        expectations of the group and what they need to
                        contribute, and they understand what’s expected of them.
                        <br />
                        As I continue to plan and try to improve my lessons and
                        student participation, I remind myself of what students
                        need right now, which is a place to connect. Teachers
                        should be aware of the important components of
                        successful online teaching, which include clear,
                        authentic, and meaningful activities. Consider how you
                        can create a space for students to connect, think, grow,
                        and collaborate.
                        <br />
                        As in-person classes eventually resume, I’ll continue to
                        implement these strategies. Social and emotional
                        activities will still be necessary. I’ve seen students
                        improve their critical thinking and collaboration
                        skills. Continually setting norms for groups, giving
                        students assigned roles, and providing time for
                        individual assignments first will foster highly
                        effective student collaboration and critical thinking
                        for a lifetime of learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "guide" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                7 Guidelines for Setting Up Clear Online Lessons
              </h1>

              <h4 className="d-block d-sm-none">
                7 Guidelines for Setting Up Clear Online Lessons
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Elizabeth Skopec
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <p className="white-text">
                        When our classrooms moved online this year, many of us
                        scrambled to find ways to engage students with lessons
                        remotely, only to find that it was no simple task. Many
                        of us, myself included, didn’t know where to start.
                        <br />
                        <br />
                        Even the most basic communications, like the daily
                        lessons that I posted for students, were trickier than I
                        anticipated; my posts careened from being too wordy to
                        too vague, from too content-heavy to too task-heavy.
                        Students felt overwhelmed by their new, independent
                        workload, and I wasn’t streamlining our learning
                        effectively. It just wasn’t easy to transform a
                        50-minute lesson into a clear, pithy post that would
                        serve my high school students.
                        <br />
                        <br />
                        Fortunately, my students weren’t shy about giving
                        feedback that helped me hone my daily posts, and over
                        time, I was able to make my lessons more navigable,
                        readable, and engaging.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        7 GUIDELINES TO SET THE STAGE FOR ONLINE LEARNING
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        <b>1. Same time, same place: </b> Post your lessons in
                        the same place every day. Once students know where
                        you’ll be posting your materials for the day—whether
                        it’s on a certain page of a learning management system
                        or via email—be consistent and encourage kids to
                        bookmark the landing page. Be sure to publish at the
                        same time every day, too. If other teachers in your
                        school can align and post in the same way, all the
                        better.
                        <br />
                        <br />
                        <b>2. Remind and reinforce: </b> Your first few posts
                        should begin with reiterating where and when students
                        should check for lessons. I always posted my daily
                        lessons in the announcements section of our learning
                        management system at 8:00 a.m., and my first week of
                        posts included a reminder that students should always
                        check that space at or after that time. When students or
                        parents emailed with questions, including a stock phrase
                        about when and where to locate lessons helped keep
                        everyone in the know.
                        <br />
                        <br />
                        <b>3. Emphasize the date: </b> Title your posts the day
                        of the week and date. Because some students may fall
                        behind and others may want to refer back to lessons,
                        organizing with the date keeps your posts immutably
                        anchored and sequenced. Students won’t always see the
                        continuity implied in posts that are labeled with the
                        lesson’s focus (such as a thesis statement lesson that
                        precedes the lesson on quotation selection), but they’ll
                        definitely know that Tuesday, September 1, comes before
                        Wednesday, September 2.
                        <br />
                        <br />
                        <b>4. 1-2-3: </b> Use numbers to drive students through
                        your lessons. For me, the first item listed was always
                        attendance, and after that, I listed content for the
                        lesson, relevant documents, and links for submissions. I
                        got positive feedback from students when I kept my posts
                        light on language, organized by simple numerical
                        signposts. This was also a helpful way for me to see
                        when my lesson was getting out of hand; once I got to
                        number five, I knew that I was probably at the outer
                        limits of what most students could reasonably tolerate
                        from me in a day.
                        <br />
                        <br />
                        <b>5. Link everything: </b> During online learning,
                        students are already in a tough spot (just like we are),
                        and any little roadblock—like being unable to locate a
                        rubric—is going to feel insurmountable. It takes an
                        extra minute to link a document, a helpful website, or
                        an assignment submission, but if you don’t have links in
                        the post, you’ll spend a lot more time answering emails
                        and chasing after kids who didn’t do the work or didn’t
                        do the work properly.
                        <br />
                        <br />
                        <b>6. Remember when…? </b> At the end of most posts, I
                        included a summary of the previous day’s post, cut down
                        to the most important points and links. This was usually
                        just a few sentences long, harvested from the previous
                        post in a simple cut-and-paste, but students appreciated
                        the convenience of being able to access refresher
                        materials easily. I found this was also helpful for kids
                        who tended to access the course inconsistently; if they
                        tried to jump into a day’s lesson, this brief review was
                        helpful in orienting them to the day’s learning. And,
                        because this is the last section of the post, students
                        who didn’t need it became acclimated to skipping it,
                        which was easier to do at the end of the post than if it
                        had been inserted elsewhere.
                        <br />
                        <br />
                        <b>7. Include a video overview: </b> Lastly, create a
                        short screen cast with a voice-over that walks students
                        through the day’s post. This was a step I skipped for
                        the first few weeks of remote learning, and when my
                        students asked for it, it felt a little silly—why do
                        they want a two-minute video of me reading the post to
                        them? But once I did it, I saw that it helped knit
                        together all of the seemingly disparate pieces of the
                        day’s lesson, giving students a more holistic view of
                        their “in class” time that day. This also turned out to
                        be a helpful way to proofread my own work, ensuring that
                        none of those typos or dead links made it to my final
                        publication. Once I made a video overview, I inserted it
                        at the top of my post, above the first element in my
                        list.
                        <br />
                        Online learning will never replicate our time in the
                        classroom, but following these simple steps can help
                        keep learning accessible, which is a pretty good place
                        to start.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "eqip" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                Get Equipped For Success: Digital Learning In Higher Education
              </h1>

              <h4 className="d-block d-sm-none">
                Get Equipped For Success: Digital Learning In Higher Education
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Christopher Rousset
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Succeeding With Digital Learning In Higher Education
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Online higher education was gaining strides long before
                        the pandemic ushered in a new era of remote work and
                        learning. In many aspects, academia was far ahead of
                        other industries in terms of online learning, but that
                        doesn’t mean last year’s massive transition was all
                        smooth sailing. The dramatic shift to online learning
                        has created new challenges across the spectrum, for
                        students, professors, and administrators alike. Not only
                        must curriculum be delivered over virtual lines, but new
                        ways have needed to be found for other activities key to
                        academic growth including study groups and office hours.
                        The ways learning is evaluated and engagement measured
                        have also had to dramatically change.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Rise of Remote Learning
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Many universities and colleges were already offering
                        online courses in some capacity, and online-only
                        institutions like the University of Phoenix have
                        continued to gain traction. There are now dozens of
                        massive open online course (MOOC)-based degrees
                        worldwide, including master’s degrees. Georgia Tech’s
                        pioneering online master’s in computer science, for
                        example, recently announced they’ve exceeded 10,000
                        enrollments. In fact, 2,500 colleges nationally offer
                        online programs and the 100 largest players have nearly
                        50% of student enrollment, according to the U.S.
                        Department of Education.
                        <br />
                        <br />
                        Even with all of this development in terms of online
                        courses, the massive shift to remote learning last year
                        took a huge toll on universities in the macro sense. The
                        shift came quickly, without much time to prepare, and
                        that meant higher education institutions had to adjust
                        fast in terms of how learning would be delivered.
                        Therein lies the problem.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Can You Teach Old Tools New Tricks?
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        While education has been one of the pioneering
                        industries when it comes to the adoption of virtual
                        learning tools, in some ways, that’s also what’s holding
                        it back now. In other words, higher ed institutions were
                        some of the first to adopt virtual tools, but many
                        haven’t upgraded to the latest and greatest options;
                        they’re still using the same tools from five to seven
                        years ago, if not longer.
                        <br />
                        <br />
                        And for many, this means that not only are they using
                        outdated tools but that they also may not be
                        cloud-based. That limits their availability and
                        capability. These older solutions may not be keeping
                        pace with the needs that today’s higher education
                        students have. Many, if not most, are digital natives
                        who have grown up with more advanced technology; they
                        easily spot old-style interfaces and clunky systems and
                        are less likely to engage with them.
                        <br />
                        <br />
                        Other institutions may have tried a lift-and-shift
                        approach, similar to what has been done largely in the
                        K-12 sector throughout the past year. Schools and
                        teachers have attempted to take their same in-classroom
                        approach to teaching and simply transition it to virtual
                        collaboration tools like Microsoft Teams or Google
                        Classroom, which doesn’t work. You can’t just swap out a
                        virtual classroom for a physical one without making a
                        number of adjustments. Traditional teaching tools like
                        handouts or physical models must be replaced with
                        virtual-friendly tools, and physical body language can’t
                        always be properly conveyed through a screen, to name
                        just a couple of differences.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Not All Online Learning Is Created Equal
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        There are a lot of tools out there for hosting virtual
                        classrooms or otherwise conducting virtual teaching, so
                        how do you decide what’s best? It’s not just about a
                        collaboration platform; you need a tool that
                        incorporates the ability to track things like user
                        engagement and learning engagement.
                        <br />
                        <br />
                        User engagement is a significant challenge for any kind
                        of education but especially online learning where, as an
                        instructor, you don’t have the advantage of being
                        physically in the same room as your students. The days
                        of catching students passing notes in class or, to use a
                        modern example, texting under their desks, are gone for
                        now. And teachers have a harder time seeing if students
                        are interested in the material because they’re looking
                        at dozens of tiny faces on a screen rather than
                        life-sized faces in a room.
                        <br />
                        <br />
                        One way that remote education is changing is the
                        division of students into smaller virtual groups. The
                        teacher still guides the class, but then students form
                        smaller collaboration groups in virtual breakout rooms.
                        Teachers need an online system that can facilitate this.
                        <br />
                        <br />
                        It’s also important to remember that higher ed is not
                        the same as corporate learning—the higher education
                        sector has different needs. The delivery of a course in
                        higher ed needs to be able to manage multiple different
                        types of learning activities over time. If you’re
                        teaching college-length classes, you’re going to have
                        multiple assignments, multiple assessments, and multiple
                        topics you need to teach about and track.
                        <br />
                        <br />
                        The measurement of learning is also very different. In a
                        corporate environment, you're going to measure the
                        outcome of learning based on skills or competencies that
                        learners have attained. It’s less about translating into
                        job skills and more about translating learning into
                        grades. You need a platform where you can have
                        assignments that can be graded and a workflow between
                        you and the student.
                        <br />
                        <br />
                        That’s not typically necessary in the corporate
                        environment, so it has to be taken into consideration
                        when looking at virtual tools to help this sector
                        succeed. These realities make it more important than
                        ever to invest in a learning management system in
                        addition to collaboration and communication platforms.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Equipped to Educate
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        The education sector was an early adopter of online
                        learning, and now it’s time to build on that legacy by
                        adopting today’s tools to meet today’s remote education
                        needs. Educators need flexible, agile solutions for all
                        phases of the teaching process, including ways to keep
                        their students engaged from a distance. It requires
                        really examining the unique teaching needs of
                        instructors to ensure the right solution is selected.
                        Not all solutions are the right fit for every need and
                        it’s important to really and truly evaluate all of the
                        above facets in order to ensure success during this
                        challenging time—and into the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "adopt" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                How To Adopt An eLearning Model For Your Corporate Training
                Programs
              </h1>

              <h4 className="d-block d-sm-none">
                How To Adopt An eLearning Model For Your Corporate Training
                Programs
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Shane Barker
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        5 Important Steps That You Should Follow
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Any organization is only as good as its employees. If
                        you want your company to thrive, you need to make sure
                        that your employees are growing their skills. To
                        facilitate employee development, training programs are
                        important. With remote work becoming the norm, you also
                        need to find ways to conduct these sessions online. The
                        good news is that the internet makes it possible for you
                        to add an element of fun to corporate training sessions.
                        With videos, polls, quizzes, and other such features,
                        you make your sessions more interactive and engaging. If
                        you do it right, it can even make them a lot more fun
                        than in-person training.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        5 Steps To Create A Great eLearning Corporate Training
                        Program For Your Organization
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        If you are looking to adopt an eLearning corporate
                        training program for your organization, here are some
                        strategies that you might want to incorporate:
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        1. Be Clear About Your Purpose
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        The first step to creating an effective eLearning
                        corporate training program is to get clarity on your
                        purpose. What is it that you want to accomplish with
                        your training sessions?
                        <br />
                        Some of the most common purposes for such programs
                        include:
                        <br />
                        <ul>
                          <li> Bridge a knowledge gap</li>
                          <li> Improve efficiency [1] and performance </li>
                          <li> Introduce the latest technologies </li>
                          <li> Onboard new employees </li>
                        </ul>
                        Once you are clear about the purpose of your employee
                        training program, you can list your goals. However, make
                        sure your goals are not phrased vaguely.
                        <br />
                        Your goals should be SMART (i.e., specific, measurable,
                        actionable, realistic, and timely). Based on your
                        purpose and goals, you should set a clear budget for the
                        entire eLearning corporate training program.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        2. Design The Content Outline
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        After you are clear about your purpose, goals, and
                        budget, it’s time to start designing your content. Don’t
                        make the mistake of copying your policies into a
                        document for the training program. It’s also a bad idea
                        to simply copy online materials and package them as your
                        own.
                        <br />
                        <br />
                        Your training materials should be designed keeping in
                        mind the needs of your target audience. You know them
                        the best, so it’s best to create a unique training
                        program. Begin by listing the important sub-points you
                        want to cover.
                        <br />
                        <br />
                        When you break complex topics into easy-to-digest,
                        simpler segments, it becomes easier for your employees
                        to retain that information. This kind of micro learning
                        experience can also help hold their attention span.
                        Furthermore, you can use mind maps, videos, images,
                        infographics, and audio clips to make your content more
                        engaging. Such multimedia elements can help break the
                        monotony of text. It can also go a long way to hold your
                        audience’s attention.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        3. Consider Using Gamification Elements
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        For better employee engagement, you can also use
                        gamification elements like quizzes and interactive
                        games. Not only can they keep users entertained but they
                        can also make learning more fun.
                        <br />
                        <br />
                        Not sure where to include them?
                        <br />
                        <br />
                        You can add these elements after the end of each
                        section. This way, you can also test if your employees
                        have absorbed the information from the training session.
                        <br />
                        <br />
                        Employees can also assess their own strengths and
                        weaknesses through gamified learning. It is also a great
                        way to provide them with instant feedback and instill a
                        sense of accomplishment in them. Such immersive,
                        memorable experiences can also make training seem less
                        intimidating and more enjoyable.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        4. Use Real-World Examples And Case Studies
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        To illustrate your point and explain a concept in
                        detail, make sure you are using case studies and
                        real-life examples. This can promote a deeper
                        understanding of complex topics and give them a glimpse
                        of those concepts in action.
                        <br />
                        <br />
                        If your training program is focused on helping employees
                        gain problem-solving and analytical skills, then you
                        should definitely use case studies. By observing
                        real-life scenarios and trends, your employees can
                        relate to the concepts better.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        5. Pick The Right Software Solution
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Once your content is ready, it’s time to pick the right
                        software solution to conduct your corporate training
                        program. There are multiple cloud-based Learning
                        Management Systems [2] (LMS) available in the market.
                        <br />
                        <br />
                        The best program will depend on your budget and
                        requirements. While shortlisting options, make sure you
                        keep the following criteria in mind:
                        <br />
                        <ul>
                          <li>Mobile-friendliness </li>
                          <li>User-friendliness </li>
                          <li>Scalability </li>
                          <li>Customer service </li>
                          <li>Content customization options </li>
                          <li>Chat functionality </li>
                          <li>Collaboration options </li>
                          <li>Personalization features </li>
                          <li>Reporting and analytics </li>
                        </ul>
                        Not sure if you’ve found the right online learning
                        platform that fits your organization’s needs? Pick a
                        software program that has a free trial. That can help
                        you get a better idea of the functionality that it
                        offers.
                        <br />
                        <br />
                        Also, check out customer reviews on multiple social
                        media platforms and other sites to get a better
                        understanding of the program’s features.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Conclusion
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Designing an effective employee training program isn’t
                        just about curating content and making a few slides.
                        Instead, it’s all about knowing who your audience is and
                        designing a curriculum that is suitable for them. From
                        the onset, you should know your purpose and goal of the
                        training program. This clarity can help you design your
                        content more effectively. To keep users engaged, you
                        should break your content down into multiple sections
                        and subsections. Micro learning ensures that your
                        audience won’t get overwhelmed by too much information.
                        It can go a long way in holding their attention and
                        keeping them engaged.
                        <br />
                        <br />
                        If you want to test their knowledge, you can also
                        include quizzes and interactive games after each topic.
                        In addition to this, you should include real-life
                        examples so that users can get a better understanding of
                        even complex topics. Lastly, pick a software solution to
                        conduct your corporate training program. Make sure you
                        pick the one that meets all of your requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "learning" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                Learning Ecosystem: Past, Present, And Future
              </h1>

              <h4 className="d-block d-sm-none">
                Learning Ecosystem: Past, Present, And Future
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Satyabrata Das
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Learning Ecosystem
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        The elements in an ecosystem interact directly or
                        indirectly with one another and influence one another.
                        In a broader sense, an ecosystem means any group of
                        elements that form an interactive set that influence one
                        another. A good example of an ecosystem is Apple’s
                        ecosystem of iOS, Mac OS, iPhone, iPad, Mac Books, and
                        the plethora of apps. Similarly, a university can be
                        considered as an ecosystem that comprises students,
                        teachers, administrators, other staff, books, libraries,
                        sports clubs, and so on.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        What Does A Learning Ecosystem Mean?
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        In simple terms, a learning ecosystem of an organization
                        comprises its people, technology used for learning, the
                        content used for learning, the prevailing culture, and
                        the strategy that exists in the organization. All the
                        elements of a learning ecosystem directly or indirectly
                        impact the learning that happens in that organization.
                        <br />
                        <br />
                        Similar to a biological ecosystem that has many
                        interacting species living in an environment, a learning
                        ecosystem also includes people in an organization
                        corresponding to living species, pieces of content, the
                        technology used to create and deliver the content
                        corresponding to natural resources, and of course the
                        learning culture that is analogous to the environment.
                        <br />
                        <br /> The similarity does not end here, a living
                        ecosystem can be healthy or deteriorating,
                        self-sustaining, or needing support, and so does a
                        learning ecosystem. What it means is that an
                        organization must have a good understanding of its
                        learning ecosystem so as not to let it deteriorate.
                        <br />
                        <br /> In the past, the learning ecosystem was very
                        simple, comprising of learners, educators, and the
                        content. With the advancement of learning technology and
                        globalization, at present, the learning ecosystem is
                        fairly complex with numerous options for content,
                        delivery mechanism, and of course, the introduction of
                        informal learning, such as social learning,
                        microlearning, etc.
                        <br />
                        <br /> Today’s L&D leaders need to be aware of the
                        complex interaction of the human mind with content and
                        technology that can bear a huge impact on an
                        organization's learning behavior. A major paradigm shift
                        has already happened from past to present in the
                        learning ecosystem with the introduction of eLearning.
                        Learning has evolved from being teacher-centric to
                        content-centric and is evolving to become
                        learner-centric.
                        <br />
                        <br />
                        Let’s take a look at the future of the learning
                        ecosystem, which is going to be based on present trends:
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Focus on competency
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        In the corporate world, what matters more than knowledge
                        is the competency of the workforce. Thus, the major
                        focus of learning is shifting from theoretical knowledge
                        to practical job competency.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Personalization
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Every individual has their distinct learning path and
                        capabilities. Personalization of content has slowly been
                        a trend; however, it needs to be much more focused. In
                        the coming future, we are going to experience a whole
                        lot more personalization of learning content with a
                        tailored curriculum.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Curated content
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        With Artificial Intelligence and Machine Learning
                        evolving at a "never-before" rate, content curation is
                        shifting from manual to automated. Learning Management
                        Systems are becoming more and more intelligent and
                        responsive to learners’ interacting.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        AR and VR
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        With Augmented Reality and Virtual Reality becoming more
                        accessible, educational content is going to shift toward
                        AR and VR to maximize personalization.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Wearable technologies
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Wearable technologies are surely going to play a big
                        role in Learning Experience Design. Wearable
                        technologies can be utilized to understand user behavior
                        and customize the learning experience accordingly.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Social connection
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Humans are social, so learning has to be social also.
                        Already there is a significant shift toward social
                        learning, and the future will have more.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Self-directed learning
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        There are always highly motivated and potential learners
                        who wish to go beyond the regular curriculum. They can
                        explore self-directed learning, and modern Learning
                        Management Systems have the beginnings of self-directed
                        learning.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Conclusion
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        The learning ecosystem is, no doubt, evolving at a
                        significant rate. Learning is no longer a standalone
                        learner-teacher-content interaction, but much more. It
                        has now become an enriched complex mechanism that has
                        the potential to truly maximize the learning
                        outcome—provided it is being nurtured and guided
                        properly. A word of caution must be said here, an
                        ill-nurtured learning ecosystem might equally be
                        detrimental for the organization in shaping the
                        capabilities of its future workforce.
                        <br />
                        <br />
                        The eLearning industry is surely going to play a big
                        role in shaping the learning ecosystem and making it
                        more fruitful, both for individuals and corporations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : props.location?.state?.identity === "eLearning" ? (
          <div>
            <div
              className="hero-page-about"
              style={{ padding: "0 5%", textAlign: "center" }}
            >
              <h1 className="d-none d-sm-block animated slideInDown">
                eLearning Is The Tool To Stay Ahead
              </h1>

              <h4 className="d-block d-sm-none">
                eLearning Is The Tool To Stay Ahead
              </h4>
            </div>

            <div style={{ backgroundColor: "black" }}>
              <div className="container space-bottom-2">
                <div className="row space-top-3 space-bottom-2">
                  <div
                    className="col-lg-12"
                    style={{ padding: "5% 0", position: "relative" }}
                  >
                    <img
                      src={blog3}
                      alt=""
                      className="img-fluid img-data d-none d-lg-block"
                    />
                    <img
                      src={blog2}
                      alt=""
                      className="img-fluid img-data d-lg-none"
                    />
                  </div>

                  <div
                    className="row space-top-1 "
                    style={{ marginBottom: "0 !important", width: "100%" }}
                  >
                    <div className="col-1">{""}</div>
                    <div className="col-8">
                      <p style={{ margin: "0px", color: "white" }}>
                        Emmy Michelle
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-lg-12"
                    style={{ padding: "5%", position: "relative" }}
                  >
                    <div className="row mx-n2 mx-lg-n3">
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        Use eLearning To Stay Ahead
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        This is the year to start thinking about your education,
                        but only if you want to stay ahead. Your employees will
                        demand it anyway.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        1. Back Up Your Strategies, Not Your Classrooms
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        New data indicates that 77% of new learning courses will
                        be delivered through an app or online platform in 2020.
                        It's the future, and it means teachers are dead. The new
                        breed of teachers may be virtual learners themselves, so
                        they are no longer needed to meet the classroom
                        standard.
                        <br />
                        <br />
                        If you are training someone to take a high school
                        equivalency test or better their coding skills, consider
                        what you can offer through your training resources.
                        Cloud-based video, text, and whiteboard lessons are easy
                        to access anywhere. On-demand videos are another option.
                        The options are almost endless.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        2. Implement The Fastest, Most Efficient Workforce
                        Anywhere
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        The majority of new jobs are expected to be created
                        through an Artificial Intelligence environment,
                        according to the Center for Applied BI and Analytics at
                        the University of Maryland. Bots will take over the
                        "dirty work" and free humans to focus on new jobs.
                        <br />
                        <br />
                        Universities are starting to realize the need for
                        massive upgrades to accommodate these changes. New
                        courses will emphasize emerging technology and
                        automation. Artificial Intelligence courses will be
                        common for employees to know about and for IT to hire
                        for.
                        <br />
                        <br />
                        The long-term consequences are huge, and the pace of
                        change is unprecedented. But it's here, and we can
                        expect massive shifts in how we teach, educate, and
                        train. The future is only a year away, but how well
                        prepared are you?
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        3. Time To Upgrade Your Classroom
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Whether it's a 10-year-old that has surpassed your
                        expectations or an employee you're searching to keep on
                        top of your competitive edge, you've got a growing list
                        of applicants. To bring in more revenue, companies are
                        investing heavily in courses and coaching. As hiring
                        grows, schools are looking for new ways to do this.
                        Teaching is now about more than meeting curriculum
                        requirements. It's about preparing students to function
                        in real-world environments.
                        <br />
                        <br />
                        There are no shortcuts around meeting Learning and
                        Development requirements, this will always remain an
                        investment, but schools are feeling the pressure to
                        compete with training and development on a different
                        level. You can no longer just meet the basic
                        requirements.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        4. It's Time To Take Your Knowledge To The Next Level
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        Universities are, for the most part, tied to a classroom
                        model. They only open their doors at certain times of
                        the year, and most of the courses are held in the
                        morning. The result? Most students don't spend enough
                        time in the classroom to get the most out of their
                        education. They don't receive the best faculty or
                        professional development.
                        <br />
                        <br />
                        Now is the time to begin thinking about creating and
                        providing online courses to build a pipeline of talent
                        for your organization. For the first time ever, everyone
                        can take a course from an academic expert through an
                        online platform. It's a powerful change, but one that is
                        now here to stay.
                      </p>
                      <br />
                      <br />
                      <h3
                        style={{
                          color: "#82dec9",
                        }}
                      >
                        5. Ready Or Not, The Real World Is Here
                      </h3>
                      <br />
                      <br />
                      <p className="white-text">
                        The American worker is now expected to be ready for
                        anything. If there is a crisis or a disaster, there is
                        an expectation that everyone will be able to do their
                        job to the best of their ability. Employees have always
                        worked in the real world, but the expectations on the
                        job are now much higher.
                        <br />
                        <br />
                        People are expected to be ready to work virtually or in
                        the most efficient way possible. It is expected that the
                        best software programs will work flawlessly and be
                        maintained without breaking. The software should not
                        require frequent updates or a lot of assistance to
                        maintain it.
                        <br />
                        <br />
                        We are, unfortunately, experiencing issues across the
                        industry, from education to big business. People who
                        work in these sectors are dealing with this reality and
                        are trying to figure out how to change. It can be
                        frustrating. But it is the only way to change quickly
                        enough.
                        <br />
                        <br />
                        This is just a glimpse of the trends and issues that are
                        causing schools to make these types of changes. It's a
                        new day for education, and education leaders are
                        listening. For every trainee who completes your program,
                        there are multiple applicants who will come after them
                        to take the courses you can't offer. It's a good problem
                        to have, but one that you will need to solve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-lg-flex align-items-lg-center space-top-2 space-lg-0 min-vh-lg-100">
            <div className="row" style={{ width: "100%" }}>
              <Zoom>
                <div className="col-6 offset-3">
                  <h1 style={{ textAlign: "center" }}>Page Not Found</h1>
                  <Link to="/" className="btn btn-primary btn-block">
                    Go to Home
                  </Link>
                </div>
              </Zoom>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default AppBlogSingle;
