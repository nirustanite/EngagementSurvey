import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import {logo} from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import './HomePage.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = theme => ({
   heading:{
        paddingTop:"40px",
        textAlign: "center"
   },
   subheading:{
        textAlign: "center",
        paddingTop: "20px",
   },
   button:{
      alignItems:"center",
      paddingTop: "30px",
   }
  });


class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentQuestionIndex: 1
        }
    }

    componentDidMount(){
        this.props.fetchQuestionCount();
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                    <div className="body-container">
                        <Typography variant="h3" component="h3" className={classes.heading}> Engagement Satisfaction</Typography>
                        <Typography variant="h4" component="h4" className={classes.subheading}> Assessment</Typography>
                        <Typography variant="h6" component="h6" className={classes.heading}> 1. Don't refresh the page while taking the Assessment</Typography>
                        <Typography variant="h6" component="h6" className={classes.subheading}> 2. Use Previous Button for going back a question</Typography>
                        <br />
                        <Link to={`/questions/${this.state.currentQuestionIndex}`} >
                        <Button variant="contained" className="button" color="primary"> Start Assessment</Button></Link>
                    </div> 
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        questioncount: state.questioncount
    }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchQuestionCount: () => dispatch(actions.fetchQuestionCount())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(useStyles)(HomePage))