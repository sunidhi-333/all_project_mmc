
function Home() {
    const developer = 'devaanshi chaturvedi';  //property
    const teamsize = 10;
    const tmembers = ['devaanshi', 'siddharth', 'priyanshi', 'sahil', 'shubham'];
 
    const projectInfo = {
        projectDuration: '3 months',
        projectName: 'React Application',
        projectDescription: 'A simple React application to demonstrate basic concepts of React.',
        projectStatus: 'In Progress',
        projectMembers: ['Sunidhi', 'siddharth', 'priyanshi', 'sahil', 'shubham'] ,
        projectManager: 'Sunidhi Bhardwaj',
        projectVersion: '1.0.0',
 
    };  //json data
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of our React application by {developer}</p>
            <p> Team Size: {teamsize}</p>
            <p>Team Members: {tmembers.join(', ')}</p>
            <ul>
                {tmembers.map((member) => <li key={member}>{member}</li>)}
            </ul>
            <h2>Project Information</h2>
            <p>Project Name: {projectInfo.projectName}</p>
            <p>Project Duration: {projectInfo.projectDuration}</p>
            <p>Project Description: {projectInfo.projectDescription}</p>
            <p>Project Status: {projectInfo.projectStatus}</p>
            <p>Project Manager: {projectInfo.projectManager}</p>
            <p>Project Version: {projectInfo.projectVersion}</p>
            <h3>Project Members:</h3>
            <ul>
                {projectInfo.projectMembers.map((member) => (
                    <li key={member}>{member}</li>
                ))} </ul>
            <p>Current Date: {new Date().toLocaleDateString()}</p>
        </div>
    );
}
 
export default Home;