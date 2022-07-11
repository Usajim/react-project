// This header component will be placed inside the Maincontent componet and will be rendered as one thing
function Header() {
    return(
        <div>
            
             <h1>Welcome to Kenya</h1>
            <img  className="img"src= "images/flag_of_Kenya.gif"/>
        </div>
        
    )
}

// This footer component will be placed inside the Maincontent componet and will be rendered as one thing
function Footer() {
    return(
      <footer>
        <small> © 2022 Mary's Test Development . All rights Reserved</small>
      </footer>
        
    )
}

// This BodyContent component will be placed inside the Maincontent componet and will be rendered as one thing
function BodyContent() {
    return(
     <div>
        <p>
                Kenya, country in East Africa famed for its scenic landscapes and vast wildlife preserves.
                Its Indian Ocean coast provided historically important ports by which goods from Arabian 
                and Asian traders have entered the continent for many centuries.</p>

            <h2>Fun Facts About Kenya</h2>

            <ul>
                <li>Kenya has 50 national parks and reserves.</li>
                <li>Kenya has the most beatiful ladies in Africa</li>
                <li>There are over 60 languages spoken in Kenya</li>
                <li>The first woman to win a Nobel Peace Prize was from Kenya</li>
                <li>Kenya's national animal is the East African Lion</li>
            </ul>
     </div>
        
    )
}

function MainContent() {
    return(

      
        <div className="main-content">
        <Header /> 
        <BodyContent />
        <Footer />

        </div>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById('root')

)
