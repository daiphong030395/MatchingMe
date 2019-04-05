import React from 'react';

export default class NewPost extends React.Component {
    render(){
        return(
    <div>
      <h1><b>POST</b></h1>
        {/* <div className="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> */}
            {/* <div className="modal-dialog cascading-modal" role="document"> */}
              {/* <!--Content--> */}
              {/* <div className="modal-content"> */}
          
                {/* <!--Header--> */}
                <div className="modal-header light-blue darken-3 white-text">
                  <h4 className="title">  Contact form AAAAA</h4>
                  <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                {/* <!--Body--> */}
                <div className="modal-body mb-0">
                  <div className="md-form form-sm">
                    <i className="fas fa-envelope prefix active"></i>
                    <input type="text" id="form8" className="form-control" />
                    <label for="form8" className="active">Your name</label>
                  </div>
          
                  <div className="md-form form-sm">
                    <i className="fas fa-lock prefix active"></i>
                    <input type="password" id="form9" className="form-control"/>
                    <label for="form9" className="active">Your email</label>
                  </div>
          
                  <div className="md-form form-sm">
                    <i className="fas fa-tag prefix"></i>
                    <input type="search" id="form-autocomplete-2" className="form-control mdb-autocomplete"/>
                    <button className="mdb-autocomplete-clear">
                      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </button>
                    <label for="form-autocomplete-2" className="active">Subject</label>
                  </div>
          
                  <div className="md-form form-sm">
                    <i className="fas fa-pencil-alt prefix"></i>
                    <textarea type="text" id="form67" className="md-textarea mb-0"></textarea>
                    <label for="form67">Your message</label>
                  </div>
          
                  <div className="text-center mt-1-half">
                    <button className="btn btn-info mb-2 waves-effect waves-light">Send <i className="fas fa-send ml-1"></i></button>
                  </div>
          
                </div>
              {/* </div> */}
              {/* <!--/.Content--> */}
             {/* </div> */}
         {/* </div> */}
          
          <div className="text-center">
            <a href="./#" className="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalContactForm">Launch
              Modal Contact</a>
          </div>
    </div>
        )
    }
} 
