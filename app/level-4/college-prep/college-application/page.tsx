import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Share2, CheckCircle } from "lucide-react"
import SummarySubmission from "@/components/summary-submission"

export default function CollegeApplicationPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link href="/level-4" className="mb-8 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Level 4 Resources</span>
      </Link>

      <div className="mb-8 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-slate-200 text-slate-800 hover:bg-slate-200">Level 4</Badge>
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100">College Preparation</Badge>
          <Badge variant="outline">Applications</Badge>
          <Badge variant="outline">Essays</Badge>
          <Badge variant="outline">Planning</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Navigating the College Application Process
        </h1>
        <p className="text-slate-600">Reading time: 15 minutes</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Article
              </CardTitle>
              <CardDescription>A comprehensive guide to the college application process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <h2>Introduction: The Journey to College</h2>
                <p>
                  The college application process can feel like navigating a complex maze with no clear map. With
                  thousands of colleges and universities, each with their own requirements, deadlines, and expectations,
                  it's easy to feel overwhelmed. However, with proper planning, research, and organization, you can
                  transform this potentially stressful experience into an opportunity for self-discovery and growth.
                </p>
                <p>
                  This guide will walk you through the college application process step by step, from initial
                  exploration to final decisions. Whether you're just beginning to think about college or already deep
                  in the application process, you'll find valuable information to help you make informed choices and
                  present your strongest application.
                </p>

                <h2>Timeline: When to Start and What to Do</h2>
                <p>
                  The college application process ideally begins well before your senior year. Here's a recommended
                  timeline to help you stay on track:
                </p>

                <h3>Freshman and Sophomore Years (Grades 9-10)</h3>
                <ul>
                  <li>
                    <strong>Focus on academics:</strong> Establish strong study habits and maintain good grades.
                    Colleges look at your entire high school record.
                  </li>
                  <li>
                    <strong>Explore interests:</strong> Join clubs, sports, or activities that genuinely interest you.
                    Quality involvement is more important than quantity.
                  </li>
                  <li>
                    <strong>Begin standardized test prep:</strong> Familiarize yourself with the PSAT, which serves as
                    practice for the SAT and can qualify you for National Merit Scholarships.
                  </li>
                  <li>
                    <strong>Start thinking about potential majors:</strong> Consider your interests, strengths, and
                    possible career paths, but keep an open mind.
                  </li>
                </ul>

                <h3>Junior Year (Grade 11)</h3>
                <ul>
                  <li>
                    <strong>Fall:</strong>
                    <ul>
                      <li>Take the PSAT/NMSQT (offered in October).</li>
                      <li>
                        Begin researching colleges: Consider factors like size, location, academic programs, campus
                        culture, and cost.
                      </li>
                      <li>
                        Meet with your guidance counselor to ensure you're on track with required courses for college
                        admission.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Winter:</strong>
                    <ul>
                      <li>
                        Prepare for standardized tests: Consider whether the SAT, ACT, or both are better suited to your
                        strengths.
                      </li>
                      <li>
                        Research potential scholarships and financial aid opportunities. The FAFSA (Free Application for
                        Federal Student Aid) becomes available on October 1 of your senior year, but it's good to
                        understand the process early.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Spring:</strong>
                    <ul>
                      <li>
                        Take the SAT or ACT (or both). Many students take these tests multiple times to improve their
                        scores.
                      </li>
                      <li>
                        Visit college campuses if possible. Spring break is an ideal time as colleges are typically in
                        session.
                      </li>
                      <li>
                        Begin thinking about teachers who might write your recommendation letters. Build relationships
                        with these teachers.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Summer:</strong>
                    <ul>
                      <li>
                        Create a preliminary college list, including "reach," "match," and "safety" schools based on
                        your academic profile.
                      </li>
                      <li>
                        Consider meaningful summer activities: internships, volunteer work, summer courses, or
                        employment.
                      </li>
                      <li>Begin brainstorming topics for your personal statement and supplemental essays.</li>
                    </ul>
                  </li>
                </ul>

                <h3>Senior Year (Grade 12)</h3>
                <ul>
                  <li>
                    <strong>Fall:</strong>
                    <ul>
                      <li>Finalize your college list (typically 6-10 schools).</li>
                      <li>
                        Request letters of recommendation from teachers and counselors, providing them with a resume or
                        "brag sheet" highlighting your accomplishments.
                      </li>
                      <li>
                        Complete the FAFSA and CSS Profile (if required by your schools) as soon as possible after
                        October 1.
                      </li>
                      <li>
                        Write, revise, and finalize your personal statement and supplemental essays. Get feedback from
                        trusted advisors.
                      </li>
                      <li>
                        Submit applications for Early Decision or Early Action programs if applicable (typically
                        November).
                      </li>
                      <li>
                        Continue to maintain strong grades. Colleges will see your first-semester senior year grades.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Winter:</strong>
                    <ul>
                      <li>Submit regular decision applications (typically January 1, but deadlines vary).</li>
                      <li>
                        Ensure all supporting materials (test scores, transcripts, recommendations) have been sent to
                        your schools.
                      </li>
                      <li>Apply for scholarships. Many deadlines fall between December and March.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Spring:</strong>
                    <ul>
                      <li>
                        Review acceptance letters and financial aid offers. Compare packages carefully, considering both
                        immediate costs and potential student loan debt.
                      </li>
                      <li>
                        Visit (or revisit) campuses of schools you're seriously considering, particularly if you haven't
                        seen them before.
                      </li>
                      <li>
                        Make your final decision and submit your enrollment deposit by May 1 (National College Decision
                        Day).
                      </li>
                      <li>
                        Notify other schools of your decision to decline their offers, allowing them to offer your spot
                        to waitlisted students.
                      </li>
                      <li>
                        Send your final transcript to your chosen college and complete any required housing or
                        orientation forms.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2>Researching Colleges: Finding Your Best Fit</h2>
                <p>
                  With thousands of colleges and universities in the United States alone, finding the right fit requires
                  thoughtful research. Consider these factors:
                </p>

                <h3>Academic Factors</h3>
                <ul>
                  <li>
                    <strong>Available majors and programs:</strong> Does the school offer programs aligned with your
                    interests? If you're undecided, does it offer strong general education and exploration
                    opportunities?
                  </li>
                  <li>
                    <strong>Academic rigor and reputation:</strong> Research the strength of programs in your areas of
                    interest. Look beyond overall rankings to program-specific evaluations.
                  </li>
                  <li>
                    <strong>Class sizes and teaching approach:</strong> Consider whether you prefer large lectures or
                    small, discussion-based classes. What is the student-to-faculty ratio?
                  </li>
                  <li>
                    <strong>Research and internship opportunities:</strong> Are there opportunities for undergraduate
                    research or connections to internships in your field?
                  </li>
                  <li>
                    <strong>Graduation rates and outcomes:</strong> What percentage of students graduate in four years?
                    What are the post-graduation employment rates or graduate school acceptance rates?
                  </li>
                </ul>

                <h3>Social and Cultural Factors</h3>
                <ul>
                  <li>
                    <strong>Campus size and setting:</strong> Urban, suburban, or rural? Large university or small
                    college? Each offers different experiences and opportunities.
                  </li>
                  <li>
                    <strong>Distance from home:</strong> Consider how far you're comfortable being from family and the
                    associated travel costs.
                  </li>
                  <li>
                    <strong>Campus culture and values:</strong> Religious affiliation? Political climate? Diversity?
                    Social scene? Look for an environment where you'll feel comfortable and supported.
                  </li>
                  <li>
                    <strong>Housing options:</strong> Guaranteed housing all four years? Quality of dorms? On-campus vs.
                    off-campus living?
                  </li>
                  <li>
                    <strong>Extracurricular activities:</strong> Are there clubs, organizations, or athletic programs
                    aligned with your interests?
                  </li>
                </ul>

                <h3>Financial Considerations</h3>
                <ul>
                  <li>
                    <strong>Total cost of attendance:</strong> Include tuition, fees, room and board, books, travel, and
                    personal expenses.
                  </li>
                  <li>
                    <strong>Financial aid policies:</strong> Need-blind or need-aware admissions? Meet full demonstrated
                    need? Merit scholarships available?
                  </li>
                  <li>
                    <strong>Net price calculator:</strong> Use each school's calculator to estimate your actual cost
                    after financial aid.
                  </li>
                  <li>
                    <strong>Return on investment:</strong> Consider potential career outcomes and starting salaries
                    relative to potential debt.
                  </li>
                </ul>

                <h3>Research Resources</h3>
                <ul>
                  <li>
                    <strong>College websites:</strong> Official information about programs, requirements, campus life,
                    and more.
                  </li>
                  <li>
                    <strong>Campus visits:</strong> Nothing replaces experiencing a campus firsthand. Attend information
                    sessions, take tours, sit in on classes if possible, and talk to current students.
                  </li>
                  <li>
                    <strong>Virtual tours and information sessions:</strong> Many schools offer these options if you
                    can't visit in person.
                  </li>
                  <li>
                    <strong>College fairs:</strong> Meet representatives from multiple schools in one location.
                  </li>
                  <li>
                    <strong>Current students and alumni:</strong> Their perspectives can provide valuable insights into
                    the actual student experience.
                  </li>
                  <li>
                    <strong>College guidebooks and websites:</strong> Resources like College Board, Niche, and College
                    Navigator provide comprehensive information and comparison tools.
                  </li>
                </ul>

                <h2>Building Your College List: Reach, Match, and Safety Schools</h2>
                <p>A balanced college list typically includes 6-10 schools across three categories:</p>

                <h3>Reach Schools (2-3)</h3>
                <p>
                  These are schools where your academic profile (GPA, test scores) falls below the average for admitted
                  students. Admission is possible but not highly likely. Include schools in this category that you would
                  genuinely love to attend, recognizing that admission is competitive for all applicants.
                </p>

                <h3>Match Schools (3-4)</h3>
                <p>
                  Your academic profile aligns with the middle 50% of admitted students. While admission isn't
                  guaranteed, you have a reasonable chance. These should be schools you'd be happy to attend.
                </p>

                <h3>Safety Schools (1-2)</h3>
                <p>
                  Your academic profile exceeds the average for admitted students, making acceptance highly likely.
                  These should still be schools you would genuinely be willing to attend—not just fallbacks you've given
                  little thought to.
                </p>
                <p>
                  Remember that these categories apply primarily to academic admissibility. A school might be a "match"
                  academically but a "reach" financially if it doesn't offer adequate financial aid. Ensure your list
                  includes financially feasible options.
                </p>

                <h2>Understanding Application Components</h2>
                <p>
                  College applications typically include several components, each providing different insights into who
                  you are as a student and person:
                </p>

                <h3>Application Platforms</h3>
                <p>Most colleges use one of these application systems:</p>
                <ul>
                  <li>
                    <strong>Common Application:</strong> Accepted by over 900 colleges, allowing you to complete one
                    application for multiple schools.
                  </li>
                  <li>
                    <strong>Coalition Application:</strong> An alternative platform accepted by about 150 schools.
                  </li>
                  <li>
                    <strong>Institutional Applications:</strong> Some schools have their own application systems.
                  </li>
                </ul>
                <p>
                  Each platform collects similar information, but the specific questions and essay prompts may vary.
                </p>

                <h3>Academic Record</h3>
                <ul>
                  <li>
                    <strong>Transcript:</strong> Your courses and grades throughout high school. Colleges consider
                    course rigor (honors, AP, IB) as well as grades.
                  </li>
                  <li>
                    <strong>Standardized Test Scores:</strong> SAT or ACT scores, though many schools have adopted
                    test-optional policies. Subject Tests and AP/IB exam scores may also be considered.
                  </li>
                </ul>

                <h3>Essays and Personal Statements</h3>
                <ul>
                  <li>
                    <strong>Personal Statement:</strong> A longer essay (typically 650 words for the Common Application)
                    that provides insights into who you are beyond your grades and test scores.
                  </li>
                  <li>
                    <strong>Supplemental Essays:</strong> Additional, school-specific essays that often ask why you're
                    interested in that particular institution or program.
                  </li>
                </ul>

                <h3>Letters of Recommendation</h3>
                <ul>
                  <li>
                    <strong>Teacher Recommendations:</strong> Usually from teachers in core academic subjects who can
                    speak to your intellectual curiosity, classroom engagement, and academic abilities.
                  </li>
                  <li>
                    <strong>Counselor Recommendation:</strong> Provides context about your high school environment and
                    your place within it.
                  </li>
                  <li>
                    <strong>Additional Recommendations:</strong> Some schools allow or require additional letters from
                    employers, coaches, or other mentors.
                  </li>
                </ul>

                <h3>Activities and Honors</h3>
                <p>
                  A list of your extracurricular activities, work experience, volunteer service, and academic or
                  extracurricular honors. This section demonstrates your interests, leadership, commitment, and impact
                  outside the classroom.
                </p>

                <h3>Interviews</h3>
                <p>
                  Some colleges offer or require interviews, either with admissions officers or alumni. These provide an
                  opportunity to demonstrate your interest, ask questions, and add a personal dimension to your
                  application.
                </p>

                <h3>Additional Materials</h3>
                <p>Depending on your interests and the schools' requirements, you might submit:</p>
                <ul>
                  <li>
                    <strong>Arts Supplements:</strong> Portfolios for visual arts, recordings for music, videos for
                    dance or theater.
                  </li>
                  <li>
                    <strong>Research Abstracts:</strong> Summaries of significant research projects.
                  </li>
                  <li>
                    <strong>Additional Writing Samples:</strong> For humanities-focused applicants.
                  </li>
                </ul>

                <h2>Crafting Compelling Essays</h2>
                <p>
                  Essays are your opportunity to share your voice, perspective, and personality with admissions
                  committees. They're particularly important at selective institutions where many applicants have strong
                  academic credentials.
                </p>

                <h3>Personal Statement Tips</h3>
                <ul>
                  <li>
                    <strong>Be authentic:</strong> Write in your own voice about experiences, ideas, or values that
                    genuinely matter to you.
                  </li>
                  <li>
                    <strong>Show, don't tell:</strong> Use specific details, examples, and anecdotes rather than general
                    statements about your qualities.
                  </li>
                  <li>
                    <strong>Focus on depth, not breadth:</strong> Explore one topic thoroughly rather than trying to
                    cover your entire life story.
                  </li>
                  <li>
                    <strong>Highlight growth and reflection:</strong> Colleges are interested not just in what happened,
                    but in what you learned and how you changed.
                  </li>
                  <li>
                    <strong>Consider what's missing elsewhere:</strong> Use your essay to illuminate aspects of yourself
                    not evident in other parts of your application.
                  </li>
                  <li>
                    <strong>Start early and revise thoroughly:</strong> Strong essays typically go through multiple
                    drafts. Get feedback from trusted readers.
                  </li>
                </ul>

                <h3>Supplemental Essay Strategies</h3>
                <ul>
                  <li>
                    <strong>"Why this college" essays:</strong> Demonstrate specific knowledge about the school and
                    explain how its offerings align with your goals and interests. Avoid generic statements that could
                    apply to any college.
                  </li>
                  <li>
                    <strong>Community or diversity essays:</strong> Reflect on your identity, background, or experiences
                    and how they've shaped your perspective and what you would contribute to the campus community.
                  </li>
                  <li>
                    <strong>Activity essays:</strong> Delve deeper into a meaningful extracurricular experience,
                    focusing on your role, impact, and what you learned.
                  </li>
                </ul>

                <h2>Financial Aid and Scholarships</h2>
                <p>Understanding the financial aspects of college is crucial for making informed decisions:</p>

                <h3>Types of Financial Aid</h3>
                <ul>
                  <li>
                    <strong>Need-based aid:</strong> Determined by your family's financial circumstances. Includes
                    grants, subsidized loans, and work-study opportunities.
                  </li>
                  <li>
                    <strong>Merit-based aid:</strong> Awarded based on academic achievement, special talents, or other
                    criteria regardless of financial need.
                  </li>
                </ul>

                <h3>Key Financial Aid Forms</h3>
                <ul>
                  <li>
                    <strong>FAFSA (Free Application for Federal Student Aid):</strong> Required for all federal aid and
                    most institutional aid. Available October 1 of your senior year.
                  </li>
                  <li>
                    <strong>CSS Profile:</strong> An additional form required by many private colleges to determine
                    institutional aid. More detailed than the FAFSA and may have an earlier deadline.
                  </li>
                  <li>
                    <strong>Institutional Forms:</strong> Some colleges have their own financial aid applications or
                    supplementary forms.
                  </li>
                </ul>

                <h3>Scholarship Opportunities</h3>
                <ul>
                  <li>
                    <strong>Institutional Scholarships:</strong> Offered directly by colleges, often automatically
                    considered during the admission process.
                  </li>
                  <li>
                    <strong>External Scholarships:</strong> Offered by corporations, foundations, community
                    organizations, and other entities. Require separate applications and often have specific eligibility
                    criteria.
                  </li>
                </ul>
                <p>
                  Start researching scholarship opportunities early, using resources like your school counseling office,
                  scholarship search engines, and local community organizations. Many scholarships have deadlines in the
                  fall and winter of your senior year.
                </p>

                <h2>Making Your Final Decision</h2>
                <p>
                  After receiving your admission decisions, you'll need to make your final choice by May 1. Consider
                  these factors:
                </p>

                <h3>Comparing Financial Aid Packages</h3>
                <ul>
                  <li>
                    <strong>Net cost:</strong> Calculate the actual out-of-pocket cost after grants and scholarships
                    (which don't need to be repaid).
                  </li>
                  <li>
                    <strong>Types of aid:</strong> Prioritize grants and scholarships over loans. If loans are
                    necessary, federal loans generally offer better terms than private loans.
                  </li>
                  <li>
                    <strong>Renewal conditions:</strong> Understand what GPA or other requirements you must maintain to
                    keep your financial aid in future years.
                  </li>
                  <li>
                    <strong>Four-year perspective:</strong> Consider the total cost over your entire college career, not
                    just the first year.
                  </li>
                </ul>

                <h3>Revisiting Your Priorities</h3>
                <p>
                  Return to your original criteria for selecting colleges and assess how each option aligns with your
                  academic, social, and financial priorities. If possible, attend admitted student events or revisit
                  campuses to get a better feel for where you might thrive.
                </p>

                <h3>Making the Decision</h3>
                <p>
                  Trust yourself to make the right choice based on thorough research and reflection. Remember that there
                  is no single "perfect" school—you can have a successful and fulfilling college experience at many
                  different institutions.
                </p>
                <p>
                  Once you've decided, submit your enrollment deposit by the deadline (typically May 1) and decline
                  offers from other schools. Then, celebrate your accomplishment and begin preparing for this exciting
                  next chapter!
                </p>

                <h2>Conclusion: Beyond Admission</h2>
                <p>
                  The college application process is not just about getting in—it's about finding an environment where
                  you can grow, learn, and prepare for your future. By approaching this process thoughtfully, you're
                  developing skills in research, decision-making, and self-reflection that will serve you well
                  throughout college and beyond.
                </p>
                <p>
                  Remember that college is what you make of it. Regardless of where you enroll, your willingness to
                  engage, explore, and challenge yourself will largely determine what you gain from your college
                  experience. The end of the application process marks the beginning of an exciting new journey—one
                  where you'll continue to discover and develop your interests, abilities, and goals.
                </p>
              </div>
            </CardContent>
          </Card>

          <SummarySubmission level="4" />
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Key Deadlines Checklist</CardTitle>
              <CardDescription>Important dates in the application process</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">October 1, Senior Year</div>
                    <div className="text-sm text-slate-600">FAFSA becomes available</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">November 1-15</div>
                    <div className="text-sm text-slate-600">Early Action/Early Decision deadlines</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">January 1-15</div>
                    <div className="text-sm text-slate-600">Regular Decision deadlines</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">March-April</div>
                    <div className="text-sm text-slate-600">Admission decisions released</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium">May 1</div>
                    <div className="text-sm text-slate-600">National College Decision Day</div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Application Components</CardTitle>
              <CardDescription>Essential elements of your college application</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Academic Record</div>
                  <div className="text-sm text-slate-600">
                    Transcript, standardized test scores (if required), and academic achievements
                  </div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Essays</div>
                  <div className="text-sm text-slate-600">
                    Personal statement and school-specific supplemental essays
                  </div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Letters of Recommendation</div>
                  <div className="text-sm text-slate-600">From teachers, counselors, and sometimes other mentors</div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Activities and Honors</div>
                  <div className="text-sm text-slate-600">
                    Extracurricular involvement, leadership, work experience, and achievements
                  </div>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Financial Aid Forms</div>
                  <div className="text-sm text-slate-600">
                    FAFSA, CSS Profile, and institutional financial aid applications
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>College Research Resources</CardTitle>
              <CardDescription>Tools to help you find your best-fit schools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="rounded-lg border p-3">
                  <div className="font-medium">College Board BigFuture</div>
                  <div className="text-sm text-slate-600 mb-2">
                    Comprehensive college search tool with detailed profiles and comparison features.
                  </div>
                  <a
                    href="https://bigfuture.collegeboard.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-800 hover:underline"
                  >
                    Visit Website →
                  </a>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">College Navigator</div>
                  <div className="text-sm text-slate-600 mb-2">
                    Official U.S. Department of Education database with detailed information on accredited institutions.
                  </div>
                  <a
                    href="https://nces.ed.gov/collegenavigator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-800 hover:underline"
                  >
                    Visit Website →
                  </a>
                </li>
                <li className="rounded-lg border p-3">
                  <div className="font-medium">Common Application</div>
                  <div className="text-sm text-slate-600 mb-2">
                    Apply to multiple colleges with one application. Includes a college search feature.
                  </div>
                  <a
                    href="https://www.commonapp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-800 hover:underline"
                  >
                    Visit Website →
                  </a>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/level-4/college-prep" className="w-full">
                <Button variant="outline" className="w-full">
                  All College Prep Articles
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Share This Article
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
