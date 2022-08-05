import './index.css';

export default function Search(){
    return(
        <div className="Search">
            <div className="hamburger">
                <div className="hamburger_line"></div>
                <div className="hamburger_line"></div>
                <div className="hamburger_line"></div>
            </div>
            <div className="search_container">
                <input type="text" name="search" id="search_bar" placeholder='Search'/>
            </div>
        </div>
    )
}