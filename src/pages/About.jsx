function About() {
    return(
        <div>
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className="mb-4 text-2xl font-light">
                A React app to search for profiles and see profile details. This projest is part of the 
                <a href="https://www.udemy.com/course/modern-react-front-to-back/">
                    {" "}
                    React Front To Back
                </a>{" "}
                Udemy course by
                <strong>
                    <a href="https://traversymedia.com"> Brad Traversy</a>
                </strong>

            </p>
            <p className="text-lg text-gray-400">
                Layout By: Paula Watkins
                <a className="text-white" href="https://twitter.com/hassibmoddasser">
                    Hassib Moddasser
                </a>
            </p>
        </div>
    )
}


export default About