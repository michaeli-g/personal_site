function CheckBkg(props) {
    if (window.innerWidth > window.innerHeight) {
        return (
            <video autoPlay loop muted plays-inline="true" width="100%">
                <source src="assets/pictures/water.mp4" type="video/mp4" />
            </video>
        );
    }
    else {
        return (
            <img height="100%" width="100%" src="assets/pictures/sunrise.jpg" />
            )
    }
}

function CheckContent(props) {
    if (window.innerWidth < window.innerHeight) {
        return (
            <div class="col-lg-6 text-center">
                <h3 class="display-5 fw-bold lh-1 mb-3 ">Let's grow!</h3>
                <p class="lead">
                    Leveraging bleeding edge technologies, find out how your business can cut costs and save time all while growing. From improving daily operations
                    to reaching new markets the coverage is extensive. I can also help improve the workflow of your business and bolster efficiency. I'm a full time software developer for the DoD while doing consulting in my free time.
                    My aim is to use my skill set to help businesses improve in areas they may be lacking in or help them further excel in other areas. Below is a bit more background on who I am.
                </p>
            </div>
        );
    }
    else {
        return (
            
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5 pt-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="/assets/pictures/tech stack.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"></img>
                    </div>


                    <div class="col-lg-6">
                        <h3 class="display-5 fw-bold lh-1 mb-3">Let's grow!</h3>
                        <p class="lead">
                            Leveraging bleeding edge technologies, find out how your business can cut costs and save time all while growing. From improving daily operations
                            to reaching new markets the coverage is extensive. I can also help improve the workflow of your business and bolster efficiency. I'm a full time software developer for the DoD while doing consulting in my free time.
                            My aim is to use my skill set to help businesses improve in areas they may be lacking in or help them further excel in other areas. Below is a bit more background on who I am.
                        </p>
                        <h3 class="display-5 fw-bold lh-1 mb-3">Background</h3>
                        <p class="lead">
                            I'm currently a software developer for a private company contracted out by the Department of Defense. My current role primarily consists on overseeing
                            the production and testing of our software, with a heavy focus in automation. Along with this I've developed infrastructure for my team improving workflow, maintain build machines we use for production/testing and manage the teams archive. While pursuing my
                            b.s. in computer engineering at the University of Delaware I completed research under Dr.Haining Wang. I worked on various cybersecurity
                            projects and wrote a research paper focusing on cybersecurity (or lack thereof) in most modern day cars <a target="_blank" href="/assets/docs/paper.pdf"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                            </svg></a>. 
                        </p>
                    </div>
                </div>
            );
    }
}

const root = ReactDOM.createRoot(document.getElementById('bkg'));
const root2 = ReactDOM.createRoot(document.getElementById('content'));
const element = <CheckBkg />;
const element2 = <CheckContent />;

root.render(element);
root2.render(element2);