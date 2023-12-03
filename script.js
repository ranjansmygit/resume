document.addEventListener("DOMContentLoaded", function () {
    const experienceStack = document.querySelector(".experience-stack");
    const jobs = document.querySelectorAll(".job");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function revealJobs() {
        jobs.forEach((job) => {
            if (isInViewport(job)) {
                job.style.opacity = 1;
                job.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealJobs);
    revealJobs(); // Trigger the function on page load
});
