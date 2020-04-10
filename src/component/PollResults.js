import React, { useState, Fragment } from "react";
import {Redirect, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

const PollResults = (props) => {
  const [redirect, setRedirect] = useState(false);

  const { userName, avatarUrl, question } = props.location.state;
  const{users, userId} = props;
  
  const questionOptionOneVotes = question.optionOne.votes.length;
  const questionOptionTwoVotes = question.optionTwo.votes.length;

  const answer = users[userId].answers[question.id];
  

  const handleOnClick = () => {
    setRedirect(true);
  };

  return (
    <Fragment>
      {
        redirect ? <Redirect to="/questions/unanswered-questions"/>
        :
        <div className="user poll">
        <div className="user-name">
          <h5>Asked by {userName}</h5>
        </div>
        <div className="pollresults-container-poll">
          <div className="pollresults-image-container">
            <img src={avatarUrl} alt="avatar" />
          </div>
          <div className="pollresults">
            <h5 className="pollresults-title">Results:</h5>
            <div className={`pollresults-container ${answer==='optionOne' ? 'select' : null}`}>
              <div className="pollresults-question">
                <h6>{`${question.optionOne.text}?`}</h6>
                <h6 className={`voted-container ${answer==='optionOne' ? "" : "hidden"}`}><span className="badge badge-warning voted">Voted</span></h6>
              </div>
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${Math.round((questionOptionOneVotes /(questionOptionOneVotes + questionOptionTwoVotes)) *100)}%`}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {Math.round((questionOptionOneVotes / (questionOptionOneVotes + questionOptionTwoVotes)) *100)}%
                </div>
              </div>
              <div className="votes">
                <h6>{`${questionOptionOneVotes} out of ${questionOptionOneVotes + questionOptionTwoVotes} votes`}</h6>
              </div>
            </div>

            <div className={`pollresults-container ${answer==='optionTwo' ? 'select' : null}`}>
              <div className="pollresults-question">
                <h6>{`${question.optionTwo.text}?`}</h6>
                <h6 className={`voted-container ${answer==='optionTwo' ? "" : "hidden"}`}><span className="badge badge-warning voted">Voted</span></h6>
              </div>
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${Math.round((questionOptionTwoVotes / (questionOptionOneVotes + questionOptionTwoVotes)) *100)}%`}}
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {Math.round((questionOptionTwoVotes /(questionOptionOneVotes + questionOptionTwoVotes)) *100)}%
                </div>
              </div>
              <div className="votes">
                <h6>{`${questionOptionTwoVotes} out of ${questionOptionOneVotes + questionOptionTwoVotes} votes`}</h6>
              </div>
            </div>
            <Button
              type="submit"
              variant="outline-info"
              className="view-poll-button btn-block"
              onClick = {handleOnClick}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
      }
      
    </Fragment>
  );
};

export default withRouter(PollResults);
