import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ isLoading = true, onFinish }) => {
    const [shouldFadeOut, setShouldFadeOut] = useState(false);
    const [loadingTime, setLoadingTime] = useState(0);

    useEffect(() => {
        if (!isLoading) {
            setShouldFadeOut(true);
            const timer = setTimeout(() => {
                if (onFinish) onFinish();
            }, 300); // Reduced from 200ms for smoother transition

            return () => clearTimeout(timer);
        }
    }, [isLoading, onFinish]);

    // Fallback timer to prevent infinite loading
    useEffect(() => {
        const fallbackTimer = setTimeout(() => {
            if (isLoading) {
                setShouldFadeOut(true);
                setTimeout(() => {
                    if (onFinish) onFinish();
                }, 300);
            }
        }, 8000); // 8 second fallback

        return () => clearTimeout(fallbackTimer);
    }, [isLoading, onFinish]);

    return (
        <div className={`loader-wrapper ${shouldFadeOut ? 'fade-out' : ''}`}>
            <div className="wrapper">
                <div className="box-wrap">
                    <div className="box one"></div>
                    <div className="box two"></div>
                    <div className="box three"></div>
                    <div className="box four"></div>
                    <div className="box five"></div>
                    <div className="box six"></div>
                </div>
            </div>

            <div className="loader-content">
                <div className="logo-container">
                    <img
                        src="https://i.imgur.com/Lg3kv0j.png"
                        alt="ECESS Logo"
                        className="logo-image responsive-logo"
                        loading="eager" // Force immediate loading for logo
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;