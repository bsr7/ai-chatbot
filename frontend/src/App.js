import React from 'react';
import './App.css' 
import ChatBot from './Components/ChatBot.js';

const App = () => {
    return (
        <div className='all'>
            <div>
                <h1>GPT-3 Chatbot</h1>
                <p>
                Hello! I'm your friendly AI chatbot, here to help answer any
                questions you might have. Feel free to ask anything, and I'll
                do my best to provide a helpful response. Just remember, I'm 
                powered by algorithms, so my knowledge is based on what I've been 
                trained on!
                </p>
            </div>
            
            <ChatBot />

        </div>
    );
};

export default App;
