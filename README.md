# Sample-Recruitement-dashborad-App
Basic recruitment application which contains dashboard page with tiles containing information about Job applicants and list view to show list of applicants (supported client-side pagination of table)

A Web Application that allows Admin with credential (Admin/Admin@1234)
- To Login to the App. 
- Display tiles which shows total number of Job Applicants and seperate tiles for each domain
- Table view containing each candidate information
- Table is supported with pagination with default page size as 5.
- Side collapsable navigation bar which contains menu items (dashboard/logout)

<h2>Technologies</h2>
<ul>
 <li>Angular</li>
 <li>Angular cli</li>
 <li>Bootstrap</li>
 <li>HTML 5</li>
 <li>CSS</li>
 <li>Jquery</li>
 <li>TypeScript</li>
</ul>
 <h2>Running Demo</h2>
 
 <h3>Uploaded a Gif Recruitment Application to view the demo</h3> 
 
 To run a demo Applcation
 Web application:
  - Install node
  - Install Angular cli
  - Download the project
  - Open the folder frontend and go to eventmanager
  - Run npm install to download all the  dependencies for your angular project.
  - Run ng serve 

 By default, Web app runs in port 4200.
 
<h2> About Application</h2>

<h4>Login Component</h4>
 <ul>
 <li> Client side validation done to check if logged user is Admin or not</li>
 <li> Once loggedin, User information is stored in Session storage which will be available until user closes the tab</li>
 <li> If Admin is not logged in. Other pages cannot be accessed. When we try to access other pages directly through URL, the application is capable of redriecting to Login page.</li>
 </ul>

<h4>Dashboard</h4>
 <ul>
 <li> On login, Admin will be navigated to dashboard </li>
 <li> Contains two sections, one to show tiles with number of applicants applied to a specific domain and other section displays list of all candidates information </li>
 <li> List is supported with pagination with default page size set to 5. Page size can be changed by selecting option in select dropdown</li>
 <li> Candiates data is read from applicationdata.json file. On adding new entries, UI will support handling dynamic data</li>
 </ul>

<h4>Logout</h4>
  - User will be logged out from application
  - User details will be removed from Session storage.
