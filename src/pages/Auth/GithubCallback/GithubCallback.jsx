import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const GitHubCallback = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('access_token');

    // If token exists, set the access token and fetch user data
    if (token) {
      setAccessToken(token);

      const fetchUserData = async () => {
        try {
          // Replace with your actual API URL stored in environment variables
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/github/validate`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log('Response Data from Backend:', response.data);

          // After successful response, navigate to another page
          navigate('/'); // Or you can redirect to the dashboard, depending on your app's flow
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Optionally handle navigation if there's an error (e.g., navigate to an error page)
        }
      };

      fetchUserData();
    } else {
      // If no token is found, navigate to the home page or login page
      navigate('/');
    }
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div>
      <h1>Dashboard</h1>
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <p>No access token found. Please log in again.</p>
      )}
    </div>
  );
};

export default GitHubCallback;
