import React from "react";

function Media() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-between">
    
      <main className="vh-100 overflow-auto ml-3"  style={{ padding: "0 280px", width:'95%' }}>
        <div className="h-100 position-relative d-flex flex-column justify-content-between">
          <div className="py-3">
            <h3>World's First AI Software Engineer is Launched</h3>
          </div>
          <div className="embed-responsive embed-responsive-16by9" style={{ width: '100%', height: 0, paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/jUS6XxoSq3E?si=TZAbO9TAx5CQLr1n"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}
            ></iframe>
          </div>
          <div className="py-2 mt-3 overflow-scroll overflow-x-hidden" style={{ height: "120px",textAlign:"justify" , scrollbarWidth: "thin"}}>
            <p>
              Cognition, a U.S.-based startup, has introduced Devin, the world's
              first AI software engineer. Devin is an innovative AI assistant
              capable of transforming simple commands into fully functioning
              websites or software programs. The company emphasizes that Devin
              is not intended to replace human engineers but rather to
              collaborate with them. Cognition highlights that Devin has
              successfully passed practical engineering interviews conducted by
              leading AI companies
            </p>
          </div>
          <div className="d-flex justify-content-end mt-4" >
            <button class='bg-blue' style={{ width: '100px',height:'30px', borderRadius: '18px' }} type="button" className="btn btn-info">Connect</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Media;
