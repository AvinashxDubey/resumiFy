const ResumePreview = (props) => {
  const {
    contactInfo = {},
    summary,
    educationList,
    internships,
    projects,
    skills,
    achievements
  } = props;

  // Destructure contactInfo fields
  const { name, email, phone, linkedin, github } = contactInfo;

  return (
    <div className="resume-preview min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="bg-white text-black shadow-lg rounded-lg p-8 w-full max-w-3xl">
        {/* Contact Section */}
        <section id="Contacts">
          <h1 className="text-3xl font-bold mb-2">{name || "Your Name"}</h1>
          <p className="text-sm text-gray-700 mb-4">
            {email || "your.email@example.com"} | {phone || "123-456-7890"} |{" "}
            {linkedin || "linkedin.com/in/yourprofile"} | {github || "github.com/yourhandle"}
          </p>
        </section>

        <hr className="border-gray-400 mb-4" />

        {/* Summary */}
        <section id="ProfessionalSummary">
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p className="mb-4 whitespace-pre-wrap">{summary || "No summary provided."}</p>
          <hr className="border-gray-400 mb-4" />
        </section>

        {/* Education */}
        <section id="Education">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {educationList?.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {educationList.map((edu, idx) => (
                <li key={idx}>
                  <p className="font-medium">{edu.institute}</p>
                  <p className="text-sm">
                    {edu.degree} {edu.score && `- CGPA: ${edu.score}`}<br />
                    {edu.duration} – {edu.location}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm mb-4">No education details provided.</p>
          )}
          <hr className="border-gray-400 mb-4" />
        </section>

        {/* Internships */}
        <section id="Internships">
          <h2 className="text-xl font-semibold mb-2">Internships</h2>
          {internships?.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {internships.map((intern, idx) => (
                <li key={idx}>
                  <p className="font-medium">{intern.company}</p>
                  <p className="text-sm">
                    {intern.role} ({intern.duration})<br />
                    <span className="text-gray-700 whitespace-pre-wrap">{intern.description}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm mb-4">No internships listed.</p>
          )}
          <hr className="border-gray-400 mb-4" />
        </section>

        {/* Projects */}
        <section id="Projects">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          {projects?.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {projects.map((proj, idx) => (
                <li key={idx}>
                  <p className="font-medium">{proj.title}</p>
                  <p className="text-sm text-gray-700">
                    {proj.description}
                    {proj.link && (
                      <>
                        <br />
                        <a
                          href={proj.link}
                          className="text-blue-500 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Link
                        </a>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm mb-4">No projects added yet.</p>
          )}
          <hr className="border-gray-400 mb-4" />
        </section>

        {/* Skills */}
        <section id="Skills">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          {skills?.length > 0 ? (
            <ul className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, idx) => (
                <li key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm mb-4">No skills provided.</p>
          )}
          <hr className="border-gray-400 mb-4" />
        </section>

        {/* Achievements */}
        <section id="Achievements">
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          {achievements?.length > 0 ? (
            <ul className="list-disc pl-5 mb-4">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm">No achievements listed.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ResumePreview;