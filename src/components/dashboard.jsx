import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

// IMPORTANT: Using our trained waiter

export default function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {

        const fetchVIPData = async () => {

            try {

                // The trained waiter automatically attaches the token here
                const response = await api.get(
                    "/api/some-protected-django-url/"
                );

                console.log(response.data);

            } catch (error) {

                console.error(
                    "Protected request failed",
                    error.response || error
                );

                if (
                    error.response?.status === 401 ||
                    error.response?.status === 403
                ) {

                    localStorage.clear();
                    navigate("/login");
                }
            }
        };

        fetchVIPData();

    }, [navigate]);

    const handleLogout = () => {

        // Empty the pockets and leave
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        navigate("/login");
    };

    return (
        <div>
            <h1>VIP Dashboard</h1>

            <p>
                If you are seeing this, your wristband is valid.
            </p>

            <p>
                Django says: Hello
            </p>

            <button onClick={handleLogout}>
                Log Out
            </button>
        </div>
    );
}