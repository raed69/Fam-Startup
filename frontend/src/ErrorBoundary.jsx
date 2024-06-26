// ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
    // Log the error or send it to a logging service
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please refresh the page or try again later.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
