import './main.css'

function Contact() {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lets discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="https://i.ibb.co/rmWK89c/phone.png" alt="" className="c-icon"/>
                            (925)725-6115
                        </div>
                        <div className="c-info-item">
                              <img src="https://i.ibb.co/sWPmML5/email.png" alt="email" className="c-icon"/>
                                 siem.web@gmail.com
                        </div>
                        <div className="c-info-item">
                              <img src="https://i.ibb.co/K0F0xBx/address.jpg" alt="address" className="c-icon"/>
                              525 University ave Palo Alto CA 95001
                        </div>

                    </div>

                </div>
                <div className="c-right">
                <h3>What's your story? get a touch Always available for freelancing if the right project comes along me</h3>
                    <div className="c-right-title"></div>
                   <div className="c-right-wrapper">
                    <input placeholder="Name"className="c-right-input" ></input>
                    <input placeholder="Subject" className="c-right-input"></input>
                    <input placeholder="Email" className="c-right-input"></input>
                    <textarea placeholder="" className="c-right-comment"></textarea>
                    <button className="c-right-button">Submit</button>
                   </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
