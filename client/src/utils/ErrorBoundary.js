import React from 'react';
import PropTypes from 'prop-types';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '../components/UI/Button/Button';
export default class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
      
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className="container" style={{textAlign:'center', marginTop: '20vh'}}>
                <WarningIcon style={{fontSize: 70, color: '#F85D00'}} />
                <h1 style={{color: '#003473'}}>Something went wrong.</h1>
                <div className="row">
                    <div className="col-md-4 offset-md-4 col-lg-4 col-sm-4 col-8 offset-2">
                        <Button title="Refresh mQuote" onClick={() => location.reload()} />
                    </div>
                </div>
            </div>
        );
      }
  
      return this.props.children; 
    }
  }

  ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
  };