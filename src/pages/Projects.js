import './Project.css';
import movie from '../images/movie.mp4';
import movie2 from '../images/movie2.mp4';
// import pause from '../images/pause';
// import play from '../images/play';
const Projects=()=>{
return(
<div class="page">
<div id = "p">Projects</div>
<div class="container2">
    {/* <br><br> */}
    <p class="details"> <span> Management System(Data Structures and Algorithms)</span><br></br><br></br>
        This is a library management system. I used scene builder to make the interfaces.
        People can create an account and borrow as many books as they want. The history of each customer
        will be saved into thier own account. If any book is not returned on time, overdue fee will be charged
        to the account.
        Librarians will have the same opportunities as users. In addition, they can suspend user’s account, add
        book, remove book, and update books in library.
    </p>
    <div id="outerVideo">
    <div class="videoBox">
    <button id="vidbutton"> </button>
</div>
    <video id="myvid" width="600" height="300"  controls muted loop>
        <source src={movie} type="video/mp4"/>
        <source src={movie} type="video/ogg"/> 
        </video>
</div>
</div>
 <div class="container2">
    {/* <br><br> */}
    <p class="details"> <span> Crime Management System</span><br></br><br></br>
        This is an automated system for managing and storing all the records related to criminals in a particular 
        area. There will be a proper criminal record for all the criminals according to their crime, date of 
        crime, and their punishment period.
        One of the most significant features is that the victims can also file their complaints through this 
        system at a particular police station or from any place and at any time by providing the details of the
        incident with all the required details. When the request is lodged by the victim or the user, it will 
        reach the server of the Police station and it will be converted to an FIR for further investigations.
        
    </p>
    <div id="outerVideo">
    <div class="videoBox2">
    <button id="vidbutton2"> </button>
</div>
    <video id='myvid2' width="600" height="300" controls muted>
        <source src={movie2} type="video/mp4"/>
        <source src={movie2} type="video/ogg"/>
        Your browser does not support the video tag.
    </video>

</div>
</div>
</div> 
);
}
 
export {Projects};