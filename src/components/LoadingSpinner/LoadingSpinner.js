import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ isLoading = true, onFinish, loadingProgress = 0 }) => {
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
        }, 20000); // 20 second fallback (increased for more images)

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
                        src="/images/logos/ecess-logo.png"
                        alt="ECESS Logo"
                        className="logo-image responsive-logo"
                        loading="eager"
                    />
                </div>
                
                {/* Progress indicator */}
                <div className="loading-info">
                    <div className="loading-text">
                        {loadingProgress < 100 ? 'Loading images...' : 'Ready!'}
                    </div>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${loadingProgress}%` }}
                        ></div>
                    </div>
                    <div className="progress-text">{Math.round(loadingProgress)}%</div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;