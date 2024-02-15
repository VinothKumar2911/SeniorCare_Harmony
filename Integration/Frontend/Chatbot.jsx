import React, { useEffect } from 'react';

const Chatbot = () => {
  const sessionId = `your-session-id-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const projectId = 'your-project-id';
    const languageCode = 'en';

    const loadScript = () => {
        console.log('Loading Dialogflow Messenger script...');
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js';
        script.async = true;
      
        script.onload = () => {
          console.log('Dialogflow Messenger script loaded.');
          // Adding a delay before initializing Messenger
          setTimeout(() => {
            initializeMessenger();
          }, 1000); // You can adjust the delay time as needed
        };
      
        script.onerror = () => {
          console.error('Failed to load Dialogflow Messenger script.');
        };
      
        document.head.appendChild(script);
      };
      

    const initializeMessenger = () => {
      console.log('Initializing Messenger...');
      if (window.dfuse && window.dfuse.Messenger) {
        console.log('Messenger object found.');
        window.dfMessenger = new window.dfuse.Messenger({
          chatTitle: 'Your Chatbot',
          agentId: 'your-agent-id',
          language: languageCode,
          projectId: projectId,
          sessionId: sessionId,
        });

        window.dfMessenger.render();
      } else {
        console.error('Messenger object not found after script load.');
      }
    };

    // Check if the script is already loaded
    if (window.dfuse && window.dfuse.Messenger) {
      console.log('Dialogflow Messenger script already loaded.');
      initializeMessenger();
    } else {
      // If not, dynamically load the script and initialize when loaded
      loadScript();
    }

    return () => {
      if (window.dfMessenger) {
        window.dfMessenger.close();
      }
    };
  }, [sessionId]);

  return <div id="df-root"></div>;
};

export default Chatbot;
